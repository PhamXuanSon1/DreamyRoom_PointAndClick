#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System.Linq;

public class SortHierarchyByNameTool : EditorWindow
{
    [Tooltip("Danh sách các object sẽ được sắp xếp")]
    public List<GameObject> objects = new List<GameObject>();

    [MenuItem("Tools/Item/Sort Hierarchy By Name")]
    public static void Open()
    {
        GetWindow<SortHierarchyByNameTool>("Sort By Name Tool");
    }

    void OnGUI()
    {
        GUILayout.Label("Sort Hierarchy By Name (Alpha-Beta)", EditorStyles.boldLabel);

        SerializedObject so = new SerializedObject(this);
        SerializedProperty listProp = so.FindProperty("objects");

        EditorGUILayout.PropertyField(listProp, true);
        so.ApplyModifiedProperties();

        GUILayout.Space(10);

        if (GUILayout.Button("FILL FROM SELECTION", GUILayout.Height(30)))
        {
            FillFromSelection();
        }

        GUILayout.Space(10);

        // 🔽 A -> Z
        if (GUILayout.Button("SORT A → Z"))
        {
            SortHierarchy(true);
        }

        // 🔼 Z -> A
        if (GUILayout.Button("SORT Z → A"))
        {
            SortHierarchy(false);
        }

        GUILayout.Space(10);

        if (GUILayout.Button("CLEAR LIST"))
        {
            objects.Clear();
        }
    }

    void FillFromSelection()
    {
        objects.Clear();
        // Lấy danh sách đang chọn trên Hierarchy và giữ nguyên thứ tự ban đầu của chúng
        var selected = Selection.gameObjects.OrderBy(o => o.transform.GetSiblingIndex()).ToList();
        objects.AddRange(selected);
        Debug.Log($"[SortByNameTool] Đã thêm {objects.Count} objects vào danh sách.");
    }

    void SortHierarchy(bool ascending)
    {
        if (objects.Count == 0)
        {
            Debug.LogWarning("[SortByNameTool] Danh sách trống!");
            return;
        }

        // Lọc bỏ các phần tử null (nếu có bị xóa ngoài scene)
        objects = objects.Where(o => o != null).ToList();

        // Tìm vị trí Index nhỏ nhất để sau khi sắp xếp, cụm object không bị đẩy văng đi chỗ khác
        int minSiblingIndex = objects.Min(o => o.transform.GetSiblingIndex());

        // Sắp xếp list theo tên (A-Z hoặc Z-A)
        objects = ascending ? objects.OrderBy(o => o.name).ToList() : objects.OrderByDescending(o => o.name).ToList();

        for (int i = 0; i < objects.Count; i++)
        {
            Undo.SetTransformParent(objects[i].transform, objects[i].transform.parent, "Sort Hierarchy By Name");
            objects[i].transform.SetSiblingIndex(minSiblingIndex + i);
        }

        Debug.Log($"[SortByNameTool] Đã sắp xếp ({(ascending ? "A → Z" : "Z → A")}) thành công!");
    }
}
#endif
#if UNITY_EDITOR
using UnityEditor;
#endif

using UnityEngine;
using System.Collections.Generic;

#if UNITY_EDITOR
public class ResetScaleTool : EditorWindow
{
    public List<Transform> targets = new List<Transform>();

    [MenuItem("Tools/Reset Scale Tool")]
    static void Open()
    {
        GetWindow<ResetScaleTool>("Reset Scale");
    }

    void OnGUI()
    {
        SerializedObject so = new SerializedObject(this);
        SerializedProperty listProp = so.FindProperty("targets");

        EditorGUILayout.PropertyField(listProp, true);
        so.ApplyModifiedProperties();

        GUILayout.Space(10);

        if (GUILayout.Button("Reset Scale Tool To 1"))
        {
            SetScale(Vector3.one);
        }

        GUILayout.Space(5);

        if (GUILayout.Button("Reset Scale Tool To 0"))
        {
            SetScale(Vector3.zero);
        }
    }

    void SetScale(Vector3 scale)
    {
        foreach (Transform t in targets)
        {
            if (t != null)
            {
                Undo.RecordObject(t, "Set Scale");

                t.localScale = scale;

                EditorUtility.SetDirty(t);
            }
        }

        Debug.Log($"Done Set Scale: {scale}");
    }
}
#endif
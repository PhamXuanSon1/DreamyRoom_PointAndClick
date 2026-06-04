#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(ItemManager))]
public class ItemManagerEditor : Editor
{
    public override void OnInspectorGUI()
    {
        // Vẽ giao diện mặc định của ItemManager
        DrawDefaultInspector();

        ItemManager manager = (ItemManager)target;

        GUILayout.Space(15);
        
        // Tạo một nút bấm to trên Inspector
        if (GUILayout.Button("Tự Động Tìm Tất Cả ItemController", GUILayout.Height(35)))
        {
            // Lấy tất cả ItemController có trong Scene (bao gồm cả những cái đang bị tắt - true)
            ItemController[] allSpotsInScene = Resources.FindObjectsOfTypeAll<ItemController>();

            // Lọc ra các ItemController thực sự ở trong Scene (loại bỏ những cái nằm trong prefab ở thư mục Project)
            System.Collections.Generic.List<ItemController> validSpots = new System.Collections.Generic.List<ItemController>();
            foreach (var spot in allSpotsInScene)
            {
                if (spot.gameObject.scene.IsValid())
                {
                    validSpots.Add(spot);
                }
            }

            // Gán vào mảng
            manager.allSpots = validSpots.ToArray();

            // Đánh dấu là đã thay đổi để Unity cho phép Save Scene
            EditorUtility.SetDirty(manager);

            Debug.Log($"[Auto-Tool] Đã tìm thấy và gán thành công {validSpots.Count} ItemController vào ItemManager!");
        }
    }
}
#endif
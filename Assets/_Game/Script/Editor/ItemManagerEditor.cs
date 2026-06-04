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

        GUILayout.Space(10);

        // Nút thứ 2: Tự động gán ID
        if (GUILayout.Button("Tự Động Gán ID Dựa Theo Tên Item", GUILayout.Height(35)))
        {
            if (manager.allSpots == null || manager.allSpots.Length == 0)
            {
                Debug.LogWarning("[Auto-Tool] Danh sách All Spots đang trống. Vui lòng bấm 'Tìm Tất Cả ItemController' trước!");
                return;
            }

            System.Collections.Generic.Dictionary<string, int> nameToIdMap = new System.Collections.Generic.Dictionary<string, int>();
            int currentId = 0;
            int countUpdated = 0;

            foreach (var spot in manager.allSpots)
            {
                if (spot == null) continue;

                // Lọc tên: Bỏ qua "(1)", "(2)", "_Left", "_Right" để các object giống nhau có chung 1 chuỗi tên gốc
                string cleanName = spot.gameObject.name;
                cleanName = System.Text.RegularExpressions.Regex.Replace(cleanName, @"\s*\(\d+\)$", "");
                cleanName = cleanName.Replace("_Left", "").Replace("_Right", "").Trim();

                // Nếu tên này chưa có ID, thì cấp ID mới
                if (!nameToIdMap.ContainsKey(cleanName))
                {
                    nameToIdMap[cleanName] = currentId;
                    currentId++;
                }

                // Gán ID cho spot và lưu lại
                Undo.RecordObject(spot, "Auto Assign Spot ID");
                spot.spotID = nameToIdMap[cleanName];
                EditorUtility.SetDirty(spot);
                countUpdated++;
            }

            Debug.Log($"[Auto-Tool] Đã tạo thành {currentId} nhóm ID khác nhau! (Cập nhật thành công {countUpdated} spot).");
        }
    }
}
#endif
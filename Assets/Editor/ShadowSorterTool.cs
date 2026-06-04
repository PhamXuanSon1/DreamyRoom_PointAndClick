#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;
using System.IO;

public class ShadowSorterTool : EditorWindow
{
    private DefaultAsset targetFolder;

    [MenuItem("Tools/Shadow Sorter")]
    public static void ShowWindow()
    {
        GetWindow<ShadowSorterTool>("Shadow Sorter");
    }

    private void OnGUI()
    {
        GUILayout.Space(10);

        GUILayout.Label("Folder chứa sprite", EditorStyles.boldLabel);

        targetFolder = (DefaultAsset)EditorGUILayout.ObjectField(
            "Target Folder",
            targetFolder,
            typeof(DefaultAsset),
            false
        );

        GUILayout.Space(10);

        if (GUILayout.Button("Move Shadow Files"))
        {
            MoveShadowFiles();
        }
    }

    private void MoveShadowFiles()
    {
        if (targetFolder == null)
        {
            Debug.LogError("Chưa chọn folder!");
            return;
        }

        string folderPath = AssetDatabase.GetAssetPath(targetFolder);

        if (!AssetDatabase.IsValidFolder(folderPath))
        {
            Debug.LogError("Đây không phải folder!");
            return;
        }

        string shadowFolder = folderPath + "/Shadow";

        // Tạo folder Shadow nếu chưa có
        if (!AssetDatabase.IsValidFolder(shadowFolder))
        {
            AssetDatabase.CreateFolder(folderPath, "Shadow");
        }

        string[] files = Directory.GetFiles(folderPath);

        foreach (string file in files)
        {
            string extension = Path.GetExtension(file);

            // Chỉ xử lý ảnh
            if (extension != ".png" &&
                extension != ".jpg" &&
                extension != ".jpeg")
                continue;

            string fileName = Path.GetFileNameWithoutExtension(file);

            // File có chữ shadow ở cuối
            if (fileName.EndsWith("_shadow"))
            {
                string fileNameWithExt = Path.GetFileName(file);

                string fromPath = file.Replace("\\", "/");
                string toPath = shadowFolder + "/" + fileNameWithExt;

                string result = AssetDatabase.MoveAsset(fromPath, toPath);

                if (string.IsNullOrEmpty(result))
                {
                    Debug.Log("Moved: " + fileNameWithExt);
                }
                else
                {
                    Debug.LogError(result);
                }
            }
        }

        AssetDatabase.Refresh();

        Debug.Log("Done!");
    }
}
#endif
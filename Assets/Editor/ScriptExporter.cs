#if UNITY_EDITOR

using UnityEngine;
using UnityEditor;
using System.IO;
using System.Text;
using System.Collections.Generic;

public class ScriptExporter : EditorWindow
{
    private Vector2 scrollPos;

    // Danh sách folder được chọn 
    private List<Object> selectedFolders = new List<Object>();

    // Đường dẫn export
    private string exportFolder = @"F:\Text";

    [MenuItem("Tools/Export Folder Scripts To TXT")]
    public static void ShowWindow()
    {
        GetWindow<ScriptExporter>("Script Exporter"); 
    }

    private void OnGUI()
    {
        GUILayout.Space(10);

        GUILayout.Label("FOLDER SCRIPT EXPORTER", EditorStyles.boldLabel);

        GUILayout.Space(10);

        GUILayout.Label("Export Path");
        EditorGUILayout.TextField(exportFolder);

        GUILayout.Space(10);

        DrawFolderDropArea();

        GUILayout.Space(10);

        GUILayout.Label("Selected Folders: " + selectedFolders.Count);

        GUILayout.Space(5);

        scrollPos = GUILayout.BeginScrollView(scrollPos);

        for (int i = 0; i < selectedFolders.Count; i++)
        {
            GUILayout.BeginHorizontal();

            selectedFolders[i] = EditorGUILayout.ObjectField(
                selectedFolders[i],
                typeof(Object),
                false
            );

            if (GUILayout.Button("X", GUILayout.Width(30)))
            {
                selectedFolders.RemoveAt(i);
                i--;
            }

            GUILayout.EndHorizontal();
        }

        GUILayout.EndScrollView();

        GUILayout.Space(15);

        if (GUILayout.Button("EXPORT ALL SCRIPTS", GUILayout.Height(40)))
        {
            ExportAllScripts();
        }

        GUILayout.Space(5);

        if (GUILayout.Button("CLEAR"))
        {
            selectedFolders.Clear();
        }
    }

    private void DrawFolderDropArea()
    {
        Rect dropArea = GUILayoutUtility.GetRect(
            0.0f,
            80.0f,
            GUILayout.ExpandWidth(true)
        );

        GUI.Box(dropArea, "Drag & Drop Folder Here");

        Event evt = Event.current;

        switch (evt.type)
        {
            case EventType.DragUpdated:
            case EventType.DragPerform:

                if (!dropArea.Contains(evt.mousePosition))
                    return;

                DragAndDrop.visualMode = DragAndDropVisualMode.Copy;

                if (evt.type == EventType.DragPerform)
                {
                    DragAndDrop.AcceptDrag();

                    foreach (Object draggedObject in DragAndDrop.objectReferences)
                    {
                        string path = AssetDatabase.GetAssetPath(draggedObject);

                        if (AssetDatabase.IsValidFolder(path))
                        {
                            if (!selectedFolders.Contains(draggedObject))
                            {
                                selectedFolders.Add(draggedObject);
                            }
                        }
                    }
                }

                evt.Use();
                break;
        }
    }

    private void ExportAllScripts()
    {
        if (selectedFolders.Count == 0)
        {
            EditorUtility.DisplayDialog(
                "Error",
                "No folder selected!",
                "OK"
            );

            return;
        }

        // Tạo folder export nếu chưa có
        if (!Directory.Exists(exportFolder))
        {
            Directory.CreateDirectory(exportFolder);
        }

        string fileName =
            "Scripts_" +
            System.DateTime.Now.ToString("yyyyMMdd_HHmmss") +
            ".txt";

        string savePath = Path.Combine(exportFolder, fileName);

        StringBuilder builder = new StringBuilder();

        builder.AppendLine("=======================================");
        builder.AppendLine("UNITY SCRIPT EXPORT");
        builder.AppendLine("TIME: " + System.DateTime.Now);
        builder.AppendLine("=======================================\n");

        int totalScripts = 0;

        foreach (Object folderObj in selectedFolders)
        {
            string folderPath = AssetDatabase.GetAssetPath(folderObj);

            // Lấy tất cả file .cs trong folder + subfolder
            string[] files = Directory.GetFiles(
                folderPath,
                "*.cs",
                SearchOption.AllDirectories
            );

            foreach (string file in files)
            {
                if (!File.Exists(file))
                    continue;

                string content = File.ReadAllText(file);

                builder.AppendLine("#######################################");
                builder.AppendLine("FILE: " + Path.GetFileName(file));
                builder.AppendLine("PATH: " + file);
                builder.AppendLine("#######################################\n");

                builder.AppendLine(content);

                builder.AppendLine("\n\n");

                totalScripts++;
            }
        }

        File.WriteAllText(savePath, builder.ToString(), Encoding.UTF8);

        Debug.Log("EXPORT SUCCESS");
        Debug.Log("TOTAL SCRIPTS: " + totalScripts);
        Debug.Log("SAVE PATH: " + savePath);

        EditorUtility.RevealInFinder(savePath);

        EditorUtility.DisplayDialog(
            "SUCCESS",
            "Exported " + totalScripts + " scripts!",
            "OK"
        );
    }
}

#endif
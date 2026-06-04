#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;
using System.Text;
using System.IO;

public class ExportHierarchyTool : EditorWindow
{
    [MenuItem("Tools/Export Hierarchy To TXT")]
    static void ExportHierarchy()
    {
        string folderPath = @"D:\Unity\Text";

        if (!Directory.Exists(folderPath))
        {
            Directory.CreateDirectory(folderPath);
        }

        string path = Path.Combine(
            folderPath,
            "list hierachi.txt"
        );

        StringBuilder sb = new StringBuilder();

        GameObject[] roots =
            UnityEngine.SceneManagement.SceneManager
            .GetActiveScene()
            .GetRootGameObjects();

        for (int i = 0; i < roots.Length; i++)
        {
            WriteTransform(roots[i].transform, sb, 0);
        }

        File.WriteAllText(path, sb.ToString());

        Debug.Log("Exported Hierarchy To: " + path);

        EditorUtility.RevealInFinder(path);
    }

    static void WriteTransform(
        Transform tf,
        StringBuilder sb,
        int depth
    )
    {
        string indent = "";

        for (int i = 0; i < depth; i++)
        {
            indent += "    ";
        }

        sb.AppendLine(indent + "- " + tf.name);

        for (int i = 0; i < tf.childCount; i++)
        {
            WriteTransform(
                tf.GetChild(i),
                sb,
                depth + 1
            );
        }
    }
}
#endif
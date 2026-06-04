#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;

public class RemoveAllScriptsAndCollidersTool : EditorWindow
{
    private GameObject rootObject;

    [MenuItem("Tools/Remove Scripts And Colliders")]
    static void OpenWindow()
    {
        GetWindow<RemoveAllScriptsAndCollidersTool>("Remove Components");
    }

    private void OnGUI()
    {
        GUILayout.Space(10);

        rootObject = (GameObject)EditorGUILayout.ObjectField(
            "Root Object",
            rootObject,
            typeof(GameObject),
            true
        );

        GUILayout.Space(10);

        if (GUILayout.Button("Remove ALL Scripts + Colliders"))
        {
            if (rootObject == null)
            {
                Debug.LogWarning("Chưa chọn object!");
                return;
            }

            RemoveEverything(rootObject);

            Debug.Log("DONE REMOVE!");
        }
    }

    private void RemoveEverything(GameObject root)
    {
        Transform[] allObjects = root.GetComponentsInChildren<Transform>(true);

        foreach (Transform t in allObjects)
        {
            GameObject obj = t.gameObject;

            // =========================
            // REMOVE NORMAL SCRIPTS
            // =========================
            MonoBehaviour[] scripts = obj.GetComponents<MonoBehaviour>();

            foreach (MonoBehaviour script in scripts)
            {
                if (script != null)
                {
                    DestroyImmediate(script, true);
                }
            }

            // =========================
            // REMOVE MISSING SCRIPTS
            // =========================
            GameObjectUtility.RemoveMonoBehavioursWithMissingScript(obj);

            // =========================
            // REMOVE 3D COLLIDERS
            // =========================
            Collider[] cols = obj.GetComponents<Collider>();

            foreach (Collider c in cols)
            {
                DestroyImmediate(c, true);
            }

            // =========================
            // REMOVE 2D COLLIDERS
            // =========================
            Collider2D[] cols2D = obj.GetComponents<Collider2D>();

            foreach (Collider2D c in cols2D)
            {
                DestroyImmediate(c, true);
            }
        }

        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
    }
}
#endif
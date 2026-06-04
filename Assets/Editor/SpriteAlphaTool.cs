// #if UNITY_EDITOR
// using UnityEngine;
// using UnityEditor;
// using System.Collections.Generic;

// public class SpriteAlphaTool : EditorWindow
// {
//     public List<Transform> targets = new List<Transform>();

//     private Vector2 scroll;

//     [MenuItem("Tools/Set Sprite Alpha")]
//     public static void ShowWindow()
//     {
//         GetWindow<SpriteAlphaTool>("Sprite Alpha Tool");
//     }

//     private void OnGUI()
//     {
//         GUILayout.Space(10);

//         EditorGUILayout.LabelField("Kéo nhiều object vào đây", EditorStyles.boldLabel);

//         Rect dropArea = GUILayoutUtility.GetRect(0, 80, GUILayout.ExpandWidth(true));
//         GUI.Box(dropArea, "Drag & Drop Objects Here");

//         HandleDragAndDrop(dropArea);

//         GUILayout.Space(10);

//         scroll = EditorGUILayout.BeginScrollView(scroll, GUILayout.Height(200));

//         for (int i = 0; i < targets.Count; i++)
//         {
//             EditorGUILayout.BeginHorizontal();

//             targets[i] = (Transform)EditorGUILayout.ObjectField(targets[i], typeof(Transform), true);

//             if (GUILayout.Button("X", GUILayout.Width(30)))
//             {
//                 targets.RemoveAt(i);
//                 i--;
//             }

//             EditorGUILayout.EndHorizontal();
//         }

//         EditorGUILayout.EndScrollView();

//         GUILayout.Space(10);

//         if (GUILayout.Button("Set Alpha = 70"))
//         {
//             SetAllAlpha(70f / 255f);
//         }

//         GUILayout.Space(5);

//         if (GUILayout.Button("Clear List"))
//         {
//             targets.Clear();
//         }
//     }

//     private void HandleDragAndDrop(Rect dropArea)
//     {
//         Event evt = Event.current;

//         if (!dropArea.Contains(evt.mousePosition))
//             return;

//         switch (evt.type)
//         {
//             case EventType.DragUpdated:
//                 DragAndDrop.visualMode = DragAndDropVisualMode.Copy;
//                 evt.Use();
//                 break;

//             case EventType.DragPerform:
//                 DragAndDrop.AcceptDrag();

//                 foreach (Object obj in DragAndDrop.objectReferences)
//                 {
//                     if (obj is GameObject go)
//                     {
//                         if (!targets.Contains(go.transform))
//                         {
//                             targets.Add(go.transform);
//                         }
//                     }
//                 }

//                 evt.Use();
//                 break;
//         }
//     }

//     private void SetAllAlpha(float alpha)
//     {
//         foreach (Transform root in targets)
//         {
//             if (root == null)
//                 continue;

//             SpriteRenderer[] renderers =
//                 root.GetComponentsInChildren<SpriteRenderer>(true);

//             foreach (SpriteRenderer sr in renderers)
//             {
//                 Undo.RecordObject(sr, "Set Sprite Alpha");

//                 Color c = sr.color;
//                 c.a = alpha;
//                 sr.color = c;

//                 EditorUtility.SetDirty(sr);
//             }
//         }

//         Debug.Log("DONE: Set Alpha = 70");
//     }
// }
// #endif
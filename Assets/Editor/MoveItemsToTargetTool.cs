// #if UNITY_EDITOR
// using UnityEngine;
// using UnityEditor;
// using System.Collections.Generic;

// public class MoveItemsToTargetTool : EditorWindow
// {
//     // 👉 Danh sách item kéo thả
//     public List<ItemController> items = new List<ItemController>();

//     [MenuItem("Tools/Item/Move Items To Target")]
//     public static void Open()
//     {
//         GetWindow<MoveItemsToTargetTool>("Move Items Tool");
//     }

//     void OnGUI()
//     {
//         GUILayout.Label("Move Items To Target (Editor Tool)", EditorStyles.boldLabel);

//         // list drag & drop
//         SerializedObject so = new SerializedObject(this);
//         SerializedProperty listProp = so.FindProperty("items");

//         EditorGUILayout.PropertyField(listProp, true);
//         so.ApplyModifiedProperties();

//         GUILayout.Space(10);

//         if (GUILayout.Button("MOVE ITEMS + DISABLE COLLIDERS"))
//         {
//             MoveItems();
//         }

//         if (GUILayout.Button("CLEAR LIST"))
//         {
//             items.Clear();
//         }
//     }

//     void MoveItems()
//     {
//         int count = 0;

//         foreach (var item in items)
//         {
//             if (item == null) continue;
//             if (item.targetPoint == null) continue;

//             // undo support
//             Undo.RecordObject(item.transform, "Move Item To Target");

//             // ===== MOVE =====
//             item.transform.position = item.targetPoint.position;
//             item.transform.rotation = item.targetPoint.rotation;

//             // ===== RENAME TARGET =====
//             Undo.RecordObject(item.targetPoint.gameObject, "Rename Target Point");
//             item.targetPoint.name = item.name + "place";

//             // ===== DISABLE 3D COLLIDER =====
//             Collider col3D = item.GetComponent<Collider>();
//             if (col3D != null)
//             {
//                 col3D.enabled = false;
//             }

//             // ===== DISABLE 2D COLLIDER (phòng trường hợp dùng 2D) =====
//             Collider2D col2D = item.GetComponent<Collider2D>();
//             if (col2D != null)
//             {
//                 col2D.enabled = false;
//             }

//             EditorUtility.SetDirty(item.transform);

//             count++;
//         }

//         Debug.Log($"[MoveItemsToTargetTool] Moved {count} items successfully!");
//     }
// }
// #endif
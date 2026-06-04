// #if UNITY_EDITOR
// using UnityEditor;
// using UnityEngine;
// using System.Collections.Generic;

// public class AutoAssignByNameTool : EditorWindow
// {
//     public Transform itemParent;
//     public Transform targetParent;

//     [MenuItem("Tools/Auto Assign Target By Name")]
//     static void Open()
//     {
//         GetWindow<AutoAssignByNameTool>("Assign By Name");
//     }

//     void OnGUI()
//     {
//         GUILayout.Space(10);

//         itemParent = (Transform)EditorGUILayout.ObjectField(
//             "Item Parent",
//             itemParent,
//             typeof(Transform),
//             true
//         );

//         targetParent = (Transform)EditorGUILayout.ObjectField(
//             "Target Parent",
//             targetParent,
//             typeof(Transform),
//             true
//         );

//         GUILayout.Space(20);

//         if (GUILayout.Button("AUTO ASSIGN"))
//         {
//             AssignTarget();
//         }

//         GUILayout.Space(10);

//         if (GUILayout.Button("CHECK MISSING TARGET"))
//         {
//             CheckMissingTarget();
//         }

//         GUILayout.Space(10);

//         if (GUILayout.Button("CHECK DUPLICATE NAME"))
//         {
//             CheckDuplicateNames();
//         }
//     }

//     void AssignTarget()
//     {
//         if (itemParent == null || targetParent == null)
//         {
//             Debug.LogError("Thiếu parent!");
//             return;
//         }

//         Dictionary<string, Transform> targetDict =
//             new Dictionary<string, Transform>();

//         foreach (Transform target in targetParent)
//         {
//             if (!targetDict.ContainsKey(target.name))
//             {
//                 targetDict.Add(target.name, target);
//             }
//         }

//         int assignedCount = 0;

//         foreach (Transform item in itemParent)
//         {
//             ItemController itemController =
//                 item.GetComponent<ItemController>();

//             if (itemController == null)
//                 continue;

//             string targetNameExact = item.name;
//             string targetNamePlace = item.name + "place";
//             string targetNamePlaceCap = item.name + "Place";

//             if (targetDict.TryGetValue(targetNamePlace, out Transform target) ||
//                 targetDict.TryGetValue(targetNamePlaceCap, out target) ||
//                 targetDict.TryGetValue(targetNameExact, out target))
//             {
//                 Undo.RecordObject(
//                     itemController,
//                     "Assign Target Point"
//                 );

//                 itemController.targetPoint = target;

//                 EditorUtility.SetDirty(itemController);

//                 assignedCount++;

//                 Debug.Log(
//                     $"Assign: {item.name} -> {target.name}"
//                 );
//             }
//             else
//             {
//                 Debug.LogWarning(
//                     $"Không tìm thấy target cho item: {targetNameExact} (Đã thử tìm: {targetNamePlace}, {targetNamePlaceCap})",
//                     item.gameObject
//                 );
//             }
//         }

//         Debug.Log($"DONE! Assigned {assignedCount} items.");
//     }

//     void CheckMissingTarget()
//     {
//         if (itemParent == null)
//         {
//             Debug.LogError("Thiếu Item Parent!");
//             return;
//         }

//         int missingCount = 0;

//         foreach (Transform item in itemParent)
//         {
//             ItemController itemController =
//                 item.GetComponent<ItemController>();

//             if (itemController == null)
//                 continue;

//             if (itemController.targetPoint == null)
//             {
//                 missingCount++;

//                 Debug.LogWarning(
//                     $"Item chưa có target: {item.name}",
//                     item.gameObject
//                 );
//             }
//         }

//         if (missingCount == 0)
//         {
//             Debug.Log("Tất cả item đều đã có target!");
//         }
//         else
//         {
//             Debug.Log(
//                 $"Có {missingCount} item chưa có target!"
//             );
//         }
//     }

//     void CheckDuplicateNames()
//     {
//         if (itemParent == null)
//         {
//             Debug.LogError("Thiếu Item Parent!");
//             return;
//         }

//         Dictionary<string, List<Transform>> nameDict =
//             new Dictionary<string, List<Transform>>();

//         foreach (Transform item in itemParent)
//         {
//             if (!nameDict.ContainsKey(item.name))
//             {
//                 nameDict[item.name] = new List<Transform>();
//             }

//             nameDict[item.name].Add(item);
//         }

//         int duplicateCount = 0;

//         foreach (var pair in nameDict)
//         {
//             if (pair.Value.Count > 1)
//             {
//                 duplicateCount++;

//                 Debug.LogWarning(
//                     $"Trùng tên: {pair.Key} | Count: {pair.Value.Count}"
//                 );

//                 foreach (Transform t in pair.Value)
//                 {
//                     Debug.Log(
//                         $" -> {t.name}",
//                         t.gameObject
//                     );
//                 }
//             }
//         }

//         if (duplicateCount == 0)
//         {
//             Debug.Log("Không có item nào bị trùng tên!");
//         }
//         else
//         {
//             Debug.Log(
//                 $"Có {duplicateCount} tên bị trùng!"
//             );
//         }
//     }
// }
// #endif
using UnityEngine;

/// <summary>
/// Xử lý input tap/click của user.
/// Bắn Raycast 3D → kiểm tra trúng spot → gọi ItemManager xử lý.
/// Nếu tap sai → spawn FailMaker từ Ply_Pool.
/// </summary>
public class InputManager : MonoBehaviour
{
    [Header("References")]
    [Tooltip("Camera chính dùng để bắn Raycast.")]
    public Camera mainCamera;

    [Tooltip("Reference tới ItemManager để xử lý khi tap đúng spot.")]
    public ItemManager itemManager;

    [Header("Fail Marker")]
    [Tooltip("Khoảng cách Z spawn dấu X so với Camera.")]
    public float failMarkerZOffset = 5f;

    private void Start()
    {
        // Mặc định lấy Camera.main nếu chưa gán
        if (mainCamera == null)
        {
            mainCamera = Camera.main;
        }
    }

    private void Update()
    {
        // Không nhận input nếu game đã hoàn thành
        if (itemManager != null && itemManager.IsGameCompleted()) return;

        // Kiểm tra tap/click
        if (Input.GetMouseButtonDown(0))
        {
            HandleTap(Input.mousePosition);
        }
    }

    /// <summary>
    /// Xử lý khi user tap/click lên màn hình.
    /// </summary>
    private void HandleTap(Vector3 screenPosition)
    {
        // Bước 1 — Bắn Raycast 3D từ Camera
        Ray ray = mainCamera.ScreenPointToRay(screenPosition);
        RaycastHit hit;

        if (!Physics.Raycast(ray, out hit))
        {
            // Không trúng gì → spawn dấu X đỏ từ pool
            SpawnFailMarker(screenPosition);
            return;
        }

        // Bước 2 — Trúng BoxCollider → kiểm tra có ItemController không
        ItemController spot = hit.collider.GetComponent<ItemController>();

        if (spot == null)
        {
            // Collider bình thường → spawn dấu X đỏ từ pool
            SpawnFailMarker(screenPosition);
            return;
        }

        // Bước 3 — Có ItemController → giao cho ItemManager xử lý
        if (itemManager != null)
        {
            itemManager.TryFoundSpot(spot.spotID);
        }
    }

    /// <summary>
    /// Spawn FailMaker từ Ply_Pool tại vị trí tap.
    /// </summary>
    private void SpawnFailMarker(Vector3 screenPosition)
    {
        // Chuyển vị trí screen → world
        Vector3 worldPos = mainCamera.ScreenToWorldPoint(
            new Vector3(screenPosition.x, screenPosition.y, failMarkerZOffset)
        );

        // Spawn từ pool — FailMaker tự fade + despawn
        Ply_Pool.Ins.Spawn<FailMaker>(PoolType.FailMaker, worldPos, Quaternion.identity);
    }
}

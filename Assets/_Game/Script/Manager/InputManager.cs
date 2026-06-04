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

    [Header("Layer Settings")]
    [Tooltip("Layer chứa các điểm khác biệt (Ví dụ: chọn Layer 'Item').")]
    public LayerMask itemLayer;

    [Tooltip("Layer nền của bức tranh, để nhận diện click sai (Ví dụ: chọn Layer 'Background').")]
    public LayerMask backgroundLayer;

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

        // Gom cả 2 layer lại để bắn Raycast 1 lần
        LayerMask combinedMask = itemLayer | backgroundLayer;

        // Dùng RaycastAll để xuyên qua mọi thứ (giải quyết lỗi bị layer Background cản)
        RaycastHit[] hits = Physics.RaycastAll(ray, Mathf.Infinity, combinedMask);

        if (hits.Length == 0)
        {
            // Bấm hẳn ra ngoài (không trúng Item cũng không trúng Background) → Bỏ qua
            return;
        }

        // Ưu tiên 1: Kiểm tra xem trong các vật bị xuyên qua, có cái nào là Item không?
        foreach (RaycastHit hit in hits)
        {
            int hitLayer = hit.collider.gameObject.layer;

            // Nếu trúng vào Layer Item
            if ((itemLayer.value & (1 << hitLayer)) > 0)
            {
                ItemController spot = hit.collider.GetComponent<ItemController>();
                if (spot != null)
                {
                    // Đúng điểm khác biệt
                    if (itemManager != null)
                    {
                        itemManager.TryFoundSpot(spot.spotID);
                    }
                    return; // Đã xử lý trúng Item thì thoát luôn
                }
            }
        }

        // Ưu tiên 2: Nếu tia Raycast xuyên qua nhiều vật nhưng KHÔNG có Item nào hợp lệ
        // Thì kiểm tra xem có trúng nền tranh (Background) không để báo lỗi
        foreach (RaycastHit hit in hits)
        {
            int hitLayer = hit.collider.gameObject.layer;
            if ((backgroundLayer.value & (1 << hitLayer)) > 0)
            {
                // Bấm trượt vào nền tranh → báo sai
                SpawnFailMarker(screenPosition);
                return;
            }
        }
    }

    /// <summary>
    /// Spawn FailMaker từ Ply_Pool tại vị trí tap.
    /// </summary>
    private void SpawnFailMarker(Vector3 screenPosition)
    {
        // Phát âm thanh sai
        if (Ply_SoundManager.Instance != null)
        {
            Ply_SoundManager.Instance.PlayFx(FxType.WrongMaker);
        }

        // Chuyển vị trí screen → world
        Vector3 worldPos = mainCamera.ScreenToWorldPoint(
            new Vector3(screenPosition.x, screenPosition.y, failMarkerZOffset)
        );

        // Spawn từ pool — FailMaker tự fade + despawn
        Ply_Pool.Ins.Spawn<FailMaker>(PoolType.FailMaker, worldPos, Quaternion.identity);
    }
}

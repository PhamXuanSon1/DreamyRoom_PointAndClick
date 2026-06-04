using UnityEngine;

/// <summary>
/// Xử lý input (click chuột / tap) và bắn Raycast 3D để detect BoxCollider.
/// Nếu trúng DifferenceSpot -> báo đúng, nếu không -> hiện dấu X đỏ.
/// </summary>
public class DifferenceInputHandler : MonoBehaviour
{
    [Header("=== Cấu hình Raycast ===")]
    [Tooltip("Camera dùng để bắn ray (nếu để trống sẽ dùng Camera.main)")]
    public Camera gameCamera;

    [Tooltip("Layer mask để lọc raycast (nên set layer riêng cho các spot)")]
    public LayerMask raycastLayerMask = ~0; // Mặc định: tất cả layer

    [Tooltip("Khoảng cách tối đa của raycast")]
    public float maxRayDistance = 100f;

    [Header("=== Hiệu ứng Tap Sai ===")]
    [Tooltip("Prefab dấu X đỏ (SpriteRenderer) - spawn khi tap sai")]
    public GameObject wrongTapPrefab;

    [Tooltip("Offset Z để dấu X hiện phía trước tranh")]
    public float wrongTapZOffset = -0.5f;

    [Tooltip("Thời gian cooldown giữa các lần tap (tránh spam)")]
    public float tapCooldown = 0.3f;

    private float lastTapTime = -1f;

    private void Start()
    {
        if (gameCamera == null)
        {
            gameCamera = Camera.main;
        }
    }

    private void Update()
    {
        // Kiểm tra input (chuột trái hoặc touch)
        if (Input.GetMouseButtonDown(0))
        {
            // Cooldown check
            if (Time.time - lastTapTime < tapCooldown)
                return;

            lastTapTime = Time.time;
            HandleTap(Input.mousePosition);
        }
    }

    /// <summary>
    /// Xử lý khi user tap/click
    /// </summary>
    private void HandleTap(Vector3 screenPosition)
    {
        if (gameCamera == null)
        {
            Debug.LogError("[DifferenceInput] Không tìm thấy Camera!");
            return;
        }

        // Tạo ray từ camera qua vị trí tap trên màn hình
        Ray ray = gameCamera.ScreenPointToRay(screenPosition);
        RaycastHit hit;

        // Bắn Raycast 3D
        if (Physics.Raycast(ray, out hit, maxRayDistance, raycastLayerMask))
        {
            // Kiểm tra xem có trúng DifferenceSpot không
            DifferenceSpot spot = hit.collider.GetComponent<DifferenceSpot>();

            if (spot != null)
            {
                // Trúng vào 1 DifferenceSpot
                HandleCorrectTap(spot);
            }
            else
            {
                // Trúng collider khác (không phải spot) -> sai
                HandleWrongTap(hit.point);
            }
        }
        else
        {
            // Không trúng gì cả -> sai (nếu muốn hiện X khi tap vào khoảng trống)
            // Tính vị trí trên world space để spawn dấu X
            Vector3 worldPos = gameCamera.ScreenToWorldPoint(
                new Vector3(screenPosition.x, screenPosition.y, 10f)
            );
            HandleWrongTap(worldPos);
        }
    }

    /// <summary>
    /// Xử lý khi tap đúng vào điểm khác biệt
    /// </summary>
    private void HandleCorrectTap(DifferenceSpot spot)
    {
        // Kiểm tra xem spot này đã tìm thấy chưa
        if (spot.isFound)
        {
            Debug.Log("[DifferenceInput] Spot ID " + spot.spotID + " đã được tìm rồi, bỏ qua.");
            return;
        }

        // Kiểm tra qua Manager (phòng trường hợp pair đã tìm)
        if (FindDifferenceManager.Instance != null)
        {
            if (FindDifferenceManager.Instance.IsSpotFound(spot.spotID))
            {
                Debug.Log("[DifferenceInput] Spot ID " + spot.spotID + " pair đã được tìm, bỏ qua.");
                return;
            }

            // Báo cho Manager xử lý
            FindDifferenceManager.Instance.OnCorrectSpotFound(spot.spotID);
        }
        else
        {
            // Nếu không có Manager, tự xử lý
            spot.ShowCorrectCircle();
            Debug.LogWarning("[DifferenceInput] Không tìm thấy FindDifferenceManager!");
        }
    }

    /// <summary>
    /// Xử lý khi tap sai (không trúng spot nào)
    /// </summary>
    private void HandleWrongTap(Vector3 worldPosition)
    {
        // Spawn dấu X đỏ tại vị trí tap
        if (wrongTapPrefab != null)
        {
            Vector3 spawnPos = new Vector3(
                worldPosition.x,
                worldPosition.y,
                worldPosition.z + wrongTapZOffset
            );

            Instantiate(wrongTapPrefab, spawnPos, Quaternion.identity);
        }

        // Báo cho Manager
        if (FindDifferenceManager.Instance != null)
        {
            FindDifferenceManager.Instance.OnWrongTap();
        }
    }
}

using UnityEngine;

/// <summary>
/// Gắn lên mỗi BoxCollider đại diện cho 1 điểm khác biệt.
/// Mỗi cặp spot (trái + phải) chia sẻ cùng 1 spotID (0-4).
/// </summary>
public class ItemController : MonoBehaviour
{
    [Header("Spot Settings")]
    [Tooltip("ID của điểm khác biệt (0-4). Cặp spot trái-phải phải có cùng ID.")]
    [Range(0, 4)]
    public int spotID;

    [Header("References")]
    [Tooltip("Obj con hiển thị khi tìm đúng (vòng tròn đỏ, dấu tick...) — mặc định ẩn.")]
    public GameObject successMarker;

    private void Awake()
    {
        // Đảm bảo obj con bị ẩn khi bắt đầu
        if (successMarker != null)
        {
            successMarker.SetActive(false);
        }
    }

    /// <summary>
    /// Bật obj con khi tìm thấy điểm khác biệt này.
    /// </summary>
    public void ShowSuccess()
    {
        if (successMarker != null)
        {
            successMarker.SetActive(true);
        }
    }
}

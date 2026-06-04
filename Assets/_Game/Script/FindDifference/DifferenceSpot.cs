using UnityEngine;

/// <summary>
/// Gắn vào mỗi GameObject có BoxCollider đánh dấu 1 điểm khác biệt.
/// Mỗi điểm khác biệt cần 2 spot (1 ở tranh trái, 1 ở tranh phải) cùng spotID.
/// </summary>
[RequireComponent(typeof(BoxCollider))]
public class DifferenceSpot : MonoBehaviour
{
    [Header("=== Cấu hình điểm khác biệt ===")]
    [Tooltip("ID của điểm khác biệt (0-4). Cặp spot ở 2 tranh phải cùng ID")]
    public int spotID;

    [Tooltip("Vòng tròn đỏ (SpriteRenderer hoặc GameObject) sẽ hiện khi tìm đúng")]
    public GameObject correctCircle;

    [Header("=== Mô tả (tuỳ chọn) ===")]
    [Tooltip("Mô tả điểm khác biệt này")]
    public string description;
    // 0 = Đổi chỗ gương và đồng hồ
    // 1 = Đổi chỗ 2 chiếc tất ở lò sưởi
    // 2 = Thiếu ngôi sao trên cây thông
    // 3 = Thiếu bộ nến trên bàn
    // 4 = Đổi màu 1 đôi dép (điểm cuối -> mở Store)

    /// <summary>
    /// Đã được tìm thấy chưa
    /// </summary>
    [HideInInspector]
    public bool isFound = false;

    private void Awake()
    {
        // Ẩn vòng tròn đỏ lúc đầu
        if (correctCircle != null)
        {
            correctCircle.SetActive(false);
        }
    }

    /// <summary>
    /// Hiện vòng tròn đỏ khoanh vùng điểm khác biệt
    /// </summary>
    public void ShowCorrectCircle()
    {
        isFound = true;

        if (correctCircle != null)
        {
            correctCircle.SetActive(true);
        }
    }
}

using UnityEngine;

/// <summary>
/// Quản lý việc hiển thị gợi ý (bàn tay) nếu người chơi không tương tác sau 1 khoảng thời gian.
/// </summary>
public class handHintManager : MonoBehaviour
{
    [Header("Settings")]
    [Tooltip("Thời gian chờ (giây) trước khi hiện hint nếu người chơi không click.")]
    public float timeToHint = 5f;

    [Header("References")]
    [Tooltip("GameObject hiển thị bàn tay (chứa ảnh tay, animation...).")]
    public GameObject handHintObj;
    
    [Tooltip("Reference tới ItemManager để tìm vị trí spot chưa tìm.")]
    public ItemManager itemManager;

    private float timer = 0f;

    private void Start()
    {
        // Tắt đi trước để hàm ShowHint (ở khung hình Update đầu tiên) có thể tự động gán lại vị trí mới
        if (handHintObj != null)
        {
            handHintObj.SetActive(false);
        }

        // Đặt timer bằng luôn timeToHint để nó kích hoạt hiện Hand Hint ngay lập tức lúc mới vào
        timer = timeToHint;
    }

    private void Update()
    {
        // Nếu game đã xong thì không hiện hint nữa
        if (itemManager == null || itemManager.IsGameCompleted())
        {
            if (handHintObj != null && handHintObj.activeSelf)
            {
                handHintObj.SetActive(false);
            }
            return;
        }

        // Bất cứ khi nào người chơi click chuột (hoặc chạm màn hình)
        if (Input.GetMouseButtonDown(0))
        {
            ResetTimer();
        }
        else
        {
            // Nếu chưa click thì tiếp tục đếm thời gian
            timer += Time.deltaTime;

            if (timer >= timeToHint)
            {
                ShowHint();
            }
        }
    }

    /// <summary>
    /// Reset lại bộ đếm thời gian và ẩn bàn tay.
    /// </summary>
    public void ResetTimer()
    {
        timer = 0f;
        if (handHintObj != null && handHintObj.activeSelf)
        {
            handHintObj.SetActive(false);
        }
    }

    /// <summary>
    /// Hiện bàn tay tại vị trí của một điểm chưa được tìm thấy.
    /// </summary>
    private void ShowHint()
    {
        // Nếu bàn tay đang hiện rồi thì thôi, không cần cập nhật lại vị trí liên tục
        if (handHintObj != null && !handHintObj.activeSelf)
        {
            Transform hintTarget = itemManager.GetUnfoundSpotTransform();
            
            if (hintTarget != null)
            {
                // Đặt vị trí bằng vị trí của Item, nhưng trừ đi một chút ở trục Z để bàn tay luôn hiện nổi lên trên (không bị chìm vào tranh)
                handHintObj.transform.position = new Vector3(hintTarget.position.x, hintTarget.position.y, hintTarget.position.z - 2f);
                handHintObj.SetActive(true);
            }
        }
    }
}

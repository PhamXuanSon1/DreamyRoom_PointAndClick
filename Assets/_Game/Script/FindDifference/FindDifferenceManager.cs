using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;

/// <summary>
/// Quản lý toàn bộ logic game Tìm điểm khác biệt.
/// - Đếm số điểm đã tìm (0/5)
/// - Kiểm tra khi tìm đủ 4 điểm, điểm thứ 5 sẽ mở Store
/// - Cập nhật UI text
/// </summary>
public class FindDifferenceManager : MonoBehaviour
{
    public static FindDifferenceManager Instance { get; private set; }

    [Header("=== Cấu hình Game ===")]
    [Tooltip("Tổng số điểm khác biệt cần tìm")]
    public int totalDifferences = 5;

    [Tooltip("ID của điểm khác biệt cuối cùng sẽ trigger mở Store (đổi màu dép = ID 4)")]
    public int lastDifferenceID = 4;

    [Header("=== UI References ===")]
    [Tooltip("Text hiển thị 'Find 5 differences!'")]
    public Text titleText;

    [Tooltip("Text hiển thị bộ đếm (VD: 0/5)")]
    public Text counterText;

    [Header("=== Danh sách tất cả DifferenceSpot ===")]
    [Tooltip("Kéo tất cả DifferenceSpot (ở cả 2 tranh) vào đây")]
    public List<DifferenceSpot> allSpots = new List<DifferenceSpot>();

    [Header("=== Audio (Tuỳ chọn) ===")]
    [Tooltip("Âm thanh khi tìm đúng")]
    public AudioClip correctSound;

    [Tooltip("Âm thanh khi tap sai")]
    public AudioClip wrongSound;

    private AudioSource audioSource;

    /// <summary>
    /// Số điểm khác biệt đã tìm được
    /// </summary>
    private int foundCount = 0;

    /// <summary>
    /// Theo dõi spotID nào đã được tìm thấy
    /// </summary>
    private HashSet<int> foundSpotIDs = new HashSet<int>();

    private void Awake()
    {
        // Singleton pattern
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
            return;
        }

        audioSource = GetComponent<AudioSource>();
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }
    }

    private void Start()
    {
        // Khởi tạo UI
        UpdateUI();

        if (titleText != null)
        {
            titleText.text = "Find " + totalDifferences + " differences!";
        }
    }

    /// <summary>
    /// Cập nhật UI bộ đếm
    /// </summary>
    private void UpdateUI()
    {
        if (counterText != null)
        {
            counterText.text = foundCount + "/" + totalDifferences;
        }
    }

    /// <summary>
    /// Được gọi khi user tap đúng vào 1 điểm khác biệt.
    /// </summary>
    /// <param name="spotID">ID của điểm khác biệt</param>
    public void OnCorrectSpotFound(int spotID)
    {
        // Kiểm tra xem spotID này đã được tìm chưa
        if (foundSpotIDs.Contains(spotID))
        {
            Debug.Log("[FindDifference] Spot ID " + spotID + " đã được tìm trước đó!");
            return;
        }

        // Đánh dấu đã tìm thấy
        foundSpotIDs.Add(spotID);
        foundCount++;

        // Hiện vòng tròn đỏ ở TẤT CẢ spot cùng ID (cả 2 tranh)
        foreach (DifferenceSpot spot in allSpots)
        {
            if (spot.spotID == spotID)
            {
                spot.ShowCorrectCircle();
            }
        }

        // Phát âm thanh đúng
        PlaySound(correctSound);

        // Cập nhật UI
        UpdateUI();

        Debug.Log("[FindDifference] Tìm đúng! Spot ID: " + spotID + " | Tiến trình: " + foundCount + "/" + totalDifferences);

        // Kiểm tra điều kiện đặc biệt: điểm thứ 5 (cuối) -> mở Store
        if (spotID == lastDifferenceID && foundCount >= totalDifferences)
        {
            OnAllDifferencesFound();
        }
        // Kiểm tra win thông thường (phòng trường hợp tìm điểm 5 trước)
        else if (foundCount >= totalDifferences)
        {
            OnAllDifferencesFound();
        }
    }

    /// <summary>
    /// Được gọi khi user tap sai vị trí
    /// </summary>
    public void OnWrongTap()
    {
        // Phát âm thanh sai
        PlaySound(wrongSound);
        Debug.Log("[FindDifference] Tap sai!");
    }

    /// <summary>
    /// Kiểm tra 1 spotID đã được tìm thấy chưa
    /// </summary>
    public bool IsSpotFound(int spotID)
    {
        return foundSpotIDs.Contains(spotID);
    }

    /// <summary>
    /// Khi tìm đủ tất cả điểm khác biệt -> mở Store
    /// </summary>
    private void OnAllDifferencesFound()
    {
        Debug.Log("[FindDifference] ĐÃ TÌM ĐỦ " + totalDifferences + " ĐIỂM! MỞ STORE!");

        // TODO: Gọi hàm mở Store của bạn ở đây
        // Ví dụ:
        // StoreManager.Instance.OpenStore();
        // hoặc
        // UIManager.Instance.ShowStorePanel();

        // Bạn có thể thay thế dòng dưới bằng logic mở Store thực tế
        OpenStore();
    }

    /// <summary>
    /// Mở Store - thay thế bằng logic thực tế của bạn
    /// </summary>
    private void OpenStore()
    {
        Debug.Log("[FindDifference] >>> OPENING STORE <<<");

        // === THAY THẾ CODE DƯỚI ĐÂY BẰNG LOGIC MỞ STORE CỦA BẠN ===
        
        // Cách 1: Load scene Store
        // UnityEngine.SceneManagement.SceneManager.LoadScene("Store");

        // Cách 2: Bật Panel Store trong Canvas
        // storePanel.SetActive(true);

        // Cách 3: Gọi Store Manager
        // StoreManager.Instance.Open();
    }

    /// <summary>
    /// Phát âm thanh
    /// </summary>
    private void PlaySound(AudioClip clip)
    {
        if (clip != null && audioSource != null)
        {
            audioSource.PlayOneShot(clip);
        }
    }

    /// <summary>
    /// Lấy số điểm đã tìm được
    /// </summary>
    public int GetFoundCount()
    {
        return foundCount;
    }

    /// <summary>
    /// Reset game (nếu cần chơi lại)
    /// </summary>
    public void ResetGame()
    {
        foundCount = 0;
        foundSpotIDs.Clear();

        foreach (DifferenceSpot spot in allSpots)
        {
            spot.isFound = false;
            if (spot.correctCircle != null)
            {
                spot.correctCircle.SetActive(false);
            }
        }

        UpdateUI();
        Debug.Log("[FindDifference] Game đã reset!");
    }
}

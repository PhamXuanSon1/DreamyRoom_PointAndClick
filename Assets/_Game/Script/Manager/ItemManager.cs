using System.Collections.Generic;
using UnityEngine;
using TMPro;

/// <summary>
/// Quản lý danh sách spot, đếm điểm đã tìm, bật circle 2 bên, check win.
/// Được gọi từ InputManager khi user tap đúng spot.
/// </summary>
public class ItemManager : MonoBehaviour
{
    [Header("References")]
    [Tooltip("Danh sách TẤT CẢ 10 spot (5 cặp x 2 bên tranh). Kéo thả vào từ Inspector.")]
    public ItemController[] allSpots;

    [Header("UI")]
    [Tooltip("Text hiển thị tiến trình (ví dụ: '2/5'). Có thể dùng UI Text hoặc 3D TextMeshPro.")]
    public TMP_Text progressText;

    [Header("Win Settings")]
    [Tooltip("Tổng số điểm khác biệt cần tìm (để hiển thị trên UI).")]
    public int totalSpots = 5;

    [Tooltip("Số điểm cần tìm để tự động hiển thị Store. (Playable ad hay dùng để mở store sớm)")]
    public int spotsToTriggerStore = 5;

    // --- Dữ liệu nội bộ ---
    private HashSet<int> foundSpotIDs = new HashSet<int>();
    private int foundCount = 0;
    private bool gameCompleted = false;

    private void Start()
    {
        UpdateUI();
    }

    /// <summary>
    /// Kiểm tra game đã hoàn thành chưa (InputManager dùng để chặn input).
    /// </summary>
    public bool IsGameCompleted()
    {
        return gameCompleted;
    }

    /// <summary>
    /// Được gọi từ InputManager khi user tap đúng spot có ItemController.
    /// Kiểm tra đã tìm chưa → nếu chưa thì xử lý tìm thấy.
    /// </summary>
    public void TryFoundSpot(int spotID)
    {
        // Đã tìm rồi → bỏ qua
        if (foundSpotIDs.Contains(spotID)) return;

        // Chưa tìm → xử lý
        OnSpotFound(spotID);
    }

    /// <summary>
    /// Xử lý khi tìm thấy điểm khác biệt đúng.
    /// </summary>
    private void OnSpotFound(int spotID)
    {
        // 1. Thêm spotID vào danh sách đã tìm
        foundSpotIDs.Add(spotID);

        // 2. Duyệt tất cả 10 spot, bật vòng tròn đỏ cho cặp cùng spotID
        for (int i = 0; i < allSpots.Length; i++)
        {
            if (allSpots[i] != null && allSpots[i].spotID == spotID)
            {
                allSpots[i].ShowSuccess();
            }
        }

        // 3. Tăng bộ đếm + cập nhật UI
        foundCount++;
        UpdateUI();

        // 4. Kiểm tra đã đủ số lượng để mở store chưa
        if (foundCount >= spotsToTriggerStore)
        {
            gameCompleted = true;
            OnGameCompleted();
        }
    }

    /// <summary>
    /// Cập nhật text UI tiến trình.
    /// </summary>
    private void UpdateUI()
    {
        if (progressText != null)
        {
            progressText.text = foundCount + "/" + totalSpots;
        }
    }

    /// <summary>
    /// Gọi khi tìm đủ tất cả điểm khác biệt → mở Store.
    /// </summary>
    private void OnGameCompleted()
    {
        Debug.Log("[ItemManager] Đã tìm đủ " + totalSpots + " điểm! Mở Store...");

        if (gameManager.Instance != null)
        {
            gameManager.Instance.GotoStore();
        }
    }
}

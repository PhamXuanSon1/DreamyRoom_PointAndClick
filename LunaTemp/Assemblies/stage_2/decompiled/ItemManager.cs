using System.Collections.Generic;
using TMPro;
using UnityEngine;

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

	private HashSet<int> foundSpotIDs = new HashSet<int>();

	private int foundCount = 0;

	private bool gameCompleted = false;

	private void Start()
	{
		UpdateUI();
	}

	public bool IsGameCompleted()
	{
		return gameCompleted;
	}

	public void TryFoundSpot(int spotID)
	{
		if (!foundSpotIDs.Contains(spotID))
		{
			OnSpotFound(spotID);
		}
	}

	private void OnSpotFound(int spotID)
	{
		if (Ply_SoundManager.Instance != null)
		{
			Ply_SoundManager.Instance.PlayFx(FxType.CorrectMaker);
		}
		foundSpotIDs.Add(spotID);
		for (int i = 0; i < allSpots.Length; i++)
		{
			if (allSpots[i] != null && allSpots[i].spotID == spotID)
			{
				allSpots[i].ShowSuccess();
			}
		}
		foundCount++;
		UpdateUI();
		if (foundCount >= spotsToTriggerStore)
		{
			gameCompleted = true;
			OnGameCompleted();
		}
	}

	private void UpdateUI()
	{
		if (progressText != null)
		{
			progressText.text = foundCount + "/" + totalSpots;
		}
	}

	private void OnGameCompleted()
	{
		Debug.Log("[ItemManager] Đã tìm đủ " + totalSpots + " điểm! Mở Store...");
		if (gameManager.Instance != null)
		{
			gameManager.Instance.GotoStore();
		}
	}

	public Transform GetUnfoundSpotTransform()
	{
		ItemController[] array = allSpots;
		foreach (ItemController spot in array)
		{
			if (spot != null && !foundSpotIDs.Contains(spot.spotID))
			{
				return spot.transform;
			}
		}
		return null;
	}
}

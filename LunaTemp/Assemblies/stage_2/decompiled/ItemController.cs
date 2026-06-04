using UnityEngine;

public class ItemController : MonoBehaviour
{
	[Header("Spot Settings")]
	[Tooltip("ID của điểm khác biệt (0-4). Cặp spot trái-phải phải có cùng ID.")]
	[Range(0f, 4f)]
	public int spotID;

	[Header("References")]
	[Tooltip("Obj con hiển thị khi tìm đúng (vòng tròn đỏ, dấu tick...) — mặc định ẩn.")]
	public GameObject successMarker;

	private void Awake()
	{
		if (successMarker != null)
		{
			successMarker.SetActive(false);
		}
	}

	public void ShowSuccess()
	{
		if (successMarker != null)
		{
			successMarker.SetActive(true);
		}
	}
}

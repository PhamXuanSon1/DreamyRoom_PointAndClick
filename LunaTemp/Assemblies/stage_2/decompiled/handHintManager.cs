using UnityEngine;

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
		if (handHintObj != null)
		{
			handHintObj.SetActive(false);
		}
		timer = timeToHint;
	}

	private void Update()
	{
		if (itemManager == null || itemManager.IsGameCompleted())
		{
			if (handHintObj != null && handHintObj.activeSelf)
			{
				handHintObj.SetActive(false);
			}
			return;
		}
		if (Input.GetMouseButtonDown(0))
		{
			ResetTimer();
			return;
		}
		timer += Time.deltaTime;
		if (timer >= timeToHint)
		{
			ShowHint();
		}
	}

	public void ResetTimer()
	{
		timer = 0f;
		if (handHintObj != null && handHintObj.activeSelf)
		{
			handHintObj.SetActive(false);
		}
	}

	private void ShowHint()
	{
		if (handHintObj != null && !handHintObj.activeSelf)
		{
			Transform hintTarget = itemManager.GetUnfoundSpotTransform();
			if (hintTarget != null)
			{
				handHintObj.transform.position = new Vector3(hintTarget.position.x, hintTarget.position.y, hintTarget.position.z - 2f);
				handHintObj.SetActive(true);
			}
		}
	}
}

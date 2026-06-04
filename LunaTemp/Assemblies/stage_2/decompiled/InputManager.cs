using UnityEngine;

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
		if (mainCamera == null)
		{
			mainCamera = Camera.main;
		}
	}

	private void Update()
	{
		if ((!(itemManager != null) || !itemManager.IsGameCompleted()) && Input.GetMouseButtonDown(0))
		{
			HandleTap(Input.mousePosition);
		}
	}

	private void HandleTap(Vector3 screenPosition)
	{
		Ray ray = mainCamera.ScreenPointToRay(screenPosition);
		LayerMask combinedMask = (int)itemLayer | (int)backgroundLayer;
		RaycastHit[] hits = Physics.RaycastAll(ray, float.PositiveInfinity, combinedMask);
		if (hits.Length == 0)
		{
			return;
		}
		RaycastHit[] array = hits;
		for (int i = 0; i < array.Length; i++)
		{
			RaycastHit hit = array[i];
			int hitLayer = hit.collider.gameObject.layer;
			if ((itemLayer.value & (1 << hitLayer)) <= 0)
			{
				continue;
			}
			ItemController spot = hit.collider.GetComponent<ItemController>();
			if (spot != null)
			{
				if (itemManager != null)
				{
					itemManager.TryFoundSpot(spot.spotID);
				}
				return;
			}
		}
		RaycastHit[] array2 = hits;
		foreach (RaycastHit hit2 in array2)
		{
			int hitLayer2 = hit2.collider.gameObject.layer;
			if ((backgroundLayer.value & (1 << hitLayer2)) > 0)
			{
				SpawnFailMarker(screenPosition);
				break;
			}
		}
	}

	private void SpawnFailMarker(Vector3 screenPosition)
	{
		if (Ply_SoundManager.Instance != null)
		{
			Ply_SoundManager.Instance.PlayFx(FxType.WrongMaker);
		}
		Vector3 worldPos = mainCamera.ScreenToWorldPoint(new Vector3(screenPosition.x, screenPosition.y, failMarkerZOffset));
		Ply_Singleton<Ply_Pool>.Ins.Spawn<FailMaker>(PoolType.FailMaker, worldPos, Quaternion.identity);
	}
}

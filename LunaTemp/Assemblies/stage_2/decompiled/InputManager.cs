using UnityEngine;

public class InputManager : MonoBehaviour
{
	[Header("References")]
	[Tooltip("Camera chính dùng để bắn Raycast.")]
	public Camera mainCamera;

	[Tooltip("Reference tới ItemManager để xử lý khi tap đúng spot.")]
	public ItemManager itemManager;

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
		if (!Physics.Raycast(ray, out var hit))
		{
			SpawnFailMarker(screenPosition);
			return;
		}
		ItemController spot = hit.collider.GetComponent<ItemController>();
		if (spot == null)
		{
			SpawnFailMarker(screenPosition);
		}
		else if (itemManager != null)
		{
			itemManager.TryFoundSpot(spot.spotID);
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

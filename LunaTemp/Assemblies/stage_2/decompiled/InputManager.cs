using System.Collections.Generic;
using UnityEngine;

public class InputManager : MonoBehaviour
{
	[Header("References")]
	[Tooltip("Camera chính dùng để bắn Raycast.")]
	public Camera mainCamera;

	[Tooltip("Reference tới ItemManager để xử lý khi tap đúng spot.")]
	public ItemManager itemManager;

	[Header("Fail Marker Pool")]
	[Tooltip("Prefab dấu X đỏ — phải có component ItemGraphic.")]
	public GameObject failMarkerPrefab;

	[Tooltip("Số lượng FailMarker tạo sẵn trong pool.")]
	public int poolSize = 5;

	[Tooltip("Khoảng cách Z spawn dấu X so với Camera.")]
	public float failMarkerZOffset = 5f;

	private List<GameObject> failMarkerPool = new List<GameObject>();

	private void Start()
	{
		if (mainCamera == null)
		{
			mainCamera = Camera.main;
		}
	}

	private GameObject GetFailMarkerFromPool()
	{
		for (int i = 0; i < failMarkerPool.Count; i++)
		{
			if (!failMarkerPool[i].activeInHierarchy)
			{
				return failMarkerPool[i];
			}
		}
		if (failMarkerPrefab != null)
		{
			GameObject obj = Object.Instantiate(failMarkerPrefab, base.transform);
			obj.SetActive(false);
			failMarkerPool.Add(obj);
			return obj;
		}
		return null;
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
		GameObject marker = GetFailMarkerFromPool();
		if (!(marker == null))
		{
			Vector3 worldPos = mainCamera.ScreenToWorldPoint(new Vector3(screenPosition.x, screenPosition.y, failMarkerZOffset));
			marker.transform.position = worldPos;
			marker.SetActive(true);
		}
	}
}

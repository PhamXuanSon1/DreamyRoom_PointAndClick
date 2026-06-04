using System.Collections;
using UnityEngine;

public class ItemGraphic : MonoBehaviour
{
	[Header("Timing")]
	[Tooltip("Thời gian hiển thị trước khi fade (giây).")]
	public float displayDuration = 0.5f;

	[Tooltip("Thời gian fade out (giây).")]
	public float fadeDuration = 0.3f;

	private SpriteRenderer spriteRenderer;

	private void Awake()
	{
		spriteRenderer = GetComponent<SpriteRenderer>();
	}

	private void OnEnable()
	{
		if (spriteRenderer != null)
		{
			Color c = spriteRenderer.color;
			c.a = 1f;
			spriteRenderer.color = c;
		}
		StartCoroutine(FadeAndDeactivate());
	}

	private void OnDisable()
	{
		StopAllCoroutines();
	}

	private IEnumerator FadeAndDeactivate()
	{
		yield return new WaitForSeconds(displayDuration);
		float elapsed = 0f;
		while (elapsed < fadeDuration)
		{
			elapsed += Time.deltaTime;
			float alpha = Mathf.Lerp(1f, 0f, elapsed / fadeDuration);
			if (spriteRenderer != null)
			{
				Color c = spriteRenderer.color;
				c.a = alpha;
				spriteRenderer.color = c;
			}
			yield return null;
		}
		base.gameObject.SetActive(false);
	}
}

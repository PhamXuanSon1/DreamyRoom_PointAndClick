using System.Collections;
using UnityEngine;

/// <summary>
/// Dấu X đỏ khi tap sai. Dùng với Object Pool.
/// Hiển thị 0.5s → Fade out 0.3s → Tự tắt (trả về pool).
/// </summary>
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

    /// <summary>
    /// Gọi mỗi khi được pool bật lên (thay vì Start).
    /// </summary>
    private void OnEnable()
    {
        // Reset alpha về 1
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
        // Bước 1: Chờ hiển thị
        yield return new WaitForSeconds(displayDuration);

        // Bước 2: Fade out
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

        // Bước 3: Tắt GameObject → trả về pool
        gameObject.SetActive(false);
    }
}

using UnityEngine;

/// <summary>
/// Hiệu ứng dấu X đỏ khi tap sai vị trí.
/// Tự động fade out và destroy sau một khoảng thời gian.
/// Gắn vào prefab dấu X đỏ.
/// </summary>
public class WrongTapEffect : MonoBehaviour
{
    [Header("=== Cấu hình ===")]
    [Tooltip("Thời gian hiển thị trước khi bắt đầu fade (giây)")]
    public float displayDuration = 0.5f;

    [Tooltip("Thời gian fade out (giây)")]
    public float fadeDuration = 0.3f;

    private SpriteRenderer spriteRenderer;
    private float timer = 0f;
    private bool isFading = false;

    private void Start()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();

        // Nếu không có SpriteRenderer, tìm trong children
        if (spriteRenderer == null)
        {
            spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        }
    }

    private void Update()
    {
        timer += Time.deltaTime;

        if (!isFading && timer >= displayDuration)
        {
            isFading = true;
            timer = 0f;
        }

        if (isFading)
        {
            float alpha = Mathf.Lerp(1f, 0f, timer / fadeDuration);

            if (spriteRenderer != null)
            {
                Color c = spriteRenderer.color;
                c.a = alpha;
                spriteRenderer.color = c;
            }

            if (timer >= fadeDuration)
            {
                Destroy(gameObject);
            }
        }
    }
}

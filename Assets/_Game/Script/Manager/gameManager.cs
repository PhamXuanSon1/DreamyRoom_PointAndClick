using UnityEngine;
using Luna.Unity; // Nếu bạn sử dụng Luna Unity, nếu không thì có thể bỏ qua
/// <summary>
/// Game Manager chung — quản lý trạng thái game và mở Store.
/// FindDifferenceManager sẽ gọi OpenStore() khi tìm đủ 5 điểm.
/// </summary>
public class gameManager : MonoBehaviour
{
    public static gameManager Instance;

    private void Awake()
    {
        // Singleton pattern
        if (Instance == null)
        {
            Instance = this;
        }
    }

    public void GotoStore()
    {
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }
}

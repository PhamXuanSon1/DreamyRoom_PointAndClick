using UnityEngine;

public class FailMaker : Ply_GameUnit
{
    void Awake()
    {
        tf = transform;
    }

    void OnEnable()
    {
        // Tự động gọi hàm DespawnSelf sau 2 giây
        Invoke(nameof(DespawnSelf), 2f);
    }

    void OnDisable()
    {
        // Hủy gọi hàm nếu object bị tắt trước 2 giây (để an toàn)
        CancelInvoke(nameof(DespawnSelf));
    }

    private void DespawnSelf()
    {
        Ply_Pool.Ins.Despawn(PoolType.FailMaker, this);
    }
}

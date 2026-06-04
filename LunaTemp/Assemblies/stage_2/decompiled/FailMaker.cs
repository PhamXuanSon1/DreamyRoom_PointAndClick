public class FailMaker : Ply_GameUnit
{
	private void Awake()
	{
		tf = base.transform;
	}

	private void OnEnable()
	{
		Invoke("DespawnSelf", 2f);
	}

	private void OnDisable()
	{
		CancelInvoke("DespawnSelf");
	}

	private void DespawnSelf()
	{
		Ply_Singleton<Ply_Pool>.Ins.Despawn(PoolType.FailMaker, this);
	}
}

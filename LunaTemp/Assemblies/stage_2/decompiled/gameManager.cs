using Luna.Unity;
using UnityEngine;

public class gameManager : MonoBehaviour
{
	public static gameManager Instance;

	private void Awake()
	{
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

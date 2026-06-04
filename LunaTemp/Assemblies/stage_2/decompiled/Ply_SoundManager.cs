using UnityEngine;

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
	public FxAudio audioClips;

	public AudioSource sound;

	private AudioSource[] fx = new AudioSource[30];

	private AudioSource[] loopFx = new AudioSource[30];

	private bool isMute = false;

	public static Ply_SoundManager Instance => Ply_Singleton<Ply_SoundManager>.Ins;

	public void PlayFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData soundData = audioClips.GetSoundData(fxType);
		if (soundData != null && !(soundData.clip == null))
		{
			if (fx[(int)fxType] == null)
			{
				fx[(int)fxType] = new GameObject($"FX_{fxType}").AddComponent<AudioSource>();
			}
			float volume = 2f;
			Debug.Log($"PlayFx => Type: {fxType} | VolumeScale: {volume}");
			for (int i = 0; (float)i < soundData.repeatCount; i++)
			{
				fx[(int)fxType].PlayOneShot(soundData.clip, volume);
			}
		}
	}

	public void Mute()
	{
		if (sound != null)
		{
			sound.Stop();
		}
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
			if (loopFx[i] != null)
			{
				loopFx[i].Stop();
			}
		}
	}

	public void PlayClip(AudioClip clip, float volume = 1f)
	{
		if (!(clip == null) && !isMute)
		{
			GameObject go = new GameObject("SFX_Clip");
			AudioSource a = go.AddComponent<AudioSource>();
			a.clip = clip;
			a.volume = volume;
			Debug.Log($"PlayClip: clip: {clip}, volume: {volume}");
			a.Play();
			Object.Destroy(go, clip.length + 0.1f);
		}
	}

	public void PlayLoopFx(FxType fxType, float volume = 1f)
	{
		if (isMute)
		{
			return;
		}
		SoundData soundData = audioClips.GetSoundData(fxType);
		if (soundData != null && !(soundData.clip == null))
		{
			if (loopFx[(int)fxType] == null)
			{
				GameObject go = new GameObject($"LoopFX_{fxType}");
				loopFx[(int)fxType] = go.AddComponent<AudioSource>();
				loopFx[(int)fxType].clip = soundData.clip;
				loopFx[(int)fxType].loop = true;
				loopFx[(int)fxType].playOnAwake = false;
			}
			loopFx[(int)fxType].volume = volume;
			if (!loopFx[(int)fxType].isPlaying)
			{
				loopFx[(int)fxType].Play();
			}
		}
	}

	public void StopLoopFx(FxType fxType)
	{
		AudioSource source = loopFx[(int)fxType];
		if (source != null && source.isPlaying)
		{
			source.Stop();
		}
	}
}

using System;

[Serializable]
public class FxAudio
{
	public SoundData ClickBox;

	public SoundData GetSoundData(FxType type)
	{
		if (type == FxType.ClickBox)
		{
			return ClickBox;
		}
		return null;
	}
}

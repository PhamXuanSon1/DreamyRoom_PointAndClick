using System;

[Serializable]
public class FxAudio
{
	public SoundData correctMaker;

	public SoundData wrongMaker;

	public SoundData GetSoundData(FxType type)
	{
		switch (type)
		{
		case FxType.CorrectMaker:
			return correctMaker;
		case FxType.WrongMaker:
			return wrongMaker;
		default:
			return null;
		}
	}
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

public enum FxType
{
    CorrectMaker = 0,
    WrongMaker = 1,
}

[System.Serializable]
public class SoundData
{
    public AudioClip clip;
    public float repeatCount = 1f;
}

[System.Serializable]
public class FxAudio
{
    public SoundData correctMaker;
    public SoundData wrongMaker;

    public SoundData GetSoundData(FxType type)
    {
        switch (type)
        {
            case FxType.CorrectMaker: return correctMaker;
            case FxType.WrongMaker: return wrongMaker;
        }
        return null;
    }
}

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
    public FxAudio audioClips;
    public AudioSource sound;

    // Tăng kích thước từ 20 lên 30 để tránh IndexError vì index cao nhất WoodenDoor = 21
    private AudioSource[] fx = new AudioSource[30];
    private AudioSource[] loopFx = new AudioSource[30];

    bool isMute = false;

    // Giữ Instance để tương thích ngược với các script cũ
    public static Ply_SoundManager Instance => Ins;
    public void PlayFx(FxType fxType)
    {
        if (isMute) return;

        SoundData soundData = audioClips.GetSoundData(fxType);
        if (soundData == null || soundData.clip == null)
            return;

        if (fx[(int)fxType] == null)
        {
            fx[(int)fxType] =
                new GameObject($"FX_{fxType}")
                .AddComponent<AudioSource>();
        }

        float volume = 2f;

        Debug.Log($"PlayFx => Type: {fxType} | VolumeScale: {volume}");

        for (int i = 0; i < soundData.repeatCount; i++)
        {
            fx[(int)fxType].PlayOneShot(soundData.clip, volume);
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
        if (clip == null || isMute)
            return;
        GameObject go = new GameObject("SFX_Clip");
        AudioSource a = go.AddComponent<AudioSource>();
        a.clip = clip;
        a.volume = volume;
        Debug.Log($"PlayClip: clip: {clip}, volume: {volume}");
        a.Play();
        Destroy(go, clip.length + 0.1f);
    }

    public void PlayLoopFx(FxType fxType, float volume = 1f)
    {
        if (isMute) return;
        SoundData soundData = audioClips.GetSoundData(fxType);
        if (soundData == null || soundData.clip == null) return;
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
            loopFx[(int)fxType].Play();
    }

    public void StopLoopFx(FxType fxType)
    {
        AudioSource source = loopFx[(int)fxType];
        if (source != null && source.isPlaying)
            source.Stop();
    }
}

#if UNITY_EDITOR
[CustomPropertyDrawer(typeof(SoundData))]
public class SoundDataDrawer : PropertyDrawer
{
    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        EditorGUI.BeginProperty(position, label, property);

        position = EditorGUI.PrefixLabel(position, GUIUtility.GetControlID(FocusType.Passive), label);

        var indent = EditorGUI.indentLevel;
        EditorGUI.indentLevel = 0;

        var clipRect = new Rect(position.x, position.y, position.width - 60, position.height);
        var repeatRect = new Rect(position.x + position.width - 55, position.y, 55, position.height);

        EditorGUI.PropertyField(clipRect, property.FindPropertyRelative("clip"), GUIContent.none);
        
        float prevLabelWidth = EditorGUIUtility.labelWidth;
        EditorGUIUtility.labelWidth = 15;
        EditorGUI.PropertyField(repeatRect, property.FindPropertyRelative("repeatCount"), new GUIContent("N"));
        EditorGUIUtility.labelWidth = prevLabelWidth;

        EditorGUI.indentLevel = indent;

        EditorGUI.EndProperty();
    }
}
#endif

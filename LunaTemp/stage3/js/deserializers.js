var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointSpring' )
  var i659 = data
  i658.spring = i659[0]
  i658.damper = i659[1]
  i658.targetPosition = i659[2]
  return i658
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointMotor' )
  var i661 = data
  i660.m_TargetVelocity = i661[0]
  i660.m_Force = i661[1]
  i660.m_FreeSpin = i661[2]
  return i660
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointLimits' )
  var i663 = data
  i662.m_Min = i663[0]
  i662.m_Max = i663[1]
  i662.m_Bounciness = i663[2]
  i662.m_BounceMinVelocity = i663[3]
  i662.m_ContactDistance = i663[4]
  i662.minBounce = i663[5]
  i662.maxBounce = i663[6]
  return i662
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointDrive' )
  var i665 = data
  i664.m_PositionSpring = i665[0]
  i664.m_PositionDamper = i665[1]
  i664.m_MaximumForce = i665[2]
  i664.m_UseAcceleration = i665[3]
  return i664
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i667 = data
  i666.m_Spring = i667[0]
  i666.m_Damper = i667[1]
  return i666
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i669 = data
  i668.m_Limit = i669[0]
  i668.m_Bounciness = i669[1]
  i668.m_ContactDistance = i669[2]
  return i668
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i671 = data
  i670.m_ExtremumSlip = i671[0]
  i670.m_ExtremumValue = i671[1]
  i670.m_AsymptoteSlip = i671[2]
  i670.m_AsymptoteValue = i671[3]
  i670.m_Stiffness = i671[4]
  return i670
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i673 = data
  i672.m_LowerAngle = i673[0]
  i672.m_UpperAngle = i673[1]
  return i672
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i675 = data
  i674.m_MotorSpeed = i675[0]
  i674.m_MaximumMotorTorque = i675[1]
  return i674
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i677 = data
  i676.m_DampingRatio = i677[0]
  i676.m_Frequency = i677[1]
  i676.m_Angle = i677[2]
  return i676
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i679 = data
  i678.m_LowerTranslation = i679[0]
  i678.m_UpperTranslation = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i680 = root || new pc.UnityMaterial()
  var i681 = data
  i680.name = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'shader')
  i680.renderQueue = i681[3]
  i680.enableInstancing = !!i681[4]
  var i683 = i681[5]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i683[i + 0]) );
  }
  i680.floatParameters = i682
  var i685 = i681[6]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i685[i + 0]) );
  }
  i680.colorParameters = i684
  var i687 = i681[7]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i687[i + 0]) );
  }
  i680.vectorParameters = i686
  var i689 = i681[8]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i689[i + 0]) );
  }
  i680.textureParameters = i688
  var i691 = i681[9]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i691[i + 0]) );
  }
  i680.materialFlags = i690
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i695 = data
  i694.name = i695[0]
  i694.value = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i699 = data
  i698.name = i699[0]
  i698.value = new pc.Color(i699[1], i699[2], i699[3], i699[4])
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i703 = data
  i702.name = i703[0]
  i702.value = new pc.Vec4( i703[1], i703[2], i703[3], i703[4] )
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i707 = data
  i706.name = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'value')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i711 = data
  i710.name = i711[0]
  i710.enabled = !!i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i713 = data
  i712.name = i713[0]
  i712.width = i713[1]
  i712.height = i713[2]
  i712.mipmapCount = i713[3]
  i712.anisoLevel = i713[4]
  i712.filterMode = i713[5]
  i712.hdr = !!i713[6]
  i712.format = i713[7]
  i712.wrapMode = i713[8]
  i712.alphaIsTransparency = !!i713[9]
  i712.alphaSource = i713[10]
  i712.graphicsFormat = i713[11]
  i712.sRGBTexture = !!i713[12]
  i712.desiredColorSpace = i713[13]
  i712.wrapU = i713[14]
  i712.wrapV = i713[15]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i715 = data
  i714.position = new pc.Vec3( i715[0], i715[1], i715[2] )
  i714.scale = new pc.Vec3( i715[3], i715[4], i715[5] )
  i714.rotation = new pc.Quat(i715[6], i715[7], i715[8], i715[9])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'animatorController')
  request.r(i717[2], i717[3], 0, i716, 'avatar')
  i716.updateMode = i717[4]
  i716.hasTransformHierarchy = !!i717[5]
  i716.applyRootMotion = !!i717[6]
  var i719 = i717[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.humanBones = i718
  i716.enabled = !!i717[8]
  return i716
}

Deserializers["FailMaker"] = function (request, data, root) {
  var i722 = root || request.c( 'FailMaker' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'tf')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i725 = data
  i724.color = new pc.Color(i725[0], i725[1], i725[2], i725[3])
  request.r(i725[4], i725[5], 0, i724, 'sprite')
  i724.flipX = !!i725[6]
  i724.flipY = !!i725[7]
  i724.drawMode = i725[8]
  i724.size = new pc.Vec2( i725[9], i725[10] )
  i724.tileMode = i725[11]
  i724.adaptiveModeThreshold = i725[12]
  i724.maskInteraction = i725[13]
  i724.spriteSortPoint = i725[14]
  i724.enabled = !!i725[15]
  request.r(i725[16], i725[17], 0, i724, 'sharedMaterial')
  var i727 = i725[18]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[19]
  i724.shadowCastingMode = i725[20]
  i724.sortingLayerID = i725[21]
  i724.sortingOrder = i725[22]
  i724.lightmapIndex = i725[23]
  i724.lightmapSceneIndex = i725[24]
  i724.lightmapScaleOffset = new pc.Vec4( i725[25], i725[26], i725[27], i725[28] )
  i724.lightProbeUsage = i725[29]
  i724.reflectionProbeUsage = i725[30]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i731 = data
  i730.name = i731[0]
  i730.tagId = i731[1]
  i730.enabled = !!i731[2]
  i730.isStatic = !!i731[3]
  i730.layer = i731[4]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i733 = data
  i732.name = i733[0]
  i732.halfPrecision = !!i733[1]
  i732.useSimplification = !!i733[2]
  i732.useUInt32IndexFormat = !!i733[3]
  i732.vertexCount = i733[4]
  i732.aabb = i733[5]
  var i735 = i733[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( !!i735[i + 0] );
  }
  i732.streams = i734
  i732.vertices = i733[7]
  var i737 = i733[8]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i737[i + 0]) );
  }
  i732.subMeshes = i736
  var i739 = i733[9]
  var i738 = []
  for(var i = 0; i < i739.length; i += 16) {
    i738.push( new pc.Mat4().setData(i739[i + 0], i739[i + 1], i739[i + 2], i739[i + 3],  i739[i + 4], i739[i + 5], i739[i + 6], i739[i + 7],  i739[i + 8], i739[i + 9], i739[i + 10], i739[i + 11],  i739[i + 12], i739[i + 13], i739[i + 14], i739[i + 15]) );
  }
  i732.bindposes = i738
  var i741 = i733[10]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i741[i + 0]) );
  }
  i732.blendShapes = i740
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i747 = data
  i746.triangles = i747[0]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i753 = data
  i752.name = i753[0]
  var i755 = i753[1]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i755[i + 0]) );
  }
  i752.frames = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i757 = data
  i756.name = i757[0]
  i756.index = i757[1]
  i756.startup = !!i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i759 = data
  i758.aspect = i759[0]
  i758.orthographic = !!i759[1]
  i758.orthographicSize = i759[2]
  i758.backgroundColor = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.nearClipPlane = i759[7]
  i758.farClipPlane = i759[8]
  i758.fieldOfView = i759[9]
  i758.depth = i759[10]
  i758.clearFlags = i759[11]
  i758.cullingMask = i759[12]
  i758.rect = i759[13]
  request.r(i759[14], i759[15], 0, i758, 'targetTexture')
  i758.usePhysicalProperties = !!i759[16]
  i758.focalLength = i759[17]
  i758.sensorSize = new pc.Vec2( i759[18], i759[19] )
  i758.lensShift = new pc.Vec2( i759[20], i759[21] )
  i758.gateFit = i759[22]
  i758.commandBufferCount = i759[23]
  i758.cameraType = i759[24]
  i758.enabled = !!i759[25]
  return i758
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i761 = data
  i760.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i761[0] )
  i760.m_MaxRayIntersections = i761[1]
  return i760
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i762 = root || request.c( 'AutoCameraFit' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'canvasBtn')
  request.r(i763[2], i763[3], 0, i762, 'targetArea')
  i762.paddingLandscape = i763[4]
  i762.paddingPortrait = i763[5]
  i762.extraPaddingSmallScreen = i763[6]
  i762.smallScreenThreshold = i763[7]
  i762.autoUpdateOnResize = !!i763[8]
  i762.adjustInEditMode = !!i763[9]
  return i762
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_FirstSelected')
  i764.m_sendNavigationEvents = !!i765[2]
  i764.m_DragThreshold = i765[3]
  return i764
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i767 = data
  i766.m_HorizontalAxis = i767[0]
  i766.m_VerticalAxis = i767[1]
  i766.m_SubmitButton = i767[2]
  i766.m_CancelButton = i767[3]
  i766.m_InputActionsPerSecond = i767[4]
  i766.m_RepeatDelay = i767[5]
  i766.m_ForceModuleActive = !!i767[6]
  i766.m_SendPointerHoverToParent = !!i767[7]
  return i766
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i768 = root || request.c( 'Ply_Pool' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Ply_Pool+PoolAmount', i771[i + 0]) );
  }
  i768.poolAmounts = i770
  return i768
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i774 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i775 = data
  i774.type = i775[0]
  i774.amount = i775[1]
  request.r(i775[2], i775[3], 0, i774, 'gameUnit')
  return i774
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i776 = root || request.c( 'Ply_SoundManager' )
  var i777 = data
  i776.audioClips = request.d('FxAudio', i777[0], i776.audioClips)
  request.r(i777[1], i777[2], 0, i776, 'sound')
  return i776
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i778 = root || request.c( 'FxAudio' )
  var i779 = data
  i778.correctMaker = request.d('SoundData', i779[0], i778.correctMaker)
  i778.wrongMaker = request.d('SoundData', i779[1], i778.wrongMaker)
  return i778
}

Deserializers["SoundData"] = function (request, data, root) {
  var i780 = root || request.c( 'SoundData' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'clip')
  i780.repeatCount = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'clip')
  request.r(i783[2], i783[3], 0, i782, 'outputAudioMixerGroup')
  i782.playOnAwake = !!i783[4]
  i782.loop = !!i783[5]
  i782.time = i783[6]
  i782.volume = i783[7]
  i782.pitch = i783[8]
  i782.enabled = !!i783[9]
  return i782
}

Deserializers["gameManager"] = function (request, data, root) {
  var i784 = root || request.c( 'gameManager' )
  var i785 = data
  return i784
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i786 = root || request.c( 'ItemManager' )
  var i787 = data
  var i789 = i787[0]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.allSpots = i788
  request.r(i787[1], i787[2], 0, i786, 'progressText')
  i786.totalSpots = i787[3]
  i786.spotsToTriggerStore = i787[4]
  return i786
}

Deserializers["InputManager"] = function (request, data, root) {
  var i792 = root || request.c( 'InputManager' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'mainCamera')
  request.r(i793[2], i793[3], 0, i792, 'itemManager')
  i792.failMarkerZOffset = i793[4]
  return i792
}

Deserializers["handHintManager"] = function (request, data, root) {
  var i794 = root || request.c( 'handHintManager' )
  var i795 = data
  i794.timeToHint = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'handHintObj')
  request.r(i795[3], i795[4], 0, i794, 'itemManager')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i797 = data
  i796.pivot = new pc.Vec2( i797[0], i797[1] )
  i796.anchorMin = new pc.Vec2( i797[2], i797[3] )
  i796.anchorMax = new pc.Vec2( i797[4], i797[5] )
  i796.sizeDelta = new pc.Vec2( i797[6], i797[7] )
  i796.anchoredPosition3D = new pc.Vec3( i797[8], i797[9], i797[10] )
  i796.rotation = new pc.Quat(i797[11], i797[12], i797[13], i797[14])
  i796.scale = new pc.Vec3( i797[15], i797[16], i797[17] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'additionalVertexStreams')
  i798.enabled = !!i799[2]
  request.r(i799[3], i799[4], 0, i798, 'sharedMaterial')
  var i801 = i799[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[6]
  i798.shadowCastingMode = i799[7]
  i798.sortingLayerID = i799[8]
  i798.sortingOrder = i799[9]
  i798.lightmapIndex = i799[10]
  i798.lightmapSceneIndex = i799[11]
  i798.lightmapScaleOffset = new pc.Vec4( i799[12], i799[13], i799[14], i799[15] )
  i798.lightProbeUsage = i799[16]
  i798.reflectionProbeUsage = i799[17]
  return i798
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TextMeshPro' )
  var i803 = data
  i802._SortingLayer = i803[0]
  i802._SortingLayerID = i803[1]
  i802._SortingOrder = i803[2]
  i802.m_hasFontAssetChanged = !!i803[3]
  request.r(i803[4], i803[5], 0, i802, 'm_renderer')
  i802.m_maskType = i803[6]
  i802.m_text = i803[7]
  i802.m_isRightToLeft = !!i803[8]
  request.r(i803[9], i803[10], 0, i802, 'm_fontAsset')
  request.r(i803[11], i803[12], 0, i802, 'm_sharedMaterial')
  var i805 = i803[13]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.m_fontSharedMaterials = i804
  request.r(i803[14], i803[15], 0, i802, 'm_fontMaterial')
  var i807 = i803[16]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i802.m_fontMaterials = i806
  i802.m_fontColor32 = UnityEngine.Color32.ConstructColor(i803[17], i803[18], i803[19], i803[20])
  i802.m_fontColor = new pc.Color(i803[21], i803[22], i803[23], i803[24])
  i802.m_enableVertexGradient = !!i803[25]
  i802.m_colorMode = i803[26]
  i802.m_fontColorGradient = request.d('TMPro.VertexGradient', i803[27], i802.m_fontColorGradient)
  request.r(i803[28], i803[29], 0, i802, 'm_fontColorGradientPreset')
  request.r(i803[30], i803[31], 0, i802, 'm_spriteAsset')
  i802.m_tintAllSprites = !!i803[32]
  request.r(i803[33], i803[34], 0, i802, 'm_StyleSheet')
  i802.m_TextStyleHashCode = i803[35]
  i802.m_overrideHtmlColors = !!i803[36]
  i802.m_faceColor = UnityEngine.Color32.ConstructColor(i803[37], i803[38], i803[39], i803[40])
  i802.m_fontSize = i803[41]
  i802.m_fontSizeBase = i803[42]
  i802.m_fontWeight = i803[43]
  i802.m_enableAutoSizing = !!i803[44]
  i802.m_fontSizeMin = i803[45]
  i802.m_fontSizeMax = i803[46]
  i802.m_fontStyle = i803[47]
  i802.m_HorizontalAlignment = i803[48]
  i802.m_VerticalAlignment = i803[49]
  i802.m_textAlignment = i803[50]
  i802.m_characterSpacing = i803[51]
  i802.m_wordSpacing = i803[52]
  i802.m_lineSpacing = i803[53]
  i802.m_lineSpacingMax = i803[54]
  i802.m_paragraphSpacing = i803[55]
  i802.m_charWidthMaxAdj = i803[56]
  i802.m_TextWrappingMode = i803[57]
  i802.m_wordWrappingRatios = i803[58]
  i802.m_overflowMode = i803[59]
  request.r(i803[60], i803[61], 0, i802, 'm_linkedTextComponent')
  request.r(i803[62], i803[63], 0, i802, 'parentLinkedComponent')
  i802.m_enableKerning = !!i803[64]
  var i809 = i803[65]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(i809[i + 0]);
  }
  i802.m_ActiveFontFeatures = i808
  i802.m_enableExtraPadding = !!i803[66]
  i802.checkPaddingRequired = !!i803[67]
  i802.m_isRichText = !!i803[68]
  i802.m_parseCtrlCharacters = !!i803[69]
  i802.m_isOrthographic = !!i803[70]
  i802.m_isCullingEnabled = !!i803[71]
  i802.m_horizontalMapping = i803[72]
  i802.m_verticalMapping = i803[73]
  i802.m_uvLineOffset = i803[74]
  i802.m_geometrySortingOrder = i803[75]
  i802.m_IsTextObjectScaleStatic = !!i803[76]
  i802.m_VertexBufferAutoSizeReduction = !!i803[77]
  i802.m_useMaxVisibleDescender = !!i803[78]
  i802.m_pageToDisplay = i803[79]
  i802.m_margin = new pc.Vec4( i803[80], i803[81], i803[82], i803[83] )
  i802.m_isUsingLegacyAnimationComponent = !!i803[84]
  i802.m_isVolumetricText = !!i803[85]
  request.r(i803[86], i803[87], 0, i802, 'm_Material')
  i802.m_EmojiFallbackSupport = !!i803[88]
  i802.m_Maskable = !!i803[89]
  i802.m_Color = new pc.Color(i803[90], i803[91], i803[92], i803[93])
  i802.m_RaycastTarget = !!i803[94]
  i802.m_RaycastPadding = new pc.Vec4( i803[95], i803[96], i803[97], i803[98] )
  return i802
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.VertexGradient' )
  var i811 = data
  i810.topLeft = new pc.Color(i811[0], i811[1], i811[2], i811[3])
  i810.topRight = new pc.Color(i811[4], i811[5], i811[6], i811[7])
  i810.bottomLeft = new pc.Color(i811[8], i811[9], i811[10], i811[11])
  i810.bottomRight = new pc.Color(i811[12], i811[13], i811[14], i811[15])
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'sharedMesh')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i817 = data
  i816.center = new pc.Vec3( i817[0], i817[1], i817[2] )
  i816.size = new pc.Vec3( i817[3], i817[4], i817[5] )
  i816.enabled = !!i817[6]
  i816.isTrigger = !!i817[7]
  request.r(i817[8], i817[9], 0, i816, 'material')
  return i816
}

Deserializers["ItemController"] = function (request, data, root) {
  var i818 = root || request.c( 'ItemController' )
  var i819 = data
  i818.spotID = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'successMarker')
  return i818
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i820 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i821 = data
  i820.loop = !!i821[0]
  i820.timeScale = i821[1]
  request.r(i821[2], i821[3], 0, i820, 'skeletonDataAsset')
  i820.initialSkinName = i821[4]
  i820.fixPrefabOverrideViaMeshFilter = i821[5]
  i820.initialFlipX = !!i821[6]
  i820.initialFlipY = !!i821[7]
  i820.updateWhenInvisible = i821[8]
  i820.zSpacing = i821[9]
  i820.useClipping = !!i821[10]
  i820.immutableTriangles = !!i821[11]
  i820.pmaVertexColors = !!i821[12]
  i820.clearStateOnDisable = !!i821[13]
  i820.tintBlack = !!i821[14]
  i820.singleSubmesh = !!i821[15]
  i820.fixDrawOrder = !!i821[16]
  i820.addNormals = !!i821[17]
  i820.calculateTangents = !!i821[18]
  i820.maskInteraction = i821[19]
  i820.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i821[20], i820.maskMaterials)
  i820.disableRenderingOnOverride = !!i821[21]
  i820._animationName = i821[22]
  var i823 = i821[23]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.separatorSlotNames = i822
  return i820
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i824 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.materialsMaskDisabled = i826
  var i829 = i825[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i824.materialsInsideMask = i828
  var i831 = i825[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i824.materialsOutsideMask = i830
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i835 = data
  i834.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i835[0], i834.main)
  i834.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i835[1], i834.colorBySpeed)
  i834.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i835[2], i834.colorOverLifetime)
  i834.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i835[3], i834.emission)
  i834.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i835[4], i834.rotationBySpeed)
  i834.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i835[5], i834.rotationOverLifetime)
  i834.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i835[6], i834.shape)
  i834.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i835[7], i834.sizeBySpeed)
  i834.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i835[8], i834.sizeOverLifetime)
  i834.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i835[9], i834.textureSheetAnimation)
  i834.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i835[10], i834.velocityOverLifetime)
  i834.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i835[11], i834.noise)
  i834.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i835[12], i834.inheritVelocity)
  i834.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i835[13], i834.forceOverLifetime)
  i834.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i835[14], i834.limitVelocityOverLifetime)
  i834.useAutoRandomSeed = !!i835[15]
  i834.randomSeed = i835[16]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemMain()
  var i837 = data
  i836.duration = i837[0]
  i836.loop = !!i837[1]
  i836.prewarm = !!i837[2]
  i836.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.startDelay)
  i836.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.startLifetime)
  i836.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[5], i836.startSpeed)
  i836.startSize3D = !!i837[6]
  i836.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[7], i836.startSizeX)
  i836.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[8], i836.startSizeY)
  i836.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[9], i836.startSizeZ)
  i836.startRotation3D = !!i837[10]
  i836.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.startRotationX)
  i836.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[12], i836.startRotationY)
  i836.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[13], i836.startRotationZ)
  i836.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i837[14], i836.startColor)
  i836.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[15], i836.gravityModifier)
  i836.simulationSpace = i837[16]
  request.r(i837[17], i837[18], 0, i836, 'customSimulationSpace')
  i836.simulationSpeed = i837[19]
  i836.useUnscaledTime = !!i837[20]
  i836.scalingMode = i837[21]
  i836.playOnAwake = !!i837[22]
  i836.maxParticles = i837[23]
  i836.emitterVelocityMode = i837[24]
  i836.stopAction = i837[25]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i838 = root || new pc.MinMaxCurve()
  var i839 = data
  i838.mode = i839[0]
  i838.curveMin = new pc.AnimationCurve( { keys_flow: i839[1] } )
  i838.curveMax = new pc.AnimationCurve( { keys_flow: i839[2] } )
  i838.curveMultiplier = i839[3]
  i838.constantMin = i839[4]
  i838.constantMax = i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i840 = root || new pc.MinMaxGradient()
  var i841 = data
  i840.mode = i841[0]
  i840.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i841[1], i840.gradientMin)
  i840.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i841[2], i840.gradientMax)
  i840.colorMin = new pc.Color(i841[3], i841[4], i841[5], i841[6])
  i840.colorMax = new pc.Color(i841[7], i841[8], i841[9], i841[10])
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i843 = data
  i842.mode = i843[0]
  var i845 = i843[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i845[i + 0]) );
  }
  i842.colorKeys = i844
  var i847 = i843[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i847[i + 0]) );
  }
  i842.alphaKeys = i846
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemColorBySpeed()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i849[1], i848.color)
  i848.range = new pc.Vec2( i849[2], i849[3] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i853 = data
  i852.color = new pc.Color(i853[0], i853[1], i853[2], i853[3])
  i852.time = i853[4]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i857 = data
  i856.alpha = i857[0]
  i856.time = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemColorOverLifetime()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[1], i858.color)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemEmitter()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.rateOverTime)
  i860.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.rateOverDistance)
  var i863 = i861[3]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i863[i + 0]) );
  }
  i860.bursts = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemBurst()
  var i867 = data
  i866.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[0], i866.count)
  i866.cycleCount = i867[1]
  i866.minCount = i867[2]
  i866.maxCount = i867[3]
  i866.repeatInterval = i867[4]
  i866.time = i867[5]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemRotationBySpeed()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[1], i868.x)
  i868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[2], i868.y)
  i868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.z)
  i868.separateAxes = !!i869[4]
  i868.range = new pc.Vec2( i869[5], i869[6] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemRotationOverLifetime()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[1], i870.x)
  i870.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.y)
  i870.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[3], i870.z)
  i870.separateAxes = !!i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemShape()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.shapeType = i873[1]
  i872.randomDirectionAmount = i873[2]
  i872.sphericalDirectionAmount = i873[3]
  i872.randomPositionAmount = i873[4]
  i872.alignToDirection = !!i873[5]
  i872.radius = i873[6]
  i872.radiusMode = i873[7]
  i872.radiusSpread = i873[8]
  i872.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[9], i872.radiusSpeed)
  i872.radiusThickness = i873[10]
  i872.angle = i873[11]
  i872.length = i873[12]
  i872.boxThickness = new pc.Vec3( i873[13], i873[14], i873[15] )
  i872.meshShapeType = i873[16]
  request.r(i873[17], i873[18], 0, i872, 'mesh')
  request.r(i873[19], i873[20], 0, i872, 'meshRenderer')
  request.r(i873[21], i873[22], 0, i872, 'skinnedMeshRenderer')
  i872.useMeshMaterialIndex = !!i873[23]
  i872.meshMaterialIndex = i873[24]
  i872.useMeshColors = !!i873[25]
  i872.normalOffset = i873[26]
  i872.arc = i873[27]
  i872.arcMode = i873[28]
  i872.arcSpread = i873[29]
  i872.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[30], i872.arcSpeed)
  i872.donutRadius = i873[31]
  i872.position = new pc.Vec3( i873[32], i873[33], i873[34] )
  i872.rotation = new pc.Vec3( i873[35], i873[36], i873[37] )
  i872.scale = new pc.Vec3( i873[38], i873[39], i873[40] )
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemSizeBySpeed()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.x)
  i874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.y)
  i874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.z)
  i874.separateAxes = !!i875[4]
  i874.range = new pc.Vec2( i875[5], i875[6] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemSizeOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[1], i876.x)
  i876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.y)
  i876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.z)
  i876.separateAxes = !!i877[4]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.mode = i879[1]
  i878.animation = i879[2]
  i878.numTilesX = i879[3]
  i878.numTilesY = i879[4]
  i878.useRandomRow = !!i879[5]
  i878.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[6], i878.frameOverTime)
  i878.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[7], i878.startFrame)
  i878.cycleCount = i879[8]
  i878.rowIndex = i879[9]
  i878.flipU = i879[10]
  i878.flipV = i879[11]
  i878.spriteCount = i879[12]
  var i881 = i879[13]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.sprites = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[4], i884.radial)
  i884.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[5], i884.speedModifier)
  i884.space = i885[6]
  i884.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[7], i884.orbitalX)
  i884.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[8], i884.orbitalY)
  i884.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[9], i884.orbitalZ)
  i884.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[10], i884.orbitalOffsetX)
  i884.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[11], i884.orbitalOffsetY)
  i884.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[12], i884.orbitalOffsetZ)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemNoise()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.separateAxes = !!i887[1]
  i886.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.strengthX)
  i886.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.strengthY)
  i886.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[4], i886.strengthZ)
  i886.frequency = i887[5]
  i886.damping = !!i887[6]
  i886.octaveCount = i887[7]
  i886.octaveMultiplier = i887[8]
  i886.octaveScale = i887[9]
  i886.quality = i887[10]
  i886.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[11], i886.scrollSpeed)
  i886.scrollSpeedMultiplier = i887[12]
  i886.remapEnabled = !!i887[13]
  i886.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[14], i886.remapX)
  i886.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[15], i886.remapY)
  i886.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[16], i886.remapZ)
  i886.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[17], i886.positionAmount)
  i886.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[18], i886.rotationAmount)
  i886.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[19], i886.sizeAmount)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemInheritVelocity()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.mode = i889[1]
  i888.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.curve)
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemForceOverLifetime()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.space = i891[4]
  i890.randomized = !!i891[5]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.limit)
  i892.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.limitX)
  i892.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.limitY)
  i892.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[4], i892.limitZ)
  i892.dampen = i893[5]
  i892.separateAxes = !!i893[6]
  i892.space = i893[7]
  i892.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[8], i892.drag)
  i892.multiplyDragByParticleSize = !!i893[9]
  i892.multiplyDragByParticleVelocity = !!i893[10]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'mesh')
  i894.meshCount = i895[2]
  i894.activeVertexStreamsCount = i895[3]
  i894.alignment = i895[4]
  i894.renderMode = i895[5]
  i894.sortMode = i895[6]
  i894.lengthScale = i895[7]
  i894.velocityScale = i895[8]
  i894.cameraVelocityScale = i895[9]
  i894.normalDirection = i895[10]
  i894.sortingFudge = i895[11]
  i894.minParticleSize = i895[12]
  i894.maxParticleSize = i895[13]
  i894.pivot = new pc.Vec3( i895[14], i895[15], i895[16] )
  request.r(i895[17], i895[18], 0, i894, 'trailMaterial')
  i894.applyActiveColorSpace = !!i895[19]
  i894.enabled = !!i895[20]
  request.r(i895[21], i895[22], 0, i894, 'sharedMaterial')
  var i897 = i895[23]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.sharedMaterials = i896
  i894.receiveShadows = !!i895[24]
  i894.shadowCastingMode = i895[25]
  i894.sortingLayerID = i895[26]
  i894.sortingOrder = i895[27]
  i894.lightmapIndex = i895[28]
  i894.lightmapSceneIndex = i895[29]
  i894.lightmapScaleOffset = new pc.Vec4( i895[30], i895[31], i895[32], i895[33] )
  i894.lightProbeUsage = i895[34]
  i894.reflectionProbeUsage = i895[35]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i899 = data
  i898.ambientIntensity = i899[0]
  i898.reflectionIntensity = i899[1]
  i898.ambientMode = i899[2]
  i898.ambientLight = new pc.Color(i899[3], i899[4], i899[5], i899[6])
  i898.ambientSkyColor = new pc.Color(i899[7], i899[8], i899[9], i899[10])
  i898.ambientGroundColor = new pc.Color(i899[11], i899[12], i899[13], i899[14])
  i898.ambientEquatorColor = new pc.Color(i899[15], i899[16], i899[17], i899[18])
  i898.fogColor = new pc.Color(i899[19], i899[20], i899[21], i899[22])
  i898.fogEndDistance = i899[23]
  i898.fogStartDistance = i899[24]
  i898.fogDensity = i899[25]
  i898.fog = !!i899[26]
  request.r(i899[27], i899[28], 0, i898, 'skybox')
  i898.fogMode = i899[29]
  var i901 = i899[30]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i901[i + 0]) );
  }
  i898.lightmaps = i900
  i898.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i899[31], i898.lightProbes)
  i898.lightmapsMode = i899[32]
  i898.mixedBakeMode = i899[33]
  i898.environmentLightingMode = i899[34]
  i898.ambientProbe = new pc.SphericalHarmonicsL2(i899[35])
  i898.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i899[36])
  i898.useReferenceAmbientProbe = !!i899[37]
  request.r(i899[38], i899[39], 0, i898, 'customReflection')
  request.r(i899[40], i899[41], 0, i898, 'defaultReflection')
  i898.defaultReflectionMode = i899[42]
  i898.defaultReflectionResolution = i899[43]
  i898.sunLightObjectId = i899[44]
  i898.pixelLightCount = i899[45]
  i898.defaultReflectionHDR = !!i899[46]
  i898.hasLightDataAsset = !!i899[47]
  i898.hasManualGenerate = !!i899[48]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'lightmapColor')
  request.r(i905[2], i905[3], 0, i904, 'lightmapDirection')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i906 = root || new UnityEngine.LightProbes()
  var i907 = data
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i915 = data
  var i917 = i915[0]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i917[i + 0]));
  }
  i914.ShaderCompilationErrors = i916
  i914.name = i915[1]
  i914.guid = i915[2]
  var i919 = i915[3]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i914.shaderDefinedKeywords = i918
  var i921 = i915[4]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i921[i + 0]) );
  }
  i914.passes = i920
  var i923 = i915[5]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i923[i + 0]) );
  }
  i914.usePasses = i922
  var i925 = i915[6]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i925[i + 0]) );
  }
  i914.defaultParameterValues = i924
  request.r(i915[7], i915[8], 0, i914, 'unityFallbackShader')
  i914.readDepth = !!i915[9]
  i914.hasDepthOnlyPass = !!i915[10]
  i914.isCreatedByShaderGraph = !!i915[11]
  i914.disableBatching = !!i915[12]
  i914.compiled = !!i915[13]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i929 = data
  i928.shaderName = i929[0]
  i928.errorMessage = i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i932 = root || new pc.UnityShaderPass()
  var i933 = data
  i932.id = i933[0]
  i932.subShaderIndex = i933[1]
  i932.name = i933[2]
  i932.passType = i933[3]
  i932.grabPassTextureName = i933[4]
  i932.usePass = !!i933[5]
  i932.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[6], i932.zTest)
  i932.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[7], i932.zWrite)
  i932.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[8], i932.culling)
  i932.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[9], i932.blending)
  i932.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[10], i932.alphaBlending)
  i932.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[11], i932.colorWriteMask)
  i932.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[12], i932.offsetUnits)
  i932.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[13], i932.offsetFactor)
  i932.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[14], i932.stencilRef)
  i932.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[15], i932.stencilReadMask)
  i932.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[16], i932.stencilWriteMask)
  i932.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[17], i932.stencilOp)
  i932.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[18], i932.stencilOpFront)
  i932.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[19], i932.stencilOpBack)
  var i935 = i933[20]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i935[i + 0]) );
  }
  i932.tags = i934
  var i937 = i933[21]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i932.passDefinedKeywords = i936
  var i939 = i933[22]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i939[i + 0]) );
  }
  i932.passDefinedKeywordGroups = i938
  var i941 = i933[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i941[i + 0]) );
  }
  i932.variants = i940
  var i943 = i933[24]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i943[i + 0]) );
  }
  i932.excludedVariants = i942
  i932.hasDepthReader = !!i933[25]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i945 = data
  i944.val = i945[0]
  i944.name = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i947 = data
  i946.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[0], i946.src)
  i946.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[1], i946.dst)
  i946.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[2], i946.op)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i949 = data
  i948.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[0], i948.pass)
  i948.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[1], i948.fail)
  i948.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[2], i948.zFail)
  i948.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[3], i948.comp)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i953 = data
  i952.name = i953[0]
  i952.value = i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.keywords = i958
  i956.hasDiscard = !!i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i963 = data
  i962.passId = i963[0]
  i962.subShaderIndex = i963[1]
  var i965 = i963[2]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i962.keywords = i964
  i962.vertexProgram = i963[3]
  i962.fragmentProgram = i963[4]
  i962.exportedForWebGl2 = !!i963[5]
  i962.readDepth = !!i963[6]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'shader')
  i968.pass = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i973 = data
  i972.name = i973[0]
  i972.type = i973[1]
  i972.value = new pc.Vec4( i973[2], i973[3], i973[4], i973[5] )
  i972.textureValue = i973[6]
  i972.shaderPropertyFlag = i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i975 = data
  i974.name = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'texture')
  i974.aabb = i975[3]
  i974.vertices = i975[4]
  i974.triangles = i975[5]
  i974.textureRect = UnityEngine.Rect.MinMaxRect(i975[6], i975[7], i975[8], i975[9])
  i974.packedRect = UnityEngine.Rect.MinMaxRect(i975[10], i975[11], i975[12], i975[13])
  i974.border = new pc.Vec4( i975[14], i975[15], i975[16], i975[17] )
  i974.transparency = i975[18]
  i974.bounds = i975[19]
  i974.pixelsPerUnit = i975[20]
  i974.textureWidth = i975[21]
  i974.textureHeight = i975[22]
  i974.nativeSize = new pc.Vec2( i975[23], i975[24] )
  i974.pivot = new pc.Vec2( i975[25], i975[26] )
  i974.textureRectOffset = new pc.Vec2( i975[27], i975[28] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i977 = data
  i976.name = i977[0]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i979 = data
  i978.name = i979[0]
  i978.wrapMode = i979[1]
  i978.isLooping = !!i979[2]
  i978.length = i979[3]
  var i981 = i979[4]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i981[i + 0]) );
  }
  i978.curves = i980
  var i983 = i979[5]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i983[i + 0]) );
  }
  i978.events = i982
  i978.halfPrecision = !!i979[6]
  i978._frameRate = i979[7]
  i978.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i979[8], i978.localBounds)
  i978.hasMuscleCurves = !!i979[9]
  var i985 = i979[10]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i978.clipMuscleConstant = i984
  i978.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i979[11], i978.clipBindingConstant)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i989 = data
  i988.path = i989[0]
  i988.hash = i989[1]
  i988.componentType = i989[2]
  i988.property = i989[3]
  i988.keys = i989[4]
  var i991 = i989[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i991[i + 0]) );
  }
  i988.objectReferenceKeys = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i995 = data
  i994.time = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'value')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i999 = data
  i998.functionName = i999[0]
  i998.floatParameter = i999[1]
  i998.intParameter = i999[2]
  i998.stringParameter = i999[3]
  request.r(i999[4], i999[5], 0, i998, 'objectReferenceParameter')
  i998.time = i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1001 = data
  i1000.center = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.extends = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.genericBindings = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.pptrCurveMapping = i1008
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.ascent = i1011[1]
  i1010.originalLineHeight = i1011[2]
  i1010.fontSize = i1011[3]
  var i1013 = i1011[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1013[i + 0]) );
  }
  i1010.characterInfo = i1012
  request.r(i1011[5], i1011[6], 0, i1010, 'texture')
  i1010.originalFontSize = i1011[7]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1017 = data
  i1016.index = i1017[0]
  i1016.advance = i1017[1]
  i1016.bearing = i1017[2]
  i1016.glyphWidth = i1017[3]
  i1016.glyphHeight = i1017[4]
  i1016.minX = i1017[5]
  i1016.maxX = i1017[6]
  i1016.minY = i1017[7]
  i1016.maxY = i1017[8]
  i1016.uvBottomLeftX = i1017[9]
  i1016.uvBottomLeftY = i1017[10]
  i1016.uvBottomRightX = i1017[11]
  i1016.uvBottomRightY = i1017[12]
  i1016.uvTopLeftX = i1017[13]
  i1016.uvTopLeftY = i1017[14]
  i1016.uvTopRightX = i1017[15]
  i1016.uvTopRightY = i1017[16]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1019 = data
  i1018.name = i1019[0]
  var i1021 = i1019[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1021[i + 0]) );
  }
  i1018.layers = i1020
  var i1023 = i1019[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1023[i + 0]) );
  }
  i1018.parameters = i1022
  i1018.animationClips = i1019[3]
  i1018.avatarUnsupported = i1019[4]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.defaultWeight = i1027[1]
  i1026.blendingMode = i1027[2]
  i1026.avatarMask = i1027[3]
  i1026.syncedLayerIndex = i1027[4]
  i1026.syncedLayerAffectsTiming = !!i1027[5]
  i1026.syncedLayers = i1027[6]
  i1026.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1027[7], i1026.stateMachine)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1029 = data
  i1028.id = i1029[0]
  i1028.name = i1029[1]
  i1028.path = i1029[2]
  var i1031 = i1029[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1031[i + 0]) );
  }
  i1028.states = i1030
  var i1033 = i1029[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1033[i + 0]) );
  }
  i1028.machines = i1032
  var i1035 = i1029[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1035[i + 0]) );
  }
  i1028.entryStateTransitions = i1034
  var i1037 = i1029[6]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1037[i + 0]) );
  }
  i1028.exitStateTransitions = i1036
  var i1039 = i1029[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1039[i + 0]) );
  }
  i1028.anyStateTransitions = i1038
  i1028.defaultStateId = i1029[8]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  i1042.cycleOffset = i1043[2]
  i1042.cycleOffsetParameter = i1043[3]
  i1042.cycleOffsetParameterActive = !!i1043[4]
  i1042.mirror = !!i1043[5]
  i1042.mirrorParameter = i1043[6]
  i1042.mirrorParameterActive = !!i1043[7]
  i1042.motionId = i1043[8]
  i1042.nameHash = i1043[9]
  i1042.fullPathHash = i1043[10]
  i1042.speed = i1043[11]
  i1042.speedParameter = i1043[12]
  i1042.speedParameterActive = !!i1043[13]
  i1042.tag = i1043[14]
  i1042.tagHash = i1043[15]
  i1042.writeDefaultValues = !!i1043[16]
  var i1045 = i1043[17]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1042.behaviours = i1044
  var i1047 = i1043[18]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1047[i + 0]) );
  }
  i1042.transitions = i1046
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1053 = data
  i1052.fullPath = i1053[0]
  i1052.canTransitionToSelf = !!i1053[1]
  i1052.duration = i1053[2]
  i1052.exitTime = i1053[3]
  i1052.hasExitTime = !!i1053[4]
  i1052.hasFixedDuration = !!i1053[5]
  i1052.interruptionSource = i1053[6]
  i1052.offset = i1053[7]
  i1052.orderedInterruption = !!i1053[8]
  i1052.destinationStateId = i1053[9]
  i1052.isExit = !!i1053[10]
  i1052.mute = !!i1053[11]
  i1052.solo = !!i1053[12]
  var i1055 = i1053[13]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1055[i + 0]) );
  }
  i1052.conditions = i1054
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1061 = data
  i1060.destinationStateId = i1061[0]
  i1060.isExit = !!i1061[1]
  i1060.mute = !!i1061[2]
  i1060.solo = !!i1061[3]
  var i1063 = i1061[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1063[i + 0]) );
  }
  i1060.conditions = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1067 = data
  i1066.defaultBool = !!i1067[0]
  i1066.defaultFloat = i1067[1]
  i1066.defaultInt = i1067[2]
  i1066.name = i1067[3]
  i1066.nameHash = i1067[4]
  i1066.type = i1067[5]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1071 = data
  i1070.mode = i1071[0]
  i1070.parameter = i1071[1]
  i1070.threshold = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.bytes64 = i1073[1]
  i1072.data = i1073[2]
  return i1072
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1074 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 2, i1076, '')
  }
  i1074.atlasAssets = i1076
  i1074.scale = i1075[1]
  request.r(i1075[2], i1075[3], 0, i1074, 'skeletonJSON')
  i1074.isUpgradingBlendModeMaterials = !!i1075[4]
  i1074.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1075[5], i1074.blendModeMaterials)
  var i1079 = i1075[6]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 1, i1078, '')
  }
  i1074.skeletonDataModifiers = i1078
  var i1081 = i1075[7]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1074.fromAnimation = i1080
  var i1083 = i1075[8]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1074.toAnimation = i1082
  i1074.duration = i1075[9]
  i1074.defaultMix = i1075[10]
  request.r(i1075[11], i1075[12], 0, i1074, 'controller')
  return i1074
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1086 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1087 = data
  i1086.applyAdditiveMaterial = !!i1087[0]
  var i1089 = i1087[1]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1089[i + 0]));
  }
  i1086.additiveMaterials = i1088
  var i1091 = i1087[2]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1091[i + 0]));
  }
  i1086.multiplyMaterials = i1090
  var i1093 = i1087[3]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1093[i + 0]));
  }
  i1086.screenMaterials = i1092
  i1086.requiresBlendModeMaterials = !!i1087[4]
  return i1086
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1096 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1097 = data
  i1096.pageName = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'material')
  return i1096
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1100 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'atlasFile')
  var i1103 = i1101[2]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1100.materials = i1102
  return i1100
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1105 = data
  i1104.normalStyle = i1105[0]
  i1104.normalSpacingOffset = i1105[1]
  i1104.boldStyle = i1105[2]
  i1104.boldSpacing = i1105[3]
  i1104.italicStyle = i1105[4]
  i1104.tabSize = i1105[5]
  request.r(i1105[6], i1105[7], 0, i1104, 'atlas')
  i1104.m_SourceFontFileGUID = i1105[8]
  i1104.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1105[9], i1104.m_CreationSettings)
  request.r(i1105[10], i1105[11], 0, i1104, 'm_SourceFontFile')
  i1104.m_SourceFontFilePath = i1105[12]
  i1104.m_AtlasPopulationMode = i1105[13]
  i1104.InternalDynamicOS = !!i1105[14]
  var i1107 = i1105[15]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('UnityEngine.TextCore.Glyph', i1107[i + 0]));
  }
  i1104.m_GlyphTable = i1106
  var i1109 = i1105[16]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('TMPro.TMP_Character', i1109[i + 0]));
  }
  i1104.m_CharacterTable = i1108
  var i1111 = i1105[17]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1104.m_AtlasTextures = i1110
  i1104.m_AtlasTextureIndex = i1105[18]
  i1104.m_IsMultiAtlasTexturesEnabled = !!i1105[19]
  i1104.m_GetFontFeatures = !!i1105[20]
  i1104.m_ClearDynamicDataOnBuild = !!i1105[21]
  i1104.m_AtlasWidth = i1105[22]
  i1104.m_AtlasHeight = i1105[23]
  i1104.m_AtlasPadding = i1105[24]
  i1104.m_AtlasRenderMode = i1105[25]
  var i1113 = i1105[26]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('UnityEngine.TextCore.GlyphRect', i1113[i + 0]));
  }
  i1104.m_UsedGlyphRects = i1112
  var i1115 = i1105[27]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('UnityEngine.TextCore.GlyphRect', i1115[i + 0]));
  }
  i1104.m_FreeGlyphRects = i1114
  i1104.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1105[28], i1104.m_FontFeatureTable)
  i1104.m_ShouldReimportFontFeatures = !!i1105[29]
  var i1117 = i1105[30]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1104.m_FallbackFontAssetTable = i1116
  var i1119 = i1105[31]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('TMPro.TMP_FontWeightPair', i1119[i + 0]) );
  }
  i1104.m_FontWeightTable = i1118
  var i1121 = i1105[32]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('TMPro.TMP_FontWeightPair', i1121[i + 0]) );
  }
  i1104.fontWeights = i1120
  i1104.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1105[33], i1104.m_fontInfo)
  var i1123 = i1105[34]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_Glyph', i1123[i + 0]));
  }
  i1104.m_glyphInfoList = i1122
  i1104.m_KerningTable = request.d('TMPro.KerningTable', i1105[35], i1104.m_KerningTable)
  var i1125 = i1105[36]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 1, i1124, '')
  }
  i1104.fallbackFontAssets = i1124
  i1104.m_Version = i1105[37]
  i1104.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1105[38], i1104.m_FaceInfo)
  request.r(i1105[39], i1105[40], 0, i1104, 'm_Material')
  return i1104
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1127 = data
  i1126.sourceFontFileName = i1127[0]
  i1126.sourceFontFileGUID = i1127[1]
  i1126.faceIndex = i1127[2]
  i1126.pointSizeSamplingMode = i1127[3]
  i1126.pointSize = i1127[4]
  i1126.padding = i1127[5]
  i1126.paddingMode = i1127[6]
  i1126.packingMode = i1127[7]
  i1126.atlasWidth = i1127[8]
  i1126.atlasHeight = i1127[9]
  i1126.characterSetSelectionMode = i1127[10]
  i1126.characterSequence = i1127[11]
  i1126.referencedFontAssetGUID = i1127[12]
  i1126.referencedTextAssetGUID = i1127[13]
  i1126.fontStyle = i1127[14]
  i1126.fontStyleModifier = i1127[15]
  i1126.renderMode = i1127[16]
  i1126.includeFontFeatures = !!i1127[17]
  return i1126
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1131 = data
  i1130.m_Index = i1131[0]
  i1130.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1131[1], i1130.m_Metrics)
  i1130.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1131[2], i1130.m_GlyphRect)
  i1130.m_Scale = i1131[3]
  i1130.m_AtlasIndex = i1131[4]
  i1130.m_ClassDefinitionType = i1131[5]
  return i1130
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1133 = data
  i1132.m_Width = i1133[0]
  i1132.m_Height = i1133[1]
  i1132.m_HorizontalBearingX = i1133[2]
  i1132.m_HorizontalBearingY = i1133[3]
  i1132.m_HorizontalAdvance = i1133[4]
  return i1132
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1135 = data
  i1134.m_X = i1135[0]
  i1134.m_Y = i1135[1]
  i1134.m_Width = i1135[2]
  i1134.m_Height = i1135[3]
  return i1134
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_Character' )
  var i1139 = data
  i1138.m_ElementType = i1139[0]
  i1138.m_Unicode = i1139[1]
  i1138.m_GlyphIndex = i1139[2]
  i1138.m_Scale = i1139[3]
  return i1138
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1145 = data
  var i1147 = i1145[0]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.MultipleSubstitutionRecord', i1147[i + 0]));
  }
  i1144.m_MultipleSubstitutionRecords = i1146
  var i1149 = i1145[1]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.LigatureSubstitutionRecord', i1149[i + 0]));
  }
  i1144.m_LigatureSubstitutionRecords = i1148
  var i1151 = i1145[2]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1151[i + 0]));
  }
  i1144.m_GlyphPairAdjustmentRecords = i1150
  var i1153 = i1145[3]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1153[i + 0]));
  }
  i1144.m_MarkToBaseAdjustmentRecords = i1152
  var i1155 = i1145[4]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1155[i + 0]));
  }
  i1144.m_MarkToMarkAdjustmentRecords = i1154
  return i1144
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1159 = data
  i1158.m_TargetGlyphID = i1159[0]
  i1158.m_SubstituteGlyphIDs = i1159[1]
  return i1158
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1163 = data
  i1162.m_ComponentGlyphIDs = i1163[0]
  i1162.m_LigatureGlyphID = i1163[1]
  return i1162
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1167 = data
  i1166.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1167[0], i1166.m_FirstAdjustmentRecord)
  i1166.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1167[1], i1166.m_SecondAdjustmentRecord)
  i1166.m_FeatureLookupFlags = i1167[2]
  return i1166
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1171 = data
  i1170.m_BaseGlyphID = i1171[0]
  i1170.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1171[1], i1170.m_BaseGlyphAnchorPoint)
  i1170.m_MarkGlyphID = i1171[2]
  i1170.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1171[3], i1170.m_MarkPositionAdjustment)
  return i1170
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1175 = data
  i1174.m_BaseMarkGlyphID = i1175[0]
  i1174.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1175[1], i1174.m_BaseMarkGlyphAnchorPoint)
  i1174.m_CombiningMarkGlyphID = i1175[2]
  i1174.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1175[3], i1174.m_CombiningMarkPositionAdjustment)
  return i1174
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'regularTypeface')
  request.r(i1181[2], i1181[3], 0, i1180, 'italicTypeface')
  return i1180
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1183 = data
  i1182.Name = i1183[0]
  i1182.PointSize = i1183[1]
  i1182.Scale = i1183[2]
  i1182.CharacterCount = i1183[3]
  i1182.LineHeight = i1183[4]
  i1182.Baseline = i1183[5]
  i1182.Ascender = i1183[6]
  i1182.CapHeight = i1183[7]
  i1182.Descender = i1183[8]
  i1182.CenterLine = i1183[9]
  i1182.SuperscriptOffset = i1183[10]
  i1182.SubscriptOffset = i1183[11]
  i1182.SubSize = i1183[12]
  i1182.Underline = i1183[13]
  i1182.UnderlineThickness = i1183[14]
  i1182.strikethrough = i1183[15]
  i1182.strikethroughThickness = i1183[16]
  i1182.TabWidth = i1183[17]
  i1182.Padding = i1183[18]
  i1182.AtlasWidth = i1183[19]
  i1182.AtlasHeight = i1183[20]
  return i1182
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.x = i1187[1]
  i1186.y = i1187[2]
  i1186.width = i1187[3]
  i1186.height = i1187[4]
  i1186.xOffset = i1187[5]
  i1186.yOffset = i1187[6]
  i1186.xAdvance = i1187[7]
  i1186.scale = i1187[8]
  return i1186
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.KerningTable' )
  var i1189 = data
  var i1191 = i1189[0]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.KerningPair', i1191[i + 0]));
  }
  i1188.kerningPairs = i1190
  return i1188
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.KerningPair' )
  var i1195 = data
  i1194.xOffset = i1195[0]
  i1194.m_FirstGlyph = i1195[1]
  i1194.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1195[2], i1194.m_FirstGlyphAdjustments)
  i1194.m_SecondGlyph = i1195[3]
  i1194.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1195[4], i1194.m_SecondGlyphAdjustments)
  i1194.m_IgnoreSpacingAdjustments = !!i1195[5]
  return i1194
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1197 = data
  i1196.m_FaceIndex = i1197[0]
  i1196.m_FamilyName = i1197[1]
  i1196.m_StyleName = i1197[2]
  i1196.m_PointSize = i1197[3]
  i1196.m_Scale = i1197[4]
  i1196.m_UnitsPerEM = i1197[5]
  i1196.m_LineHeight = i1197[6]
  i1196.m_AscentLine = i1197[7]
  i1196.m_CapLine = i1197[8]
  i1196.m_MeanLine = i1197[9]
  i1196.m_Baseline = i1197[10]
  i1196.m_DescentLine = i1197[11]
  i1196.m_SuperscriptOffset = i1197[12]
  i1196.m_SuperscriptSize = i1197[13]
  i1196.m_SubscriptOffset = i1197[14]
  i1196.m_SubscriptSize = i1197[15]
  i1196.m_UnderlineOffset = i1197[16]
  i1196.m_UnderlineThickness = i1197[17]
  i1196.m_StrikethroughOffset = i1197[18]
  i1196.m_StrikethroughThickness = i1197[19]
  i1196.m_TabWidth = i1197[20]
  return i1196
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1199 = data
  i1198.useSafeMode = !!i1199[0]
  i1198.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1199[1], i1198.safeModeOptions)
  i1198.timeScale = i1199[2]
  i1198.unscaledTimeScale = i1199[3]
  i1198.useSmoothDeltaTime = !!i1199[4]
  i1198.maxSmoothUnscaledTime = i1199[5]
  i1198.rewindCallbackMode = i1199[6]
  i1198.showUnityEditorReport = !!i1199[7]
  i1198.logBehaviour = i1199[8]
  i1198.drawGizmos = !!i1199[9]
  i1198.defaultRecyclable = !!i1199[10]
  i1198.defaultAutoPlay = i1199[11]
  i1198.defaultUpdateType = i1199[12]
  i1198.defaultTimeScaleIndependent = !!i1199[13]
  i1198.defaultEaseType = i1199[14]
  i1198.defaultEaseOvershootOrAmplitude = i1199[15]
  i1198.defaultEasePeriod = i1199[16]
  i1198.defaultAutoKill = !!i1199[17]
  i1198.defaultLoopType = i1199[18]
  i1198.debugMode = !!i1199[19]
  i1198.debugStoreTargetId = !!i1199[20]
  i1198.showPreviewPanel = !!i1199[21]
  i1198.storeSettingsLocation = i1199[22]
  i1198.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1199[23], i1198.modules)
  i1198.createASMDEF = !!i1199[24]
  i1198.showPlayingTweens = !!i1199[25]
  i1198.showPausedTweens = !!i1199[26]
  return i1198
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1200 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1201 = data
  i1200.logBehaviour = i1201[0]
  i1200.nestedTweenFailureBehaviour = i1201[1]
  return i1200
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1202 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1203 = data
  i1202.showPanel = !!i1203[0]
  i1202.audioEnabled = !!i1203[1]
  i1202.physicsEnabled = !!i1203[2]
  i1202.physics2DEnabled = !!i1203[3]
  i1202.spriteEnabled = !!i1203[4]
  i1202.uiEnabled = !!i1203[5]
  i1202.uiToolkitEnabled = !!i1203[6]
  i1202.textMeshProEnabled = !!i1203[7]
  i1202.tk2DEnabled = !!i1203[8]
  i1202.deAudioEnabled = !!i1203[9]
  i1202.deUnityExtendedEnabled = !!i1203[10]
  i1202.epoOutlineEnabled = !!i1203[11]
  return i1202
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Settings' )
  var i1205 = data
  i1204.assetVersion = i1205[0]
  i1204.m_TextWrappingMode = i1205[1]
  i1204.m_enableKerning = !!i1205[2]
  var i1207 = i1205[3]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(i1207[i + 0]);
  }
  i1204.m_ActiveFontFeatures = i1206
  i1204.m_enableExtraPadding = !!i1205[4]
  i1204.m_enableTintAllSprites = !!i1205[5]
  i1204.m_enableParseEscapeCharacters = !!i1205[6]
  i1204.m_EnableRaycastTarget = !!i1205[7]
  i1204.m_GetFontFeaturesAtRuntime = !!i1205[8]
  i1204.m_missingGlyphCharacter = i1205[9]
  i1204.m_ClearDynamicDataOnBuild = !!i1205[10]
  i1204.m_warningsDisabled = !!i1205[11]
  request.r(i1205[12], i1205[13], 0, i1204, 'm_defaultFontAsset')
  i1204.m_defaultFontAssetPath = i1205[14]
  i1204.m_defaultFontSize = i1205[15]
  i1204.m_defaultAutoSizeMinRatio = i1205[16]
  i1204.m_defaultAutoSizeMaxRatio = i1205[17]
  i1204.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1205[18], i1205[19] )
  i1204.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1205[20], i1205[21] )
  i1204.m_autoSizeTextContainer = !!i1205[22]
  i1204.m_IsTextObjectScaleStatic = !!i1205[23]
  var i1209 = i1205[24]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1204.m_fallbackFontAssets = i1208
  i1204.m_matchMaterialPreset = !!i1205[25]
  i1204.m_HideSubTextObjects = !!i1205[26]
  request.r(i1205[27], i1205[28], 0, i1204, 'm_defaultSpriteAsset')
  i1204.m_defaultSpriteAssetPath = i1205[29]
  i1204.m_enableEmojiSupport = !!i1205[30]
  i1204.m_MissingCharacterSpriteUnicode = i1205[31]
  var i1211 = i1205[32]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1204.m_EmojiFallbackTextAssets = i1210
  i1204.m_defaultColorGradientPresetsPath = i1205[33]
  request.r(i1205[34], i1205[35], 0, i1204, 'm_defaultStyleSheet')
  i1204.m_StyleSheetsResourcePath = i1205[36]
  request.r(i1205[37], i1205[38], 0, i1204, 'm_leadingCharacters')
  request.r(i1205[39], i1205[40], 0, i1204, 'm_followingCharacters')
  i1204.m_UseModernHangulLineBreakingRules = !!i1205[41]
  return i1204
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1215 = data
  i1214.m_GlyphIndex = i1215[0]
  i1214.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1215[1], i1214.m_GlyphValueRecord)
  return i1214
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1217 = data
  i1216.m_XPlacement = i1217[0]
  i1216.m_YPlacement = i1217[1]
  i1216.m_XAdvance = i1217[2]
  i1216.m_YAdvance = i1217[3]
  return i1216
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'spriteSheet')
  var i1221 = i1219[2]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.TMP_Sprite', i1221[i + 0]));
  }
  i1218.spriteInfoList = i1220
  var i1223 = i1219[3]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1223.length; i += 2) {
  request.r(i1223[i + 0], i1223[i + 1], 1, i1222, '')
  }
  i1218.fallbackSpriteAssets = i1222
  var i1225 = i1219[4]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.TMP_SpriteCharacter', i1225[i + 0]));
  }
  i1218.m_SpriteCharacterTable = i1224
  var i1227 = i1219[5]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.TMP_SpriteGlyph', i1227[i + 0]));
  }
  i1218.m_GlyphTable = i1226
  i1218.m_Version = i1219[6]
  i1218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1219[7], i1218.m_FaceInfo)
  request.r(i1219[8], i1219[9], 0, i1218, 'm_Material')
  return i1218
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.hashCode = i1231[1]
  i1230.unicode = i1231[2]
  i1230.pivot = new pc.Vec2( i1231[3], i1231[4] )
  request.r(i1231[5], i1231[6], 0, i1230, 'sprite')
  i1230.id = i1231[7]
  i1230.x = i1231[8]
  i1230.y = i1231[9]
  i1230.width = i1231[10]
  i1230.height = i1231[11]
  i1230.xOffset = i1231[12]
  i1230.yOffset = i1231[13]
  i1230.xAdvance = i1231[14]
  i1230.scale = i1231[15]
  return i1230
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1237 = data
  i1236.m_Name = i1237[0]
  i1236.m_ElementType = i1237[1]
  i1236.m_Unicode = i1237[2]
  i1236.m_GlyphIndex = i1237[3]
  i1236.m_Scale = i1237[4]
  return i1236
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1241 = data
  request.r(i1241[0], i1241[1], 0, i1240, 'sprite')
  i1240.m_Index = i1241[2]
  i1240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1241[3], i1240.m_Metrics)
  i1240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1241[4], i1240.m_GlyphRect)
  i1240.m_Scale = i1241[5]
  i1240.m_AtlasIndex = i1241[6]
  i1240.m_ClassDefinitionType = i1241[7]
  return i1240
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Style', i1245[i + 0]));
  }
  i1242.m_StyleList = i1244
  return i1242
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Style' )
  var i1249 = data
  i1248.m_Name = i1249[0]
  i1248.m_HashCode = i1249[1]
  i1248.m_OpeningDefinition = i1249[2]
  i1248.m_ClosingDefinition = i1249[3]
  i1248.m_OpeningTagArray = i1249[4]
  i1248.m_ClosingTagArray = i1249[5]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1253[i + 0]) );
  }
  i1250.files = i1252
  i1250.componentToPrefabIds = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1257 = data
  i1256.path = i1257[0]
  request.r(i1257[1], i1257[2], 0, i1256, 'unityObject')
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1261[i + 0]) );
  }
  i1258.scriptsExecutionOrder = i1260
  var i1263 = i1259[1]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1263[i + 0]) );
  }
  i1258.sortingLayers = i1262
  var i1265 = i1259[2]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1265[i + 0]) );
  }
  i1258.cullingLayers = i1264
  i1258.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1259[3], i1258.timeSettings)
  i1258.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1259[4], i1258.physicsSettings)
  i1258.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1259[5], i1258.physics2DSettings)
  i1258.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1259[6], i1258.qualitySettings)
  i1258.enableRealtimeShadows = !!i1259[7]
  i1258.enableAutoInstancing = !!i1259[8]
  i1258.enableStaticBatching = !!i1259[9]
  i1258.enableDynamicBatching = !!i1259[10]
  i1258.lightmapEncodingQuality = i1259[11]
  i1258.desiredColorSpace = i1259[12]
  var i1267 = i1259[13]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( i1267[i + 0] );
  }
  i1258.allTags = i1266
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.value = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1275 = data
  i1274.id = i1275[0]
  i1274.name = i1275[1]
  i1274.value = i1275[2]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1279 = data
  i1278.id = i1279[0]
  i1278.name = i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1281 = data
  i1280.fixedDeltaTime = i1281[0]
  i1280.maximumDeltaTime = i1281[1]
  i1280.timeScale = i1281[2]
  i1280.maximumParticleTimestep = i1281[3]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1283 = data
  i1282.gravity = new pc.Vec3( i1283[0], i1283[1], i1283[2] )
  i1282.defaultSolverIterations = i1283[3]
  i1282.bounceThreshold = i1283[4]
  i1282.autoSyncTransforms = !!i1283[5]
  i1282.autoSimulation = !!i1283[6]
  var i1285 = i1283[7]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1285[i + 0]) );
  }
  i1282.collisionMatrix = i1284
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1289 = data
  i1288.enabled = !!i1289[0]
  i1288.layerId = i1289[1]
  i1288.otherLayerId = i1289[2]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'material')
  i1290.gravity = new pc.Vec2( i1291[2], i1291[3] )
  i1290.positionIterations = i1291[4]
  i1290.velocityIterations = i1291[5]
  i1290.velocityThreshold = i1291[6]
  i1290.maxLinearCorrection = i1291[7]
  i1290.maxAngularCorrection = i1291[8]
  i1290.maxTranslationSpeed = i1291[9]
  i1290.maxRotationSpeed = i1291[10]
  i1290.baumgarteScale = i1291[11]
  i1290.baumgarteTOIScale = i1291[12]
  i1290.timeToSleep = i1291[13]
  i1290.linearSleepTolerance = i1291[14]
  i1290.angularSleepTolerance = i1291[15]
  i1290.defaultContactOffset = i1291[16]
  i1290.autoSimulation = !!i1291[17]
  i1290.queriesHitTriggers = !!i1291[18]
  i1290.queriesStartInColliders = !!i1291[19]
  i1290.callbacksOnDisable = !!i1291[20]
  i1290.reuseCollisionCallbacks = !!i1291[21]
  i1290.autoSyncTransforms = !!i1291[22]
  var i1293 = i1291[23]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1293[i + 0]) );
  }
  i1290.collisionMatrix = i1292
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1297 = data
  i1296.enabled = !!i1297[0]
  i1296.layerId = i1297[1]
  i1296.otherLayerId = i1297[2]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1301[i + 0]) );
  }
  i1298.qualityLevels = i1300
  var i1303 = i1299[1]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( i1303[i + 0] );
  }
  i1298.names = i1302
  i1298.shadows = i1299[2]
  i1298.anisotropicFiltering = i1299[3]
  i1298.antiAliasing = i1299[4]
  i1298.lodBias = i1299[5]
  i1298.shadowCascades = i1299[6]
  i1298.shadowDistance = i1299[7]
  i1298.shadowmaskMode = i1299[8]
  i1298.shadowProjection = i1299[9]
  i1298.shadowResolution = i1299[10]
  i1298.softParticles = !!i1299[11]
  i1298.softVegetation = !!i1299[12]
  i1298.activeColorSpace = i1299[13]
  i1298.desiredColorSpace = i1299[14]
  i1298.masterTextureLimit = i1299[15]
  i1298.maxQueuedFrames = i1299[16]
  i1298.particleRaycastBudget = i1299[17]
  i1298.pixelLightCount = i1299[18]
  i1298.realtimeReflectionProbes = !!i1299[19]
  i1298.shadowCascade2Split = i1299[20]
  i1298.shadowCascade4Split = new pc.Vec3( i1299[21], i1299[22], i1299[23] )
  i1298.streamingMipmapsActive = !!i1299[24]
  i1298.vSyncCount = i1299[25]
  i1298.asyncUploadBufferSize = i1299[26]
  i1298.asyncUploadTimeSlice = i1299[27]
  i1298.billboardsFaceCameraPosition = !!i1299[28]
  i1298.shadowNearPlaneOffset = i1299[29]
  i1298.streamingMipmapsMemoryBudget = i1299[30]
  i1298.maximumLODLevel = i1299[31]
  i1298.streamingMipmapsAddAllCameras = !!i1299[32]
  i1298.streamingMipmapsMaxLevelReduction = i1299[33]
  i1298.streamingMipmapsRenderersPerFrame = i1299[34]
  i1298.resolutionScalingFixedDPIFactor = i1299[35]
  i1298.streamingMipmapsMaxFileIORequests = i1299[36]
  i1298.currentQualityLevel = i1299[37]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1309 = data
  i1308.weight = i1309[0]
  i1308.vertices = i1309[1]
  i1308.normals = i1309[2]
  i1308.tangents = i1309[3]
  return i1308
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1311 = data
  i1310.m_XCoordinate = i1311[0]
  i1310.m_YCoordinate = i1311[1]
  return i1310
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1313 = data
  i1312.m_XPositionAdjustment = i1313[0]
  i1312.m_YPositionAdjustment = i1313[1]
  return i1312
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1315 = data
  i1314.xPlacement = i1315[0]
  i1314.yPlacement = i1315[1]
  i1314.xAdvance = i1315[2]
  i1314.yAdvance = i1315[3]
  return i1314
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[10],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[10],"77":[29],"78":[79],"80":[79],"81":[28],"14":[10],"82":[28],"83":[84,28],"34":[29],"85":[84,28],"86":[2,29],"87":[29],"88":[29,31],"89":[56],"90":[63],"91":[92],"93":[94],"95":[6],"96":[10],"97":[98],"99":[15],"100":[81],"101":[28],"24":[29,28],"102":[28,84],"103":[28],"104":[84,28],"105":[29],"106":[84,28],"107":[28],"108":[109],"110":[109],"111":[109],"112":[113],"114":[28],"115":[28],"116":[81],"117":[84,28],"118":[28],"119":[81],"120":[28],"121":[28],"122":[28],"123":[28],"124":[28],"125":[28],"126":[28],"127":[28],"128":[28],"129":[84,28],"130":[28],"131":[28],"132":[28],"133":[28],"134":[84,28],"135":[28],"136":[15],"137":[15],"16":[15],"138":[15],"13":[10],"139":[10]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","FailMaker","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.Physics2DRaycaster","AutoCameraFit","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","gameManager","ItemManager","ItemController","TMPro.TextMeshPro","InputManager","handHintManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","UnityEngine.BoxCollider","UnityEngine.Mesh","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.CanvasRenderer","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom_PointAndClick";

Deserializers.lunaInitializationTime = "06/04/2026 03:10:57";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "PLY_DreamRoom_LV21";

Deserializers.lunaAppID = "27329";

Deserializers.projectId = "7846e0c7f52f4e24980153ffda0343e2";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1883";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5330";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.DreamyRoom-PointAndClick";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "697fda27-ba62-4a40-a1c4-b99fe1530c01";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


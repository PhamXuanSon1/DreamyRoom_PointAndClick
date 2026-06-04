var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5922 = root || request.c( 'UnityEngine.JointSpring' )
  var i5923 = data
  i5922.spring = i5923[0]
  i5922.damper = i5923[1]
  i5922.targetPosition = i5923[2]
  return i5922
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5924 = root || request.c( 'UnityEngine.JointMotor' )
  var i5925 = data
  i5924.m_TargetVelocity = i5925[0]
  i5924.m_Force = i5925[1]
  i5924.m_FreeSpin = i5925[2]
  return i5924
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5926 = root || request.c( 'UnityEngine.JointLimits' )
  var i5927 = data
  i5926.m_Min = i5927[0]
  i5926.m_Max = i5927[1]
  i5926.m_Bounciness = i5927[2]
  i5926.m_BounceMinVelocity = i5927[3]
  i5926.m_ContactDistance = i5927[4]
  i5926.minBounce = i5927[5]
  i5926.maxBounce = i5927[6]
  return i5926
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5928 = root || request.c( 'UnityEngine.JointDrive' )
  var i5929 = data
  i5928.m_PositionSpring = i5929[0]
  i5928.m_PositionDamper = i5929[1]
  i5928.m_MaximumForce = i5929[2]
  i5928.m_UseAcceleration = i5929[3]
  return i5928
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5930 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5931 = data
  i5930.m_Spring = i5931[0]
  i5930.m_Damper = i5931[1]
  return i5930
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5932 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5933 = data
  i5932.m_Limit = i5933[0]
  i5932.m_Bounciness = i5933[1]
  i5932.m_ContactDistance = i5933[2]
  return i5932
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5934 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5935 = data
  i5934.m_ExtremumSlip = i5935[0]
  i5934.m_ExtremumValue = i5935[1]
  i5934.m_AsymptoteSlip = i5935[2]
  i5934.m_AsymptoteValue = i5935[3]
  i5934.m_Stiffness = i5935[4]
  return i5934
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5936 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5937 = data
  i5936.m_LowerAngle = i5937[0]
  i5936.m_UpperAngle = i5937[1]
  return i5936
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5938 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5939 = data
  i5938.m_MotorSpeed = i5939[0]
  i5938.m_MaximumMotorTorque = i5939[1]
  return i5938
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5940 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5941 = data
  i5940.m_DampingRatio = i5941[0]
  i5940.m_Frequency = i5941[1]
  i5940.m_Angle = i5941[2]
  return i5940
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5942 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5943 = data
  i5942.m_LowerTranslation = i5943[0]
  i5942.m_UpperTranslation = i5943[1]
  return i5942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5945 = data
  i5944.position = new pc.Vec3( i5945[0], i5945[1], i5945[2] )
  i5944.scale = new pc.Vec3( i5945[3], i5945[4], i5945[5] )
  i5944.rotation = new pc.Quat(i5945[6], i5945[7], i5945[8], i5945[9])
  return i5944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5947 = data
  request.r(i5947[0], i5947[1], 0, i5946, 'animatorController')
  request.r(i5947[2], i5947[3], 0, i5946, 'avatar')
  i5946.updateMode = i5947[4]
  i5946.hasTransformHierarchy = !!i5947[5]
  i5946.applyRootMotion = !!i5947[6]
  var i5949 = i5947[7]
  var i5948 = []
  for(var i = 0; i < i5949.length; i += 2) {
  request.r(i5949[i + 0], i5949[i + 1], 2, i5948, '')
  }
  i5946.humanBones = i5948
  i5946.enabled = !!i5947[8]
  return i5946
}

Deserializers["FailMaker"] = function (request, data, root) {
  var i5952 = root || request.c( 'FailMaker' )
  var i5953 = data
  request.r(i5953[0], i5953[1], 0, i5952, 'tf')
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5955 = data
  i5954.color = new pc.Color(i5955[0], i5955[1], i5955[2], i5955[3])
  request.r(i5955[4], i5955[5], 0, i5954, 'sprite')
  i5954.flipX = !!i5955[6]
  i5954.flipY = !!i5955[7]
  i5954.drawMode = i5955[8]
  i5954.size = new pc.Vec2( i5955[9], i5955[10] )
  i5954.tileMode = i5955[11]
  i5954.adaptiveModeThreshold = i5955[12]
  i5954.maskInteraction = i5955[13]
  i5954.spriteSortPoint = i5955[14]
  i5954.enabled = !!i5955[15]
  request.r(i5955[16], i5955[17], 0, i5954, 'sharedMaterial')
  var i5957 = i5955[18]
  var i5956 = []
  for(var i = 0; i < i5957.length; i += 2) {
  request.r(i5957[i + 0], i5957[i + 1], 2, i5956, '')
  }
  i5954.sharedMaterials = i5956
  i5954.receiveShadows = !!i5955[19]
  i5954.shadowCastingMode = i5955[20]
  i5954.sortingLayerID = i5955[21]
  i5954.sortingOrder = i5955[22]
  i5954.lightmapIndex = i5955[23]
  i5954.lightmapSceneIndex = i5955[24]
  i5954.lightmapScaleOffset = new pc.Vec4( i5955[25], i5955[26], i5955[27], i5955[28] )
  i5954.lightProbeUsage = i5955[29]
  i5954.reflectionProbeUsage = i5955[30]
  return i5954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5961 = data
  i5960.name = i5961[0]
  i5960.tagId = i5961[1]
  i5960.enabled = !!i5961[2]
  i5960.isStatic = !!i5961[3]
  i5960.layer = i5961[4]
  return i5960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5962 = root || new pc.UnityMaterial()
  var i5963 = data
  i5962.name = i5963[0]
  request.r(i5963[1], i5963[2], 0, i5962, 'shader')
  i5962.renderQueue = i5963[3]
  i5962.enableInstancing = !!i5963[4]
  var i5965 = i5963[5]
  var i5964 = []
  for(var i = 0; i < i5965.length; i += 1) {
    i5964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5965[i + 0]) );
  }
  i5962.floatParameters = i5964
  var i5967 = i5963[6]
  var i5966 = []
  for(var i = 0; i < i5967.length; i += 1) {
    i5966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5967[i + 0]) );
  }
  i5962.colorParameters = i5966
  var i5969 = i5963[7]
  var i5968 = []
  for(var i = 0; i < i5969.length; i += 1) {
    i5968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5969[i + 0]) );
  }
  i5962.vectorParameters = i5968
  var i5971 = i5963[8]
  var i5970 = []
  for(var i = 0; i < i5971.length; i += 1) {
    i5970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5971[i + 0]) );
  }
  i5962.textureParameters = i5970
  var i5973 = i5963[9]
  var i5972 = []
  for(var i = 0; i < i5973.length; i += 1) {
    i5972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5973[i + 0]) );
  }
  i5962.materialFlags = i5972
  return i5962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5977 = data
  i5976.name = i5977[0]
  i5976.value = i5977[1]
  return i5976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5981 = data
  i5980.name = i5981[0]
  i5980.value = new pc.Color(i5981[1], i5981[2], i5981[3], i5981[4])
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5985 = data
  i5984.name = i5985[0]
  i5984.value = new pc.Vec4( i5985[1], i5985[2], i5985[3], i5985[4] )
  return i5984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5989 = data
  i5988.name = i5989[0]
  request.r(i5989[1], i5989[2], 0, i5988, 'value')
  return i5988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5993 = data
  i5992.name = i5993[0]
  i5992.enabled = !!i5993[1]
  return i5992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5995 = data
  i5994.name = i5995[0]
  i5994.width = i5995[1]
  i5994.height = i5995[2]
  i5994.mipmapCount = i5995[3]
  i5994.anisoLevel = i5995[4]
  i5994.filterMode = i5995[5]
  i5994.hdr = !!i5995[6]
  i5994.format = i5995[7]
  i5994.wrapMode = i5995[8]
  i5994.alphaIsTransparency = !!i5995[9]
  i5994.alphaSource = i5995[10]
  i5994.graphicsFormat = i5995[11]
  i5994.sRGBTexture = !!i5995[12]
  i5994.desiredColorSpace = i5995[13]
  i5994.wrapU = i5995[14]
  i5994.wrapV = i5995[15]
  return i5994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5997 = data
  i5996.name = i5997[0]
  i5996.halfPrecision = !!i5997[1]
  i5996.useSimplification = !!i5997[2]
  i5996.useUInt32IndexFormat = !!i5997[3]
  i5996.vertexCount = i5997[4]
  i5996.aabb = i5997[5]
  var i5999 = i5997[6]
  var i5998 = []
  for(var i = 0; i < i5999.length; i += 1) {
    i5998.push( !!i5999[i + 0] );
  }
  i5996.streams = i5998
  i5996.vertices = i5997[7]
  var i6001 = i5997[8]
  var i6000 = []
  for(var i = 0; i < i6001.length; i += 1) {
    i6000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6001[i + 0]) );
  }
  i5996.subMeshes = i6000
  var i6003 = i5997[9]
  var i6002 = []
  for(var i = 0; i < i6003.length; i += 16) {
    i6002.push( new pc.Mat4().setData(i6003[i + 0], i6003[i + 1], i6003[i + 2], i6003[i + 3],  i6003[i + 4], i6003[i + 5], i6003[i + 6], i6003[i + 7],  i6003[i + 8], i6003[i + 9], i6003[i + 10], i6003[i + 11],  i6003[i + 12], i6003[i + 13], i6003[i + 14], i6003[i + 15]) );
  }
  i5996.bindposes = i6002
  var i6005 = i5997[10]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 1) {
    i6004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6005[i + 0]) );
  }
  i5996.blendShapes = i6004
  return i5996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6011 = data
  i6010.triangles = i6011[0]
  return i6010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6017 = data
  i6016.name = i6017[0]
  var i6019 = i6017[1]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 1) {
    i6018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6019[i + 0]) );
  }
  i6016.frames = i6018
  return i6016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6021 = data
  i6020.name = i6021[0]
  i6020.index = i6021[1]
  i6020.startup = !!i6021[2]
  return i6020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6023 = data
  i6022.aspect = i6023[0]
  i6022.orthographic = !!i6023[1]
  i6022.orthographicSize = i6023[2]
  i6022.backgroundColor = new pc.Color(i6023[3], i6023[4], i6023[5], i6023[6])
  i6022.nearClipPlane = i6023[7]
  i6022.farClipPlane = i6023[8]
  i6022.fieldOfView = i6023[9]
  i6022.depth = i6023[10]
  i6022.clearFlags = i6023[11]
  i6022.cullingMask = i6023[12]
  i6022.rect = i6023[13]
  request.r(i6023[14], i6023[15], 0, i6022, 'targetTexture')
  i6022.usePhysicalProperties = !!i6023[16]
  i6022.focalLength = i6023[17]
  i6022.sensorSize = new pc.Vec2( i6023[18], i6023[19] )
  i6022.lensShift = new pc.Vec2( i6023[20], i6023[21] )
  i6022.gateFit = i6023[22]
  i6022.commandBufferCount = i6023[23]
  i6022.cameraType = i6023[24]
  i6022.enabled = !!i6023[25]
  return i6022
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i6024 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i6025 = data
  i6024.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i6025[0] )
  i6024.m_MaxRayIntersections = i6025[1]
  return i6024
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i6026 = root || request.c( 'AutoCameraFit' )
  var i6027 = data
  request.r(i6027[0], i6027[1], 0, i6026, 'canvasBtn')
  request.r(i6027[2], i6027[3], 0, i6026, 'targetArea')
  i6026.paddingLandscape = i6027[4]
  i6026.paddingPortrait = i6027[5]
  i6026.extraPaddingSmallScreen = i6027[6]
  i6026.smallScreenThreshold = i6027[7]
  i6026.autoUpdateOnResize = !!i6027[8]
  i6026.adjustInEditMode = !!i6027[9]
  return i6026
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6028 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6029 = data
  request.r(i6029[0], i6029[1], 0, i6028, 'm_FirstSelected')
  i6028.m_sendNavigationEvents = !!i6029[2]
  i6028.m_DragThreshold = i6029[3]
  return i6028
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6030 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6031 = data
  i6030.m_HorizontalAxis = i6031[0]
  i6030.m_VerticalAxis = i6031[1]
  i6030.m_SubmitButton = i6031[2]
  i6030.m_CancelButton = i6031[3]
  i6030.m_InputActionsPerSecond = i6031[4]
  i6030.m_RepeatDelay = i6031[5]
  i6030.m_ForceModuleActive = !!i6031[6]
  i6030.m_SendPointerHoverToParent = !!i6031[7]
  return i6030
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i6032 = root || request.c( 'Ply_Pool' )
  var i6033 = data
  var i6035 = i6033[0]
  var i6034 = []
  for(var i = 0; i < i6035.length; i += 1) {
    i6034.push( request.d('Ply_Pool+PoolAmount', i6035[i + 0]) );
  }
  i6032.poolAmounts = i6034
  return i6032
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i6038 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i6039 = data
  i6038.type = i6039[0]
  i6038.amount = i6039[1]
  request.r(i6039[2], i6039[3], 0, i6038, 'gameUnit')
  return i6038
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i6040 = root || request.c( 'Ply_SoundManager' )
  var i6041 = data
  i6040.audioClips = request.d('FxAudio', i6041[0], i6040.audioClips)
  request.r(i6041[1], i6041[2], 0, i6040, 'sound')
  return i6040
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i6042 = root || request.c( 'FxAudio' )
  var i6043 = data
  i6042.correctMaker = request.d('SoundData', i6043[0], i6042.correctMaker)
  i6042.wrongMaker = request.d('SoundData', i6043[1], i6042.wrongMaker)
  return i6042
}

Deserializers["SoundData"] = function (request, data, root) {
  var i6044 = root || request.c( 'SoundData' )
  var i6045 = data
  request.r(i6045[0], i6045[1], 0, i6044, 'clip')
  i6044.repeatCount = i6045[2]
  return i6044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6047 = data
  request.r(i6047[0], i6047[1], 0, i6046, 'clip')
  request.r(i6047[2], i6047[3], 0, i6046, 'outputAudioMixerGroup')
  i6046.playOnAwake = !!i6047[4]
  i6046.loop = !!i6047[5]
  i6046.time = i6047[6]
  i6046.volume = i6047[7]
  i6046.pitch = i6047[8]
  i6046.enabled = !!i6047[9]
  return i6046
}

Deserializers["gameManager"] = function (request, data, root) {
  var i6048 = root || request.c( 'gameManager' )
  var i6049 = data
  return i6048
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i6050 = root || request.c( 'ItemManager' )
  var i6051 = data
  var i6053 = i6051[0]
  var i6052 = []
  for(var i = 0; i < i6053.length; i += 2) {
  request.r(i6053[i + 0], i6053[i + 1], 2, i6052, '')
  }
  i6050.allSpots = i6052
  request.r(i6051[1], i6051[2], 0, i6050, 'progressText')
  i6050.totalSpots = i6051[3]
  i6050.spotsToTriggerStore = i6051[4]
  return i6050
}

Deserializers["InputManager"] = function (request, data, root) {
  var i6056 = root || request.c( 'InputManager' )
  var i6057 = data
  request.r(i6057[0], i6057[1], 0, i6056, 'mainCamera')
  request.r(i6057[2], i6057[3], 0, i6056, 'itemManager')
  i6056.failMarkerZOffset = i6057[4]
  return i6056
}

Deserializers["handHintManager"] = function (request, data, root) {
  var i6058 = root || request.c( 'handHintManager' )
  var i6059 = data
  i6058.timeToHint = i6059[0]
  request.r(i6059[1], i6059[2], 0, i6058, 'handHintObj')
  request.r(i6059[3], i6059[4], 0, i6058, 'itemManager')
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6061 = data
  i6060.pivot = new pc.Vec2( i6061[0], i6061[1] )
  i6060.anchorMin = new pc.Vec2( i6061[2], i6061[3] )
  i6060.anchorMax = new pc.Vec2( i6061[4], i6061[5] )
  i6060.sizeDelta = new pc.Vec2( i6061[6], i6061[7] )
  i6060.anchoredPosition3D = new pc.Vec3( i6061[8], i6061[9], i6061[10] )
  i6060.rotation = new pc.Quat(i6061[11], i6061[12], i6061[13], i6061[14])
  i6060.scale = new pc.Vec3( i6061[15], i6061[16], i6061[17] )
  return i6060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6063 = data
  request.r(i6063[0], i6063[1], 0, i6062, 'additionalVertexStreams')
  i6062.enabled = !!i6063[2]
  request.r(i6063[3], i6063[4], 0, i6062, 'sharedMaterial')
  var i6065 = i6063[5]
  var i6064 = []
  for(var i = 0; i < i6065.length; i += 2) {
  request.r(i6065[i + 0], i6065[i + 1], 2, i6064, '')
  }
  i6062.sharedMaterials = i6064
  i6062.receiveShadows = !!i6063[6]
  i6062.shadowCastingMode = i6063[7]
  i6062.sortingLayerID = i6063[8]
  i6062.sortingOrder = i6063[9]
  i6062.lightmapIndex = i6063[10]
  i6062.lightmapSceneIndex = i6063[11]
  i6062.lightmapScaleOffset = new pc.Vec4( i6063[12], i6063[13], i6063[14], i6063[15] )
  i6062.lightProbeUsage = i6063[16]
  i6062.reflectionProbeUsage = i6063[17]
  return i6062
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i6066 = root || request.c( 'TMPro.TextMeshPro' )
  var i6067 = data
  i6066._SortingLayer = i6067[0]
  i6066._SortingLayerID = i6067[1]
  i6066._SortingOrder = i6067[2]
  i6066.m_hasFontAssetChanged = !!i6067[3]
  request.r(i6067[4], i6067[5], 0, i6066, 'm_renderer')
  i6066.m_maskType = i6067[6]
  i6066.m_text = i6067[7]
  i6066.m_isRightToLeft = !!i6067[8]
  request.r(i6067[9], i6067[10], 0, i6066, 'm_fontAsset')
  request.r(i6067[11], i6067[12], 0, i6066, 'm_sharedMaterial')
  var i6069 = i6067[13]
  var i6068 = []
  for(var i = 0; i < i6069.length; i += 2) {
  request.r(i6069[i + 0], i6069[i + 1], 2, i6068, '')
  }
  i6066.m_fontSharedMaterials = i6068
  request.r(i6067[14], i6067[15], 0, i6066, 'm_fontMaterial')
  var i6071 = i6067[16]
  var i6070 = []
  for(var i = 0; i < i6071.length; i += 2) {
  request.r(i6071[i + 0], i6071[i + 1], 2, i6070, '')
  }
  i6066.m_fontMaterials = i6070
  i6066.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6067[17], i6067[18], i6067[19], i6067[20])
  i6066.m_fontColor = new pc.Color(i6067[21], i6067[22], i6067[23], i6067[24])
  i6066.m_enableVertexGradient = !!i6067[25]
  i6066.m_colorMode = i6067[26]
  i6066.m_fontColorGradient = request.d('TMPro.VertexGradient', i6067[27], i6066.m_fontColorGradient)
  request.r(i6067[28], i6067[29], 0, i6066, 'm_fontColorGradientPreset')
  request.r(i6067[30], i6067[31], 0, i6066, 'm_spriteAsset')
  i6066.m_tintAllSprites = !!i6067[32]
  request.r(i6067[33], i6067[34], 0, i6066, 'm_StyleSheet')
  i6066.m_TextStyleHashCode = i6067[35]
  i6066.m_overrideHtmlColors = !!i6067[36]
  i6066.m_faceColor = UnityEngine.Color32.ConstructColor(i6067[37], i6067[38], i6067[39], i6067[40])
  i6066.m_fontSize = i6067[41]
  i6066.m_fontSizeBase = i6067[42]
  i6066.m_fontWeight = i6067[43]
  i6066.m_enableAutoSizing = !!i6067[44]
  i6066.m_fontSizeMin = i6067[45]
  i6066.m_fontSizeMax = i6067[46]
  i6066.m_fontStyle = i6067[47]
  i6066.m_HorizontalAlignment = i6067[48]
  i6066.m_VerticalAlignment = i6067[49]
  i6066.m_textAlignment = i6067[50]
  i6066.m_characterSpacing = i6067[51]
  i6066.m_wordSpacing = i6067[52]
  i6066.m_lineSpacing = i6067[53]
  i6066.m_lineSpacingMax = i6067[54]
  i6066.m_paragraphSpacing = i6067[55]
  i6066.m_charWidthMaxAdj = i6067[56]
  i6066.m_TextWrappingMode = i6067[57]
  i6066.m_wordWrappingRatios = i6067[58]
  i6066.m_overflowMode = i6067[59]
  request.r(i6067[60], i6067[61], 0, i6066, 'm_linkedTextComponent')
  request.r(i6067[62], i6067[63], 0, i6066, 'parentLinkedComponent')
  i6066.m_enableKerning = !!i6067[64]
  var i6073 = i6067[65]
  var i6072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6073.length; i += 1) {
    i6072.add(i6073[i + 0]);
  }
  i6066.m_ActiveFontFeatures = i6072
  i6066.m_enableExtraPadding = !!i6067[66]
  i6066.checkPaddingRequired = !!i6067[67]
  i6066.m_isRichText = !!i6067[68]
  i6066.m_parseCtrlCharacters = !!i6067[69]
  i6066.m_isOrthographic = !!i6067[70]
  i6066.m_isCullingEnabled = !!i6067[71]
  i6066.m_horizontalMapping = i6067[72]
  i6066.m_verticalMapping = i6067[73]
  i6066.m_uvLineOffset = i6067[74]
  i6066.m_geometrySortingOrder = i6067[75]
  i6066.m_IsTextObjectScaleStatic = !!i6067[76]
  i6066.m_VertexBufferAutoSizeReduction = !!i6067[77]
  i6066.m_useMaxVisibleDescender = !!i6067[78]
  i6066.m_pageToDisplay = i6067[79]
  i6066.m_margin = new pc.Vec4( i6067[80], i6067[81], i6067[82], i6067[83] )
  i6066.m_isUsingLegacyAnimationComponent = !!i6067[84]
  i6066.m_isVolumetricText = !!i6067[85]
  request.r(i6067[86], i6067[87], 0, i6066, 'm_Material')
  i6066.m_EmojiFallbackSupport = !!i6067[88]
  i6066.m_Maskable = !!i6067[89]
  i6066.m_Color = new pc.Color(i6067[90], i6067[91], i6067[92], i6067[93])
  i6066.m_RaycastTarget = !!i6067[94]
  i6066.m_RaycastPadding = new pc.Vec4( i6067[95], i6067[96], i6067[97], i6067[98] )
  return i6066
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6074 = root || request.c( 'TMPro.VertexGradient' )
  var i6075 = data
  i6074.topLeft = new pc.Color(i6075[0], i6075[1], i6075[2], i6075[3])
  i6074.topRight = new pc.Color(i6075[4], i6075[5], i6075[6], i6075[7])
  i6074.bottomLeft = new pc.Color(i6075[8], i6075[9], i6075[10], i6075[11])
  i6074.bottomRight = new pc.Color(i6075[12], i6075[13], i6075[14], i6075[15])
  return i6074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6079 = data
  request.r(i6079[0], i6079[1], 0, i6078, 'sharedMesh')
  return i6078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6081 = data
  i6080.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6081[0], i6080.main)
  i6080.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6081[1], i6080.colorBySpeed)
  i6080.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6081[2], i6080.colorOverLifetime)
  i6080.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6081[3], i6080.emission)
  i6080.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6081[4], i6080.rotationBySpeed)
  i6080.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6081[5], i6080.rotationOverLifetime)
  i6080.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6081[6], i6080.shape)
  i6080.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6081[7], i6080.sizeBySpeed)
  i6080.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6081[8], i6080.sizeOverLifetime)
  i6080.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6081[9], i6080.textureSheetAnimation)
  i6080.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6081[10], i6080.velocityOverLifetime)
  i6080.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6081[11], i6080.noise)
  i6080.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6081[12], i6080.inheritVelocity)
  i6080.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6081[13], i6080.forceOverLifetime)
  i6080.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6081[14], i6080.limitVelocityOverLifetime)
  i6080.useAutoRandomSeed = !!i6081[15]
  i6080.randomSeed = i6081[16]
  return i6080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6082 = root || new pc.ParticleSystemMain()
  var i6083 = data
  i6082.duration = i6083[0]
  i6082.loop = !!i6083[1]
  i6082.prewarm = !!i6083[2]
  i6082.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[3], i6082.startDelay)
  i6082.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[4], i6082.startLifetime)
  i6082.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[5], i6082.startSpeed)
  i6082.startSize3D = !!i6083[6]
  i6082.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[7], i6082.startSizeX)
  i6082.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[8], i6082.startSizeY)
  i6082.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[9], i6082.startSizeZ)
  i6082.startRotation3D = !!i6083[10]
  i6082.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[11], i6082.startRotationX)
  i6082.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[12], i6082.startRotationY)
  i6082.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[13], i6082.startRotationZ)
  i6082.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6083[14], i6082.startColor)
  i6082.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[15], i6082.gravityModifier)
  i6082.simulationSpace = i6083[16]
  request.r(i6083[17], i6083[18], 0, i6082, 'customSimulationSpace')
  i6082.simulationSpeed = i6083[19]
  i6082.useUnscaledTime = !!i6083[20]
  i6082.scalingMode = i6083[21]
  i6082.playOnAwake = !!i6083[22]
  i6082.maxParticles = i6083[23]
  i6082.emitterVelocityMode = i6083[24]
  i6082.stopAction = i6083[25]
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6084 = root || new pc.MinMaxCurve()
  var i6085 = data
  i6084.mode = i6085[0]
  i6084.curveMin = new pc.AnimationCurve( { keys_flow: i6085[1] } )
  i6084.curveMax = new pc.AnimationCurve( { keys_flow: i6085[2] } )
  i6084.curveMultiplier = i6085[3]
  i6084.constantMin = i6085[4]
  i6084.constantMax = i6085[5]
  return i6084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6086 = root || new pc.MinMaxGradient()
  var i6087 = data
  i6086.mode = i6087[0]
  i6086.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6087[1], i6086.gradientMin)
  i6086.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6087[2], i6086.gradientMax)
  i6086.colorMin = new pc.Color(i6087[3], i6087[4], i6087[5], i6087[6])
  i6086.colorMax = new pc.Color(i6087[7], i6087[8], i6087[9], i6087[10])
  return i6086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6089 = data
  i6088.mode = i6089[0]
  var i6091 = i6089[1]
  var i6090 = []
  for(var i = 0; i < i6091.length; i += 1) {
    i6090.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6091[i + 0]) );
  }
  i6088.colorKeys = i6090
  var i6093 = i6089[2]
  var i6092 = []
  for(var i = 0; i < i6093.length; i += 1) {
    i6092.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6093[i + 0]) );
  }
  i6088.alphaKeys = i6092
  return i6088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6094 = root || new pc.ParticleSystemColorBySpeed()
  var i6095 = data
  i6094.enabled = !!i6095[0]
  i6094.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6095[1], i6094.color)
  i6094.range = new pc.Vec2( i6095[2], i6095[3] )
  return i6094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6099 = data
  i6098.color = new pc.Color(i6099[0], i6099[1], i6099[2], i6099[3])
  i6098.time = i6099[4]
  return i6098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6103 = data
  i6102.alpha = i6103[0]
  i6102.time = i6103[1]
  return i6102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6104 = root || new pc.ParticleSystemColorOverLifetime()
  var i6105 = data
  i6104.enabled = !!i6105[0]
  i6104.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6105[1], i6104.color)
  return i6104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6106 = root || new pc.ParticleSystemEmitter()
  var i6107 = data
  i6106.enabled = !!i6107[0]
  i6106.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6107[1], i6106.rateOverTime)
  i6106.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6107[2], i6106.rateOverDistance)
  var i6109 = i6107[3]
  var i6108 = []
  for(var i = 0; i < i6109.length; i += 1) {
    i6108.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6109[i + 0]) );
  }
  i6106.bursts = i6108
  return i6106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6112 = root || new pc.ParticleSystemBurst()
  var i6113 = data
  i6112.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6113[0], i6112.count)
  i6112.cycleCount = i6113[1]
  i6112.minCount = i6113[2]
  i6112.maxCount = i6113[3]
  i6112.repeatInterval = i6113[4]
  i6112.time = i6113[5]
  return i6112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6114 = root || new pc.ParticleSystemRotationBySpeed()
  var i6115 = data
  i6114.enabled = !!i6115[0]
  i6114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6115[1], i6114.x)
  i6114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6115[2], i6114.y)
  i6114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6115[3], i6114.z)
  i6114.separateAxes = !!i6115[4]
  i6114.range = new pc.Vec2( i6115[5], i6115[6] )
  return i6114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6116 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6117 = data
  i6116.enabled = !!i6117[0]
  i6116.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6117[1], i6116.x)
  i6116.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6117[2], i6116.y)
  i6116.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6117[3], i6116.z)
  i6116.separateAxes = !!i6117[4]
  return i6116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6118 = root || new pc.ParticleSystemShape()
  var i6119 = data
  i6118.enabled = !!i6119[0]
  i6118.shapeType = i6119[1]
  i6118.randomDirectionAmount = i6119[2]
  i6118.sphericalDirectionAmount = i6119[3]
  i6118.randomPositionAmount = i6119[4]
  i6118.alignToDirection = !!i6119[5]
  i6118.radius = i6119[6]
  i6118.radiusMode = i6119[7]
  i6118.radiusSpread = i6119[8]
  i6118.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6119[9], i6118.radiusSpeed)
  i6118.radiusThickness = i6119[10]
  i6118.angle = i6119[11]
  i6118.length = i6119[12]
  i6118.boxThickness = new pc.Vec3( i6119[13], i6119[14], i6119[15] )
  i6118.meshShapeType = i6119[16]
  request.r(i6119[17], i6119[18], 0, i6118, 'mesh')
  request.r(i6119[19], i6119[20], 0, i6118, 'meshRenderer')
  request.r(i6119[21], i6119[22], 0, i6118, 'skinnedMeshRenderer')
  i6118.useMeshMaterialIndex = !!i6119[23]
  i6118.meshMaterialIndex = i6119[24]
  i6118.useMeshColors = !!i6119[25]
  i6118.normalOffset = i6119[26]
  i6118.arc = i6119[27]
  i6118.arcMode = i6119[28]
  i6118.arcSpread = i6119[29]
  i6118.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6119[30], i6118.arcSpeed)
  i6118.donutRadius = i6119[31]
  i6118.position = new pc.Vec3( i6119[32], i6119[33], i6119[34] )
  i6118.rotation = new pc.Vec3( i6119[35], i6119[36], i6119[37] )
  i6118.scale = new pc.Vec3( i6119[38], i6119[39], i6119[40] )
  return i6118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6120 = root || new pc.ParticleSystemSizeBySpeed()
  var i6121 = data
  i6120.enabled = !!i6121[0]
  i6120.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6121[1], i6120.x)
  i6120.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6121[2], i6120.y)
  i6120.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6121[3], i6120.z)
  i6120.separateAxes = !!i6121[4]
  i6120.range = new pc.Vec2( i6121[5], i6121[6] )
  return i6120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6122 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6123 = data
  i6122.enabled = !!i6123[0]
  i6122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6123[1], i6122.x)
  i6122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6123[2], i6122.y)
  i6122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6123[3], i6122.z)
  i6122.separateAxes = !!i6123[4]
  return i6122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6124 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6125 = data
  i6124.enabled = !!i6125[0]
  i6124.mode = i6125[1]
  i6124.animation = i6125[2]
  i6124.numTilesX = i6125[3]
  i6124.numTilesY = i6125[4]
  i6124.useRandomRow = !!i6125[5]
  i6124.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6125[6], i6124.frameOverTime)
  i6124.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6125[7], i6124.startFrame)
  i6124.cycleCount = i6125[8]
  i6124.rowIndex = i6125[9]
  i6124.flipU = i6125[10]
  i6124.flipV = i6125[11]
  i6124.spriteCount = i6125[12]
  var i6127 = i6125[13]
  var i6126 = []
  for(var i = 0; i < i6127.length; i += 2) {
  request.r(i6127[i + 0], i6127[i + 1], 2, i6126, '')
  }
  i6124.sprites = i6126
  return i6124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6130 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6131 = data
  i6130.enabled = !!i6131[0]
  i6130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[1], i6130.x)
  i6130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[2], i6130.y)
  i6130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[3], i6130.z)
  i6130.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[4], i6130.radial)
  i6130.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[5], i6130.speedModifier)
  i6130.space = i6131[6]
  i6130.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[7], i6130.orbitalX)
  i6130.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[8], i6130.orbitalY)
  i6130.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[9], i6130.orbitalZ)
  i6130.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[10], i6130.orbitalOffsetX)
  i6130.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[11], i6130.orbitalOffsetY)
  i6130.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6131[12], i6130.orbitalOffsetZ)
  return i6130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6132 = root || new pc.ParticleSystemNoise()
  var i6133 = data
  i6132.enabled = !!i6133[0]
  i6132.separateAxes = !!i6133[1]
  i6132.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[2], i6132.strengthX)
  i6132.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[3], i6132.strengthY)
  i6132.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[4], i6132.strengthZ)
  i6132.frequency = i6133[5]
  i6132.damping = !!i6133[6]
  i6132.octaveCount = i6133[7]
  i6132.octaveMultiplier = i6133[8]
  i6132.octaveScale = i6133[9]
  i6132.quality = i6133[10]
  i6132.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[11], i6132.scrollSpeed)
  i6132.scrollSpeedMultiplier = i6133[12]
  i6132.remapEnabled = !!i6133[13]
  i6132.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[14], i6132.remapX)
  i6132.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[15], i6132.remapY)
  i6132.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[16], i6132.remapZ)
  i6132.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[17], i6132.positionAmount)
  i6132.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[18], i6132.rotationAmount)
  i6132.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6133[19], i6132.sizeAmount)
  return i6132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6134 = root || new pc.ParticleSystemInheritVelocity()
  var i6135 = data
  i6134.enabled = !!i6135[0]
  i6134.mode = i6135[1]
  i6134.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6135[2], i6134.curve)
  return i6134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6136 = root || new pc.ParticleSystemForceOverLifetime()
  var i6137 = data
  i6136.enabled = !!i6137[0]
  i6136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6137[1], i6136.x)
  i6136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6137[2], i6136.y)
  i6136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6137[3], i6136.z)
  i6136.space = i6137[4]
  i6136.randomized = !!i6137[5]
  return i6136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6138 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6139 = data
  i6138.enabled = !!i6139[0]
  i6138.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[1], i6138.limit)
  i6138.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[2], i6138.limitX)
  i6138.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[3], i6138.limitY)
  i6138.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[4], i6138.limitZ)
  i6138.dampen = i6139[5]
  i6138.separateAxes = !!i6139[6]
  i6138.space = i6139[7]
  i6138.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6139[8], i6138.drag)
  i6138.multiplyDragByParticleSize = !!i6139[9]
  i6138.multiplyDragByParticleVelocity = !!i6139[10]
  return i6138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6141 = data
  request.r(i6141[0], i6141[1], 0, i6140, 'mesh')
  i6140.meshCount = i6141[2]
  i6140.activeVertexStreamsCount = i6141[3]
  i6140.alignment = i6141[4]
  i6140.renderMode = i6141[5]
  i6140.sortMode = i6141[6]
  i6140.lengthScale = i6141[7]
  i6140.velocityScale = i6141[8]
  i6140.cameraVelocityScale = i6141[9]
  i6140.normalDirection = i6141[10]
  i6140.sortingFudge = i6141[11]
  i6140.minParticleSize = i6141[12]
  i6140.maxParticleSize = i6141[13]
  i6140.pivot = new pc.Vec3( i6141[14], i6141[15], i6141[16] )
  request.r(i6141[17], i6141[18], 0, i6140, 'trailMaterial')
  i6140.applyActiveColorSpace = !!i6141[19]
  i6140.enabled = !!i6141[20]
  request.r(i6141[21], i6141[22], 0, i6140, 'sharedMaterial')
  var i6143 = i6141[23]
  var i6142 = []
  for(var i = 0; i < i6143.length; i += 2) {
  request.r(i6143[i + 0], i6143[i + 1], 2, i6142, '')
  }
  i6140.sharedMaterials = i6142
  i6140.receiveShadows = !!i6141[24]
  i6140.shadowCastingMode = i6141[25]
  i6140.sortingLayerID = i6141[26]
  i6140.sortingOrder = i6141[27]
  i6140.lightmapIndex = i6141[28]
  i6140.lightmapSceneIndex = i6141[29]
  i6140.lightmapScaleOffset = new pc.Vec4( i6141[30], i6141[31], i6141[32], i6141[33] )
  i6140.lightProbeUsage = i6141[34]
  i6140.reflectionProbeUsage = i6141[35]
  return i6140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6145 = data
  i6144.center = new pc.Vec3( i6145[0], i6145[1], i6145[2] )
  i6144.size = new pc.Vec3( i6145[3], i6145[4], i6145[5] )
  i6144.enabled = !!i6145[6]
  i6144.isTrigger = !!i6145[7]
  request.r(i6145[8], i6145[9], 0, i6144, 'material')
  return i6144
}

Deserializers["ItemController"] = function (request, data, root) {
  var i6146 = root || request.c( 'ItemController' )
  var i6147 = data
  i6146.spotID = i6147[0]
  request.r(i6147[1], i6147[2], 0, i6146, 'successMarker')
  return i6146
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i6148 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i6149 = data
  i6148.loop = !!i6149[0]
  i6148.timeScale = i6149[1]
  request.r(i6149[2], i6149[3], 0, i6148, 'skeletonDataAsset')
  i6148.initialSkinName = i6149[4]
  i6148.fixPrefabOverrideViaMeshFilter = i6149[5]
  i6148.initialFlipX = !!i6149[6]
  i6148.initialFlipY = !!i6149[7]
  i6148.updateWhenInvisible = i6149[8]
  i6148.zSpacing = i6149[9]
  i6148.useClipping = !!i6149[10]
  i6148.immutableTriangles = !!i6149[11]
  i6148.pmaVertexColors = !!i6149[12]
  i6148.clearStateOnDisable = !!i6149[13]
  i6148.tintBlack = !!i6149[14]
  i6148.singleSubmesh = !!i6149[15]
  i6148.fixDrawOrder = !!i6149[16]
  i6148.addNormals = !!i6149[17]
  i6148.calculateTangents = !!i6149[18]
  i6148.maskInteraction = i6149[19]
  i6148.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i6149[20], i6148.maskMaterials)
  i6148.disableRenderingOnOverride = !!i6149[21]
  i6148._animationName = i6149[22]
  var i6151 = i6149[23]
  var i6150 = []
  for(var i = 0; i < i6151.length; i += 1) {
    i6150.push( i6151[i + 0] );
  }
  i6148.separatorSlotNames = i6150
  return i6148
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i6152 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i6153 = data
  var i6155 = i6153[0]
  var i6154 = []
  for(var i = 0; i < i6155.length; i += 2) {
  request.r(i6155[i + 0], i6155[i + 1], 2, i6154, '')
  }
  i6152.materialsMaskDisabled = i6154
  var i6157 = i6153[1]
  var i6156 = []
  for(var i = 0; i < i6157.length; i += 2) {
  request.r(i6157[i + 0], i6157[i + 1], 2, i6156, '')
  }
  i6152.materialsInsideMask = i6156
  var i6159 = i6153[2]
  var i6158 = []
  for(var i = 0; i < i6159.length; i += 2) {
  request.r(i6159[i + 0], i6159[i + 1], 2, i6158, '')
  }
  i6152.materialsOutsideMask = i6158
  return i6152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6163 = data
  i6162.ambientIntensity = i6163[0]
  i6162.reflectionIntensity = i6163[1]
  i6162.ambientMode = i6163[2]
  i6162.ambientLight = new pc.Color(i6163[3], i6163[4], i6163[5], i6163[6])
  i6162.ambientSkyColor = new pc.Color(i6163[7], i6163[8], i6163[9], i6163[10])
  i6162.ambientGroundColor = new pc.Color(i6163[11], i6163[12], i6163[13], i6163[14])
  i6162.ambientEquatorColor = new pc.Color(i6163[15], i6163[16], i6163[17], i6163[18])
  i6162.fogColor = new pc.Color(i6163[19], i6163[20], i6163[21], i6163[22])
  i6162.fogEndDistance = i6163[23]
  i6162.fogStartDistance = i6163[24]
  i6162.fogDensity = i6163[25]
  i6162.fog = !!i6163[26]
  request.r(i6163[27], i6163[28], 0, i6162, 'skybox')
  i6162.fogMode = i6163[29]
  var i6165 = i6163[30]
  var i6164 = []
  for(var i = 0; i < i6165.length; i += 1) {
    i6164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6165[i + 0]) );
  }
  i6162.lightmaps = i6164
  i6162.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6163[31], i6162.lightProbes)
  i6162.lightmapsMode = i6163[32]
  i6162.mixedBakeMode = i6163[33]
  i6162.environmentLightingMode = i6163[34]
  i6162.ambientProbe = new pc.SphericalHarmonicsL2(i6163[35])
  i6162.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6163[36])
  i6162.useReferenceAmbientProbe = !!i6163[37]
  request.r(i6163[38], i6163[39], 0, i6162, 'customReflection')
  request.r(i6163[40], i6163[41], 0, i6162, 'defaultReflection')
  i6162.defaultReflectionMode = i6163[42]
  i6162.defaultReflectionResolution = i6163[43]
  i6162.sunLightObjectId = i6163[44]
  i6162.pixelLightCount = i6163[45]
  i6162.defaultReflectionHDR = !!i6163[46]
  i6162.hasLightDataAsset = !!i6163[47]
  i6162.hasManualGenerate = !!i6163[48]
  return i6162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6169 = data
  request.r(i6169[0], i6169[1], 0, i6168, 'lightmapColor')
  request.r(i6169[2], i6169[3], 0, i6168, 'lightmapDirection')
  return i6168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6170 = root || new UnityEngine.LightProbes()
  var i6171 = data
  return i6170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6179 = data
  var i6181 = i6179[0]
  var i6180 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6181.length; i += 1) {
    i6180.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6181[i + 0]));
  }
  i6178.ShaderCompilationErrors = i6180
  i6178.name = i6179[1]
  i6178.guid = i6179[2]
  var i6183 = i6179[3]
  var i6182 = []
  for(var i = 0; i < i6183.length; i += 1) {
    i6182.push( i6183[i + 0] );
  }
  i6178.shaderDefinedKeywords = i6182
  var i6185 = i6179[4]
  var i6184 = []
  for(var i = 0; i < i6185.length; i += 1) {
    i6184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6185[i + 0]) );
  }
  i6178.passes = i6184
  var i6187 = i6179[5]
  var i6186 = []
  for(var i = 0; i < i6187.length; i += 1) {
    i6186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6187[i + 0]) );
  }
  i6178.usePasses = i6186
  var i6189 = i6179[6]
  var i6188 = []
  for(var i = 0; i < i6189.length; i += 1) {
    i6188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6189[i + 0]) );
  }
  i6178.defaultParameterValues = i6188
  request.r(i6179[7], i6179[8], 0, i6178, 'unityFallbackShader')
  i6178.readDepth = !!i6179[9]
  i6178.hasDepthOnlyPass = !!i6179[10]
  i6178.isCreatedByShaderGraph = !!i6179[11]
  i6178.disableBatching = !!i6179[12]
  i6178.compiled = !!i6179[13]
  return i6178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6193 = data
  i6192.shaderName = i6193[0]
  i6192.errorMessage = i6193[1]
  return i6192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6196 = root || new pc.UnityShaderPass()
  var i6197 = data
  i6196.id = i6197[0]
  i6196.subShaderIndex = i6197[1]
  i6196.name = i6197[2]
  i6196.passType = i6197[3]
  i6196.grabPassTextureName = i6197[4]
  i6196.usePass = !!i6197[5]
  i6196.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[6], i6196.zTest)
  i6196.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[7], i6196.zWrite)
  i6196.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[8], i6196.culling)
  i6196.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6197[9], i6196.blending)
  i6196.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6197[10], i6196.alphaBlending)
  i6196.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[11], i6196.colorWriteMask)
  i6196.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[12], i6196.offsetUnits)
  i6196.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[13], i6196.offsetFactor)
  i6196.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[14], i6196.stencilRef)
  i6196.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[15], i6196.stencilReadMask)
  i6196.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6197[16], i6196.stencilWriteMask)
  i6196.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6197[17], i6196.stencilOp)
  i6196.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6197[18], i6196.stencilOpFront)
  i6196.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6197[19], i6196.stencilOpBack)
  var i6199 = i6197[20]
  var i6198 = []
  for(var i = 0; i < i6199.length; i += 1) {
    i6198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6199[i + 0]) );
  }
  i6196.tags = i6198
  var i6201 = i6197[21]
  var i6200 = []
  for(var i = 0; i < i6201.length; i += 1) {
    i6200.push( i6201[i + 0] );
  }
  i6196.passDefinedKeywords = i6200
  var i6203 = i6197[22]
  var i6202 = []
  for(var i = 0; i < i6203.length; i += 1) {
    i6202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6203[i + 0]) );
  }
  i6196.passDefinedKeywordGroups = i6202
  var i6205 = i6197[23]
  var i6204 = []
  for(var i = 0; i < i6205.length; i += 1) {
    i6204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6205[i + 0]) );
  }
  i6196.variants = i6204
  var i6207 = i6197[24]
  var i6206 = []
  for(var i = 0; i < i6207.length; i += 1) {
    i6206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6207[i + 0]) );
  }
  i6196.excludedVariants = i6206
  i6196.hasDepthReader = !!i6197[25]
  return i6196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6209 = data
  i6208.val = i6209[0]
  i6208.name = i6209[1]
  return i6208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6211 = data
  i6210.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6211[0], i6210.src)
  i6210.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6211[1], i6210.dst)
  i6210.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6211[2], i6210.op)
  return i6210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6213 = data
  i6212.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6213[0], i6212.pass)
  i6212.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6213[1], i6212.fail)
  i6212.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6213[2], i6212.zFail)
  i6212.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6213[3], i6212.comp)
  return i6212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6217 = data
  i6216.name = i6217[0]
  i6216.value = i6217[1]
  return i6216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6221 = data
  var i6223 = i6221[0]
  var i6222 = []
  for(var i = 0; i < i6223.length; i += 1) {
    i6222.push( i6223[i + 0] );
  }
  i6220.keywords = i6222
  i6220.hasDiscard = !!i6221[1]
  return i6220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6227 = data
  i6226.passId = i6227[0]
  i6226.subShaderIndex = i6227[1]
  var i6229 = i6227[2]
  var i6228 = []
  for(var i = 0; i < i6229.length; i += 1) {
    i6228.push( i6229[i + 0] );
  }
  i6226.keywords = i6228
  i6226.vertexProgram = i6227[3]
  i6226.fragmentProgram = i6227[4]
  i6226.exportedForWebGl2 = !!i6227[5]
  i6226.readDepth = !!i6227[6]
  return i6226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6233 = data
  request.r(i6233[0], i6233[1], 0, i6232, 'shader')
  i6232.pass = i6233[2]
  return i6232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6237 = data
  i6236.name = i6237[0]
  i6236.type = i6237[1]
  i6236.value = new pc.Vec4( i6237[2], i6237[3], i6237[4], i6237[5] )
  i6236.textureValue = i6237[6]
  i6236.shaderPropertyFlag = i6237[7]
  return i6236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6239 = data
  i6238.name = i6239[0]
  request.r(i6239[1], i6239[2], 0, i6238, 'texture')
  i6238.aabb = i6239[3]
  i6238.vertices = i6239[4]
  i6238.triangles = i6239[5]
  i6238.textureRect = UnityEngine.Rect.MinMaxRect(i6239[6], i6239[7], i6239[8], i6239[9])
  i6238.packedRect = UnityEngine.Rect.MinMaxRect(i6239[10], i6239[11], i6239[12], i6239[13])
  i6238.border = new pc.Vec4( i6239[14], i6239[15], i6239[16], i6239[17] )
  i6238.transparency = i6239[18]
  i6238.bounds = i6239[19]
  i6238.pixelsPerUnit = i6239[20]
  i6238.textureWidth = i6239[21]
  i6238.textureHeight = i6239[22]
  i6238.nativeSize = new pc.Vec2( i6239[23], i6239[24] )
  i6238.pivot = new pc.Vec2( i6239[25], i6239[26] )
  i6238.textureRectOffset = new pc.Vec2( i6239[27], i6239[28] )
  return i6238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6241 = data
  i6240.name = i6241[0]
  return i6240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6243 = data
  i6242.name = i6243[0]
  i6242.wrapMode = i6243[1]
  i6242.isLooping = !!i6243[2]
  i6242.length = i6243[3]
  var i6245 = i6243[4]
  var i6244 = []
  for(var i = 0; i < i6245.length; i += 1) {
    i6244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6245[i + 0]) );
  }
  i6242.curves = i6244
  var i6247 = i6243[5]
  var i6246 = []
  for(var i = 0; i < i6247.length; i += 1) {
    i6246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6247[i + 0]) );
  }
  i6242.events = i6246
  i6242.halfPrecision = !!i6243[6]
  i6242._frameRate = i6243[7]
  i6242.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6243[8], i6242.localBounds)
  i6242.hasMuscleCurves = !!i6243[9]
  var i6249 = i6243[10]
  var i6248 = []
  for(var i = 0; i < i6249.length; i += 1) {
    i6248.push( i6249[i + 0] );
  }
  i6242.clipMuscleConstant = i6248
  i6242.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6243[11], i6242.clipBindingConstant)
  return i6242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6253 = data
  i6252.path = i6253[0]
  i6252.hash = i6253[1]
  i6252.componentType = i6253[2]
  i6252.property = i6253[3]
  i6252.keys = i6253[4]
  var i6255 = i6253[5]
  var i6254 = []
  for(var i = 0; i < i6255.length; i += 1) {
    i6254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6255[i + 0]) );
  }
  i6252.objectReferenceKeys = i6254
  return i6252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6259 = data
  i6258.time = i6259[0]
  request.r(i6259[1], i6259[2], 0, i6258, 'value')
  return i6258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6263 = data
  i6262.functionName = i6263[0]
  i6262.floatParameter = i6263[1]
  i6262.intParameter = i6263[2]
  i6262.stringParameter = i6263[3]
  request.r(i6263[4], i6263[5], 0, i6262, 'objectReferenceParameter')
  i6262.time = i6263[6]
  return i6262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6265 = data
  i6264.center = new pc.Vec3( i6265[0], i6265[1], i6265[2] )
  i6264.extends = new pc.Vec3( i6265[3], i6265[4], i6265[5] )
  return i6264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6269 = data
  var i6271 = i6269[0]
  var i6270 = []
  for(var i = 0; i < i6271.length; i += 1) {
    i6270.push( i6271[i + 0] );
  }
  i6268.genericBindings = i6270
  var i6273 = i6269[1]
  var i6272 = []
  for(var i = 0; i < i6273.length; i += 1) {
    i6272.push( i6273[i + 0] );
  }
  i6268.pptrCurveMapping = i6272
  return i6268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6275 = data
  i6274.name = i6275[0]
  i6274.ascent = i6275[1]
  i6274.originalLineHeight = i6275[2]
  i6274.fontSize = i6275[3]
  var i6277 = i6275[4]
  var i6276 = []
  for(var i = 0; i < i6277.length; i += 1) {
    i6276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6277[i + 0]) );
  }
  i6274.characterInfo = i6276
  request.r(i6275[5], i6275[6], 0, i6274, 'texture')
  i6274.originalFontSize = i6275[7]
  return i6274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6281 = data
  i6280.index = i6281[0]
  i6280.advance = i6281[1]
  i6280.bearing = i6281[2]
  i6280.glyphWidth = i6281[3]
  i6280.glyphHeight = i6281[4]
  i6280.minX = i6281[5]
  i6280.maxX = i6281[6]
  i6280.minY = i6281[7]
  i6280.maxY = i6281[8]
  i6280.uvBottomLeftX = i6281[9]
  i6280.uvBottomLeftY = i6281[10]
  i6280.uvBottomRightX = i6281[11]
  i6280.uvBottomRightY = i6281[12]
  i6280.uvTopLeftX = i6281[13]
  i6280.uvTopLeftY = i6281[14]
  i6280.uvTopRightX = i6281[15]
  i6280.uvTopRightY = i6281[16]
  return i6280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6283 = data
  i6282.name = i6283[0]
  var i6285 = i6283[1]
  var i6284 = []
  for(var i = 0; i < i6285.length; i += 1) {
    i6284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6285[i + 0]) );
  }
  i6282.layers = i6284
  var i6287 = i6283[2]
  var i6286 = []
  for(var i = 0; i < i6287.length; i += 1) {
    i6286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6287[i + 0]) );
  }
  i6282.parameters = i6286
  i6282.animationClips = i6283[3]
  i6282.avatarUnsupported = i6283[4]
  return i6282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6291 = data
  i6290.name = i6291[0]
  i6290.defaultWeight = i6291[1]
  i6290.blendingMode = i6291[2]
  i6290.avatarMask = i6291[3]
  i6290.syncedLayerIndex = i6291[4]
  i6290.syncedLayerAffectsTiming = !!i6291[5]
  i6290.syncedLayers = i6291[6]
  i6290.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6291[7], i6290.stateMachine)
  return i6290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6293 = data
  i6292.id = i6293[0]
  i6292.name = i6293[1]
  i6292.path = i6293[2]
  var i6295 = i6293[3]
  var i6294 = []
  for(var i = 0; i < i6295.length; i += 1) {
    i6294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6295[i + 0]) );
  }
  i6292.states = i6294
  var i6297 = i6293[4]
  var i6296 = []
  for(var i = 0; i < i6297.length; i += 1) {
    i6296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6297[i + 0]) );
  }
  i6292.machines = i6296
  var i6299 = i6293[5]
  var i6298 = []
  for(var i = 0; i < i6299.length; i += 1) {
    i6298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6299[i + 0]) );
  }
  i6292.entryStateTransitions = i6298
  var i6301 = i6293[6]
  var i6300 = []
  for(var i = 0; i < i6301.length; i += 1) {
    i6300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6301[i + 0]) );
  }
  i6292.exitStateTransitions = i6300
  var i6303 = i6293[7]
  var i6302 = []
  for(var i = 0; i < i6303.length; i += 1) {
    i6302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6303[i + 0]) );
  }
  i6292.anyStateTransitions = i6302
  i6292.defaultStateId = i6293[8]
  return i6292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6307 = data
  i6306.id = i6307[0]
  i6306.name = i6307[1]
  i6306.cycleOffset = i6307[2]
  i6306.cycleOffsetParameter = i6307[3]
  i6306.cycleOffsetParameterActive = !!i6307[4]
  i6306.mirror = !!i6307[5]
  i6306.mirrorParameter = i6307[6]
  i6306.mirrorParameterActive = !!i6307[7]
  i6306.motionId = i6307[8]
  i6306.nameHash = i6307[9]
  i6306.fullPathHash = i6307[10]
  i6306.speed = i6307[11]
  i6306.speedParameter = i6307[12]
  i6306.speedParameterActive = !!i6307[13]
  i6306.tag = i6307[14]
  i6306.tagHash = i6307[15]
  i6306.writeDefaultValues = !!i6307[16]
  var i6309 = i6307[17]
  var i6308 = []
  for(var i = 0; i < i6309.length; i += 2) {
  request.r(i6309[i + 0], i6309[i + 1], 2, i6308, '')
  }
  i6306.behaviours = i6308
  var i6311 = i6307[18]
  var i6310 = []
  for(var i = 0; i < i6311.length; i += 1) {
    i6310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6311[i + 0]) );
  }
  i6306.transitions = i6310
  return i6306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6317 = data
  i6316.fullPath = i6317[0]
  i6316.canTransitionToSelf = !!i6317[1]
  i6316.duration = i6317[2]
  i6316.exitTime = i6317[3]
  i6316.hasExitTime = !!i6317[4]
  i6316.hasFixedDuration = !!i6317[5]
  i6316.interruptionSource = i6317[6]
  i6316.offset = i6317[7]
  i6316.orderedInterruption = !!i6317[8]
  i6316.destinationStateId = i6317[9]
  i6316.isExit = !!i6317[10]
  i6316.mute = !!i6317[11]
  i6316.solo = !!i6317[12]
  var i6319 = i6317[13]
  var i6318 = []
  for(var i = 0; i < i6319.length; i += 1) {
    i6318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6319[i + 0]) );
  }
  i6316.conditions = i6318
  return i6316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6325 = data
  i6324.destinationStateId = i6325[0]
  i6324.isExit = !!i6325[1]
  i6324.mute = !!i6325[2]
  i6324.solo = !!i6325[3]
  var i6327 = i6325[4]
  var i6326 = []
  for(var i = 0; i < i6327.length; i += 1) {
    i6326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6327[i + 0]) );
  }
  i6324.conditions = i6326
  return i6324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6331 = data
  i6330.defaultBool = !!i6331[0]
  i6330.defaultFloat = i6331[1]
  i6330.defaultInt = i6331[2]
  i6330.name = i6331[3]
  i6330.nameHash = i6331[4]
  i6330.type = i6331[5]
  return i6330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6335 = data
  i6334.mode = i6335[0]
  i6334.parameter = i6335[1]
  i6334.threshold = i6335[2]
  return i6334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6337 = data
  i6336.name = i6337[0]
  i6336.bytes64 = i6337[1]
  i6336.data = i6337[2]
  return i6336
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6338 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6339 = data
  var i6341 = i6339[0]
  var i6340 = []
  for(var i = 0; i < i6341.length; i += 2) {
  request.r(i6341[i + 0], i6341[i + 1], 2, i6340, '')
  }
  i6338.atlasAssets = i6340
  i6338.scale = i6339[1]
  request.r(i6339[2], i6339[3], 0, i6338, 'skeletonJSON')
  i6338.isUpgradingBlendModeMaterials = !!i6339[4]
  i6338.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6339[5], i6338.blendModeMaterials)
  var i6343 = i6339[6]
  var i6342 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6343.length; i += 2) {
  request.r(i6343[i + 0], i6343[i + 1], 1, i6342, '')
  }
  i6338.skeletonDataModifiers = i6342
  var i6345 = i6339[7]
  var i6344 = []
  for(var i = 0; i < i6345.length; i += 1) {
    i6344.push( i6345[i + 0] );
  }
  i6338.fromAnimation = i6344
  var i6347 = i6339[8]
  var i6346 = []
  for(var i = 0; i < i6347.length; i += 1) {
    i6346.push( i6347[i + 0] );
  }
  i6338.toAnimation = i6346
  i6338.duration = i6339[9]
  i6338.defaultMix = i6339[10]
  request.r(i6339[11], i6339[12], 0, i6338, 'controller')
  return i6338
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6350 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6351 = data
  i6350.applyAdditiveMaterial = !!i6351[0]
  var i6353 = i6351[1]
  var i6352 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6353.length; i += 1) {
    i6352.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6353[i + 0]));
  }
  i6350.additiveMaterials = i6352
  var i6355 = i6351[2]
  var i6354 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6355.length; i += 1) {
    i6354.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6355[i + 0]));
  }
  i6350.multiplyMaterials = i6354
  var i6357 = i6351[3]
  var i6356 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6357.length; i += 1) {
    i6356.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6357[i + 0]));
  }
  i6350.screenMaterials = i6356
  i6350.requiresBlendModeMaterials = !!i6351[4]
  return i6350
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6360 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6361 = data
  i6360.pageName = i6361[0]
  request.r(i6361[1], i6361[2], 0, i6360, 'material')
  return i6360
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6364 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6365 = data
  request.r(i6365[0], i6365[1], 0, i6364, 'atlasFile')
  var i6367 = i6365[2]
  var i6366 = []
  for(var i = 0; i < i6367.length; i += 2) {
  request.r(i6367[i + 0], i6367[i + 1], 2, i6366, '')
  }
  i6364.materials = i6366
  return i6364
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6368 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6369 = data
  i6368.normalStyle = i6369[0]
  i6368.normalSpacingOffset = i6369[1]
  i6368.boldStyle = i6369[2]
  i6368.boldSpacing = i6369[3]
  i6368.italicStyle = i6369[4]
  i6368.tabSize = i6369[5]
  request.r(i6369[6], i6369[7], 0, i6368, 'atlas')
  i6368.m_SourceFontFileGUID = i6369[8]
  i6368.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6369[9], i6368.m_CreationSettings)
  request.r(i6369[10], i6369[11], 0, i6368, 'm_SourceFontFile')
  i6368.m_SourceFontFilePath = i6369[12]
  i6368.m_AtlasPopulationMode = i6369[13]
  i6368.InternalDynamicOS = !!i6369[14]
  var i6371 = i6369[15]
  var i6370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6371.length; i += 1) {
    i6370.add(request.d('UnityEngine.TextCore.Glyph', i6371[i + 0]));
  }
  i6368.m_GlyphTable = i6370
  var i6373 = i6369[16]
  var i6372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6373.length; i += 1) {
    i6372.add(request.d('TMPro.TMP_Character', i6373[i + 0]));
  }
  i6368.m_CharacterTable = i6372
  var i6375 = i6369[17]
  var i6374 = []
  for(var i = 0; i < i6375.length; i += 2) {
  request.r(i6375[i + 0], i6375[i + 1], 2, i6374, '')
  }
  i6368.m_AtlasTextures = i6374
  i6368.m_AtlasTextureIndex = i6369[18]
  i6368.m_IsMultiAtlasTexturesEnabled = !!i6369[19]
  i6368.m_GetFontFeatures = !!i6369[20]
  i6368.m_ClearDynamicDataOnBuild = !!i6369[21]
  i6368.m_AtlasWidth = i6369[22]
  i6368.m_AtlasHeight = i6369[23]
  i6368.m_AtlasPadding = i6369[24]
  i6368.m_AtlasRenderMode = i6369[25]
  var i6377 = i6369[26]
  var i6376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6377.length; i += 1) {
    i6376.add(request.d('UnityEngine.TextCore.GlyphRect', i6377[i + 0]));
  }
  i6368.m_UsedGlyphRects = i6376
  var i6379 = i6369[27]
  var i6378 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6379.length; i += 1) {
    i6378.add(request.d('UnityEngine.TextCore.GlyphRect', i6379[i + 0]));
  }
  i6368.m_FreeGlyphRects = i6378
  i6368.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6369[28], i6368.m_FontFeatureTable)
  i6368.m_ShouldReimportFontFeatures = !!i6369[29]
  var i6381 = i6369[30]
  var i6380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6381.length; i += 2) {
  request.r(i6381[i + 0], i6381[i + 1], 1, i6380, '')
  }
  i6368.m_FallbackFontAssetTable = i6380
  var i6383 = i6369[31]
  var i6382 = []
  for(var i = 0; i < i6383.length; i += 1) {
    i6382.push( request.d('TMPro.TMP_FontWeightPair', i6383[i + 0]) );
  }
  i6368.m_FontWeightTable = i6382
  var i6385 = i6369[32]
  var i6384 = []
  for(var i = 0; i < i6385.length; i += 1) {
    i6384.push( request.d('TMPro.TMP_FontWeightPair', i6385[i + 0]) );
  }
  i6368.fontWeights = i6384
  i6368.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6369[33], i6368.m_fontInfo)
  var i6387 = i6369[34]
  var i6386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6387.length; i += 1) {
    i6386.add(request.d('TMPro.TMP_Glyph', i6387[i + 0]));
  }
  i6368.m_glyphInfoList = i6386
  i6368.m_KerningTable = request.d('TMPro.KerningTable', i6369[35], i6368.m_KerningTable)
  var i6389 = i6369[36]
  var i6388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6389.length; i += 2) {
  request.r(i6389[i + 0], i6389[i + 1], 1, i6388, '')
  }
  i6368.fallbackFontAssets = i6388
  i6368.m_Version = i6369[37]
  i6368.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6369[38], i6368.m_FaceInfo)
  request.r(i6369[39], i6369[40], 0, i6368, 'm_Material')
  return i6368
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6390 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6391 = data
  i6390.sourceFontFileName = i6391[0]
  i6390.sourceFontFileGUID = i6391[1]
  i6390.faceIndex = i6391[2]
  i6390.pointSizeSamplingMode = i6391[3]
  i6390.pointSize = i6391[4]
  i6390.padding = i6391[5]
  i6390.paddingMode = i6391[6]
  i6390.packingMode = i6391[7]
  i6390.atlasWidth = i6391[8]
  i6390.atlasHeight = i6391[9]
  i6390.characterSetSelectionMode = i6391[10]
  i6390.characterSequence = i6391[11]
  i6390.referencedFontAssetGUID = i6391[12]
  i6390.referencedTextAssetGUID = i6391[13]
  i6390.fontStyle = i6391[14]
  i6390.fontStyleModifier = i6391[15]
  i6390.renderMode = i6391[16]
  i6390.includeFontFeatures = !!i6391[17]
  return i6390
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6394 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6395 = data
  i6394.m_Index = i6395[0]
  i6394.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6395[1], i6394.m_Metrics)
  i6394.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6395[2], i6394.m_GlyphRect)
  i6394.m_Scale = i6395[3]
  i6394.m_AtlasIndex = i6395[4]
  i6394.m_ClassDefinitionType = i6395[5]
  return i6394
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6396 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6397 = data
  i6396.m_Width = i6397[0]
  i6396.m_Height = i6397[1]
  i6396.m_HorizontalBearingX = i6397[2]
  i6396.m_HorizontalBearingY = i6397[3]
  i6396.m_HorizontalAdvance = i6397[4]
  return i6396
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6398 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6399 = data
  i6398.m_X = i6399[0]
  i6398.m_Y = i6399[1]
  i6398.m_Width = i6399[2]
  i6398.m_Height = i6399[3]
  return i6398
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6402 = root || request.c( 'TMPro.TMP_Character' )
  var i6403 = data
  i6402.m_ElementType = i6403[0]
  i6402.m_Unicode = i6403[1]
  i6402.m_GlyphIndex = i6403[2]
  i6402.m_Scale = i6403[3]
  return i6402
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6408 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6409 = data
  var i6411 = i6409[0]
  var i6410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6411.length; i += 1) {
    i6410.add(request.d('TMPro.MultipleSubstitutionRecord', i6411[i + 0]));
  }
  i6408.m_MultipleSubstitutionRecords = i6410
  var i6413 = i6409[1]
  var i6412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6413.length; i += 1) {
    i6412.add(request.d('TMPro.LigatureSubstitutionRecord', i6413[i + 0]));
  }
  i6408.m_LigatureSubstitutionRecords = i6412
  var i6415 = i6409[2]
  var i6414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6415.length; i += 1) {
    i6414.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6415[i + 0]));
  }
  i6408.m_GlyphPairAdjustmentRecords = i6414
  var i6417 = i6409[3]
  var i6416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i6417.length; i += 1) {
    i6416.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i6417[i + 0]));
  }
  i6408.m_MarkToBaseAdjustmentRecords = i6416
  var i6419 = i6409[4]
  var i6418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i6419.length; i += 1) {
    i6418.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i6419[i + 0]));
  }
  i6408.m_MarkToMarkAdjustmentRecords = i6418
  return i6408
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i6422 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i6423 = data
  i6422.m_TargetGlyphID = i6423[0]
  i6422.m_SubstituteGlyphIDs = i6423[1]
  return i6422
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i6426 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i6427 = data
  i6426.m_ComponentGlyphIDs = i6427[0]
  i6426.m_LigatureGlyphID = i6427[1]
  return i6426
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6430 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i6431 = data
  i6430.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6431[0], i6430.m_FirstAdjustmentRecord)
  i6430.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6431[1], i6430.m_SecondAdjustmentRecord)
  i6430.m_FeatureLookupFlags = i6431[2]
  return i6430
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i6434 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i6435 = data
  i6434.m_BaseGlyphID = i6435[0]
  i6434.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6435[1], i6434.m_BaseGlyphAnchorPoint)
  i6434.m_MarkGlyphID = i6435[2]
  i6434.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6435[3], i6434.m_MarkPositionAdjustment)
  return i6434
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i6438 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i6439 = data
  i6438.m_BaseMarkGlyphID = i6439[0]
  i6438.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i6439[1], i6438.m_BaseMarkGlyphAnchorPoint)
  i6438.m_CombiningMarkGlyphID = i6439[2]
  i6438.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i6439[3], i6438.m_CombiningMarkPositionAdjustment)
  return i6438
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6444 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6445 = data
  request.r(i6445[0], i6445[1], 0, i6444, 'regularTypeface')
  request.r(i6445[2], i6445[3], 0, i6444, 'italicTypeface')
  return i6444
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6446 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6447 = data
  i6446.Name = i6447[0]
  i6446.PointSize = i6447[1]
  i6446.Scale = i6447[2]
  i6446.CharacterCount = i6447[3]
  i6446.LineHeight = i6447[4]
  i6446.Baseline = i6447[5]
  i6446.Ascender = i6447[6]
  i6446.CapHeight = i6447[7]
  i6446.Descender = i6447[8]
  i6446.CenterLine = i6447[9]
  i6446.SuperscriptOffset = i6447[10]
  i6446.SubscriptOffset = i6447[11]
  i6446.SubSize = i6447[12]
  i6446.Underline = i6447[13]
  i6446.UnderlineThickness = i6447[14]
  i6446.strikethrough = i6447[15]
  i6446.strikethroughThickness = i6447[16]
  i6446.TabWidth = i6447[17]
  i6446.Padding = i6447[18]
  i6446.AtlasWidth = i6447[19]
  i6446.AtlasHeight = i6447[20]
  return i6446
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6450 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6451 = data
  i6450.id = i6451[0]
  i6450.x = i6451[1]
  i6450.y = i6451[2]
  i6450.width = i6451[3]
  i6450.height = i6451[4]
  i6450.xOffset = i6451[5]
  i6450.yOffset = i6451[6]
  i6450.xAdvance = i6451[7]
  i6450.scale = i6451[8]
  return i6450
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6452 = root || request.c( 'TMPro.KerningTable' )
  var i6453 = data
  var i6455 = i6453[0]
  var i6454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6455.length; i += 1) {
    i6454.add(request.d('TMPro.KerningPair', i6455[i + 0]));
  }
  i6452.kerningPairs = i6454
  return i6452
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6458 = root || request.c( 'TMPro.KerningPair' )
  var i6459 = data
  i6458.xOffset = i6459[0]
  i6458.m_FirstGlyph = i6459[1]
  i6458.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6459[2], i6458.m_FirstGlyphAdjustments)
  i6458.m_SecondGlyph = i6459[3]
  i6458.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6459[4], i6458.m_SecondGlyphAdjustments)
  i6458.m_IgnoreSpacingAdjustments = !!i6459[5]
  return i6458
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6460 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6461 = data
  i6460.m_FaceIndex = i6461[0]
  i6460.m_FamilyName = i6461[1]
  i6460.m_StyleName = i6461[2]
  i6460.m_PointSize = i6461[3]
  i6460.m_Scale = i6461[4]
  i6460.m_UnitsPerEM = i6461[5]
  i6460.m_LineHeight = i6461[6]
  i6460.m_AscentLine = i6461[7]
  i6460.m_CapLine = i6461[8]
  i6460.m_MeanLine = i6461[9]
  i6460.m_Baseline = i6461[10]
  i6460.m_DescentLine = i6461[11]
  i6460.m_SuperscriptOffset = i6461[12]
  i6460.m_SuperscriptSize = i6461[13]
  i6460.m_SubscriptOffset = i6461[14]
  i6460.m_SubscriptSize = i6461[15]
  i6460.m_UnderlineOffset = i6461[16]
  i6460.m_UnderlineThickness = i6461[17]
  i6460.m_StrikethroughOffset = i6461[18]
  i6460.m_StrikethroughThickness = i6461[19]
  i6460.m_TabWidth = i6461[20]
  return i6460
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6462 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6463 = data
  i6462.useSafeMode = !!i6463[0]
  i6462.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6463[1], i6462.safeModeOptions)
  i6462.timeScale = i6463[2]
  i6462.unscaledTimeScale = i6463[3]
  i6462.useSmoothDeltaTime = !!i6463[4]
  i6462.maxSmoothUnscaledTime = i6463[5]
  i6462.rewindCallbackMode = i6463[6]
  i6462.showUnityEditorReport = !!i6463[7]
  i6462.logBehaviour = i6463[8]
  i6462.drawGizmos = !!i6463[9]
  i6462.defaultRecyclable = !!i6463[10]
  i6462.defaultAutoPlay = i6463[11]
  i6462.defaultUpdateType = i6463[12]
  i6462.defaultTimeScaleIndependent = !!i6463[13]
  i6462.defaultEaseType = i6463[14]
  i6462.defaultEaseOvershootOrAmplitude = i6463[15]
  i6462.defaultEasePeriod = i6463[16]
  i6462.defaultAutoKill = !!i6463[17]
  i6462.defaultLoopType = i6463[18]
  i6462.debugMode = !!i6463[19]
  i6462.debugStoreTargetId = !!i6463[20]
  i6462.showPreviewPanel = !!i6463[21]
  i6462.storeSettingsLocation = i6463[22]
  i6462.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6463[23], i6462.modules)
  i6462.createASMDEF = !!i6463[24]
  i6462.showPlayingTweens = !!i6463[25]
  i6462.showPausedTweens = !!i6463[26]
  return i6462
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6464 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6465 = data
  i6464.logBehaviour = i6465[0]
  i6464.nestedTweenFailureBehaviour = i6465[1]
  return i6464
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6466 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6467 = data
  i6466.showPanel = !!i6467[0]
  i6466.audioEnabled = !!i6467[1]
  i6466.physicsEnabled = !!i6467[2]
  i6466.physics2DEnabled = !!i6467[3]
  i6466.spriteEnabled = !!i6467[4]
  i6466.uiEnabled = !!i6467[5]
  i6466.uiToolkitEnabled = !!i6467[6]
  i6466.textMeshProEnabled = !!i6467[7]
  i6466.tk2DEnabled = !!i6467[8]
  i6466.deAudioEnabled = !!i6467[9]
  i6466.deUnityExtendedEnabled = !!i6467[10]
  i6466.epoOutlineEnabled = !!i6467[11]
  return i6466
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6468 = root || request.c( 'TMPro.TMP_Settings' )
  var i6469 = data
  i6468.assetVersion = i6469[0]
  i6468.m_TextWrappingMode = i6469[1]
  i6468.m_enableKerning = !!i6469[2]
  var i6471 = i6469[3]
  var i6470 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6471.length; i += 1) {
    i6470.add(i6471[i + 0]);
  }
  i6468.m_ActiveFontFeatures = i6470
  i6468.m_enableExtraPadding = !!i6469[4]
  i6468.m_enableTintAllSprites = !!i6469[5]
  i6468.m_enableParseEscapeCharacters = !!i6469[6]
  i6468.m_EnableRaycastTarget = !!i6469[7]
  i6468.m_GetFontFeaturesAtRuntime = !!i6469[8]
  i6468.m_missingGlyphCharacter = i6469[9]
  i6468.m_ClearDynamicDataOnBuild = !!i6469[10]
  i6468.m_warningsDisabled = !!i6469[11]
  request.r(i6469[12], i6469[13], 0, i6468, 'm_defaultFontAsset')
  i6468.m_defaultFontAssetPath = i6469[14]
  i6468.m_defaultFontSize = i6469[15]
  i6468.m_defaultAutoSizeMinRatio = i6469[16]
  i6468.m_defaultAutoSizeMaxRatio = i6469[17]
  i6468.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6469[18], i6469[19] )
  i6468.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6469[20], i6469[21] )
  i6468.m_autoSizeTextContainer = !!i6469[22]
  i6468.m_IsTextObjectScaleStatic = !!i6469[23]
  var i6473 = i6469[24]
  var i6472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6473.length; i += 2) {
  request.r(i6473[i + 0], i6473[i + 1], 1, i6472, '')
  }
  i6468.m_fallbackFontAssets = i6472
  i6468.m_matchMaterialPreset = !!i6469[25]
  i6468.m_HideSubTextObjects = !!i6469[26]
  request.r(i6469[27], i6469[28], 0, i6468, 'm_defaultSpriteAsset')
  i6468.m_defaultSpriteAssetPath = i6469[29]
  i6468.m_enableEmojiSupport = !!i6469[30]
  i6468.m_MissingCharacterSpriteUnicode = i6469[31]
  var i6475 = i6469[32]
  var i6474 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i6475.length; i += 2) {
  request.r(i6475[i + 0], i6475[i + 1], 1, i6474, '')
  }
  i6468.m_EmojiFallbackTextAssets = i6474
  i6468.m_defaultColorGradientPresetsPath = i6469[33]
  request.r(i6469[34], i6469[35], 0, i6468, 'm_defaultStyleSheet')
  i6468.m_StyleSheetsResourcePath = i6469[36]
  request.r(i6469[37], i6469[38], 0, i6468, 'm_leadingCharacters')
  request.r(i6469[39], i6469[40], 0, i6468, 'm_followingCharacters')
  i6468.m_UseModernHangulLineBreakingRules = !!i6469[41]
  return i6468
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6478 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i6479 = data
  i6478.m_GlyphIndex = i6479[0]
  i6478.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i6479[1], i6478.m_GlyphValueRecord)
  return i6478
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i6480 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i6481 = data
  i6480.m_XPlacement = i6481[0]
  i6480.m_YPlacement = i6481[1]
  i6480.m_XAdvance = i6481[2]
  i6480.m_YAdvance = i6481[3]
  return i6480
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6482 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6483 = data
  request.r(i6483[0], i6483[1], 0, i6482, 'spriteSheet')
  var i6485 = i6483[2]
  var i6484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6485.length; i += 1) {
    i6484.add(request.d('TMPro.TMP_Sprite', i6485[i + 0]));
  }
  i6482.spriteInfoList = i6484
  var i6487 = i6483[3]
  var i6486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6487.length; i += 2) {
  request.r(i6487[i + 0], i6487[i + 1], 1, i6486, '')
  }
  i6482.fallbackSpriteAssets = i6486
  var i6489 = i6483[4]
  var i6488 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6489.length; i += 1) {
    i6488.add(request.d('TMPro.TMP_SpriteCharacter', i6489[i + 0]));
  }
  i6482.m_SpriteCharacterTable = i6488
  var i6491 = i6483[5]
  var i6490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.add(request.d('TMPro.TMP_SpriteGlyph', i6491[i + 0]));
  }
  i6482.m_GlyphTable = i6490
  i6482.m_Version = i6483[6]
  i6482.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6483[7], i6482.m_FaceInfo)
  request.r(i6483[8], i6483[9], 0, i6482, 'm_Material')
  return i6482
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6494 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6495 = data
  i6494.name = i6495[0]
  i6494.hashCode = i6495[1]
  i6494.unicode = i6495[2]
  i6494.pivot = new pc.Vec2( i6495[3], i6495[4] )
  request.r(i6495[5], i6495[6], 0, i6494, 'sprite')
  i6494.id = i6495[7]
  i6494.x = i6495[8]
  i6494.y = i6495[9]
  i6494.width = i6495[10]
  i6494.height = i6495[11]
  i6494.xOffset = i6495[12]
  i6494.yOffset = i6495[13]
  i6494.xAdvance = i6495[14]
  i6494.scale = i6495[15]
  return i6494
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6500 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6501 = data
  i6500.m_Name = i6501[0]
  i6500.m_ElementType = i6501[1]
  i6500.m_Unicode = i6501[2]
  i6500.m_GlyphIndex = i6501[3]
  i6500.m_Scale = i6501[4]
  return i6500
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6504 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6505 = data
  request.r(i6505[0], i6505[1], 0, i6504, 'sprite')
  i6504.m_Index = i6505[2]
  i6504.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6505[3], i6504.m_Metrics)
  i6504.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6505[4], i6504.m_GlyphRect)
  i6504.m_Scale = i6505[5]
  i6504.m_AtlasIndex = i6505[6]
  i6504.m_ClassDefinitionType = i6505[7]
  return i6504
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6506 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6507 = data
  var i6509 = i6507[0]
  var i6508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6509.length; i += 1) {
    i6508.add(request.d('TMPro.TMP_Style', i6509[i + 0]));
  }
  i6506.m_StyleList = i6508
  return i6506
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6512 = root || request.c( 'TMPro.TMP_Style' )
  var i6513 = data
  i6512.m_Name = i6513[0]
  i6512.m_HashCode = i6513[1]
  i6512.m_OpeningDefinition = i6513[2]
  i6512.m_ClosingDefinition = i6513[3]
  i6512.m_OpeningTagArray = i6513[4]
  i6512.m_ClosingTagArray = i6513[5]
  return i6512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6515 = data
  var i6517 = i6515[0]
  var i6516 = []
  for(var i = 0; i < i6517.length; i += 1) {
    i6516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6517[i + 0]) );
  }
  i6514.files = i6516
  i6514.componentToPrefabIds = i6515[1]
  return i6514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6521 = data
  i6520.path = i6521[0]
  request.r(i6521[1], i6521[2], 0, i6520, 'unityObject')
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6523 = data
  var i6525 = i6523[0]
  var i6524 = []
  for(var i = 0; i < i6525.length; i += 1) {
    i6524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6525[i + 0]) );
  }
  i6522.scriptsExecutionOrder = i6524
  var i6527 = i6523[1]
  var i6526 = []
  for(var i = 0; i < i6527.length; i += 1) {
    i6526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6527[i + 0]) );
  }
  i6522.sortingLayers = i6526
  var i6529 = i6523[2]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6529[i + 0]) );
  }
  i6522.cullingLayers = i6528
  i6522.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6523[3], i6522.timeSettings)
  i6522.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6523[4], i6522.physicsSettings)
  i6522.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6523[5], i6522.physics2DSettings)
  i6522.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6523[6], i6522.qualitySettings)
  i6522.enableRealtimeShadows = !!i6523[7]
  i6522.enableAutoInstancing = !!i6523[8]
  i6522.enableStaticBatching = !!i6523[9]
  i6522.enableDynamicBatching = !!i6523[10]
  i6522.lightmapEncodingQuality = i6523[11]
  i6522.desiredColorSpace = i6523[12]
  var i6531 = i6523[13]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.push( i6531[i + 0] );
  }
  i6522.allTags = i6530
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6535 = data
  i6534.name = i6535[0]
  i6534.value = i6535[1]
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6539 = data
  i6538.id = i6539[0]
  i6538.name = i6539[1]
  i6538.value = i6539[2]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6543 = data
  i6542.id = i6543[0]
  i6542.name = i6543[1]
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6545 = data
  i6544.fixedDeltaTime = i6545[0]
  i6544.maximumDeltaTime = i6545[1]
  i6544.timeScale = i6545[2]
  i6544.maximumParticleTimestep = i6545[3]
  return i6544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6547 = data
  i6546.gravity = new pc.Vec3( i6547[0], i6547[1], i6547[2] )
  i6546.defaultSolverIterations = i6547[3]
  i6546.bounceThreshold = i6547[4]
  i6546.autoSyncTransforms = !!i6547[5]
  i6546.autoSimulation = !!i6547[6]
  var i6549 = i6547[7]
  var i6548 = []
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6549[i + 0]) );
  }
  i6546.collisionMatrix = i6548
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6553 = data
  i6552.enabled = !!i6553[0]
  i6552.layerId = i6553[1]
  i6552.otherLayerId = i6553[2]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6555 = data
  request.r(i6555[0], i6555[1], 0, i6554, 'material')
  i6554.gravity = new pc.Vec2( i6555[2], i6555[3] )
  i6554.positionIterations = i6555[4]
  i6554.velocityIterations = i6555[5]
  i6554.velocityThreshold = i6555[6]
  i6554.maxLinearCorrection = i6555[7]
  i6554.maxAngularCorrection = i6555[8]
  i6554.maxTranslationSpeed = i6555[9]
  i6554.maxRotationSpeed = i6555[10]
  i6554.baumgarteScale = i6555[11]
  i6554.baumgarteTOIScale = i6555[12]
  i6554.timeToSleep = i6555[13]
  i6554.linearSleepTolerance = i6555[14]
  i6554.angularSleepTolerance = i6555[15]
  i6554.defaultContactOffset = i6555[16]
  i6554.autoSimulation = !!i6555[17]
  i6554.queriesHitTriggers = !!i6555[18]
  i6554.queriesStartInColliders = !!i6555[19]
  i6554.callbacksOnDisable = !!i6555[20]
  i6554.reuseCollisionCallbacks = !!i6555[21]
  i6554.autoSyncTransforms = !!i6555[22]
  var i6557 = i6555[23]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6557[i + 0]) );
  }
  i6554.collisionMatrix = i6556
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6561 = data
  i6560.enabled = !!i6561[0]
  i6560.layerId = i6561[1]
  i6560.otherLayerId = i6561[2]
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6563 = data
  var i6565 = i6563[0]
  var i6564 = []
  for(var i = 0; i < i6565.length; i += 1) {
    i6564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6565[i + 0]) );
  }
  i6562.qualityLevels = i6564
  var i6567 = i6563[1]
  var i6566 = []
  for(var i = 0; i < i6567.length; i += 1) {
    i6566.push( i6567[i + 0] );
  }
  i6562.names = i6566
  i6562.shadows = i6563[2]
  i6562.anisotropicFiltering = i6563[3]
  i6562.antiAliasing = i6563[4]
  i6562.lodBias = i6563[5]
  i6562.shadowCascades = i6563[6]
  i6562.shadowDistance = i6563[7]
  i6562.shadowmaskMode = i6563[8]
  i6562.shadowProjection = i6563[9]
  i6562.shadowResolution = i6563[10]
  i6562.softParticles = !!i6563[11]
  i6562.softVegetation = !!i6563[12]
  i6562.activeColorSpace = i6563[13]
  i6562.desiredColorSpace = i6563[14]
  i6562.masterTextureLimit = i6563[15]
  i6562.maxQueuedFrames = i6563[16]
  i6562.particleRaycastBudget = i6563[17]
  i6562.pixelLightCount = i6563[18]
  i6562.realtimeReflectionProbes = !!i6563[19]
  i6562.shadowCascade2Split = i6563[20]
  i6562.shadowCascade4Split = new pc.Vec3( i6563[21], i6563[22], i6563[23] )
  i6562.streamingMipmapsActive = !!i6563[24]
  i6562.vSyncCount = i6563[25]
  i6562.asyncUploadBufferSize = i6563[26]
  i6562.asyncUploadTimeSlice = i6563[27]
  i6562.billboardsFaceCameraPosition = !!i6563[28]
  i6562.shadowNearPlaneOffset = i6563[29]
  i6562.streamingMipmapsMemoryBudget = i6563[30]
  i6562.maximumLODLevel = i6563[31]
  i6562.streamingMipmapsAddAllCameras = !!i6563[32]
  i6562.streamingMipmapsMaxLevelReduction = i6563[33]
  i6562.streamingMipmapsRenderersPerFrame = i6563[34]
  i6562.resolutionScalingFixedDPIFactor = i6563[35]
  i6562.streamingMipmapsMaxFileIORequests = i6563[36]
  i6562.currentQualityLevel = i6563[37]
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6573 = data
  i6572.weight = i6573[0]
  i6572.vertices = i6573[1]
  i6572.normals = i6573[2]
  i6572.tangents = i6573[3]
  return i6572
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6574 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6575 = data
  i6574.m_XCoordinate = i6575[0]
  i6574.m_YCoordinate = i6575[1]
  return i6574
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6576 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6577 = data
  i6576.m_XPositionAdjustment = i6577[0]
  i6576.m_YPositionAdjustment = i6577[1]
  return i6576
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6578 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6579 = data
  i6578.xPlacement = i6579[0]
  i6578.yPlacement = i6579[1]
  i6578.xAdvance = i6579[2]
  i6578.yAdvance = i6579[3]
  return i6578
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[10],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[10],"77":[29],"78":[79],"80":[79],"81":[28],"14":[10],"82":[28],"83":[84,28],"36":[29],"85":[84,28],"86":[1,29],"87":[29],"88":[29,31],"89":[56],"90":[63],"91":[92],"93":[94],"95":[5],"96":[10],"97":[98],"99":[15],"100":[81],"101":[28],"24":[29,28],"102":[28,84],"103":[28],"104":[84,28],"105":[29],"106":[84,28],"107":[28],"108":[109],"110":[109],"111":[109],"112":[113],"114":[28],"115":[28],"116":[81],"117":[84,28],"118":[28],"119":[81],"120":[28],"121":[28],"122":[28],"123":[28],"124":[28],"125":[28],"126":[28],"127":[28],"128":[28],"129":[84,28],"130":[28],"131":[28],"132":[28],"133":[28],"134":[84,28],"135":[28],"136":[15],"137":[15],"16":[15],"138":[15],"13":[10],"139":[10]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","FailMaker","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.Physics2DRaycaster","AutoCameraFit","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","gameManager","ItemManager","ItemController","TMPro.TextMeshPro","InputManager","handHintManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider","UnityEngine.Mesh","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.CanvasRenderer","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom_PointAndClick";

Deserializers.lunaInitializationTime = "06/04/2026 03:10:57";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1881";

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

Deserializers.buildID = "750f10a2-e8f6-4c9f-a019-c7f123d2969a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


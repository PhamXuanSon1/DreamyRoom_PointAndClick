var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.JointSpring' )
  var i1975 = data
  i1974.spring = i1975[0]
  i1974.damper = i1975[1]
  i1974.targetPosition = i1975[2]
  return i1974
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.JointMotor' )
  var i1977 = data
  i1976.m_TargetVelocity = i1977[0]
  i1976.m_Force = i1977[1]
  i1976.m_FreeSpin = i1977[2]
  return i1976
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.JointLimits' )
  var i1979 = data
  i1978.m_Min = i1979[0]
  i1978.m_Max = i1979[1]
  i1978.m_Bounciness = i1979[2]
  i1978.m_BounceMinVelocity = i1979[3]
  i1978.m_ContactDistance = i1979[4]
  i1978.minBounce = i1979[5]
  i1978.maxBounce = i1979[6]
  return i1978
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.JointDrive' )
  var i1981 = data
  i1980.m_PositionSpring = i1981[0]
  i1980.m_PositionDamper = i1981[1]
  i1980.m_MaximumForce = i1981[2]
  i1980.m_UseAcceleration = i1981[3]
  return i1980
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1983 = data
  i1982.m_Spring = i1983[0]
  i1982.m_Damper = i1983[1]
  return i1982
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1985 = data
  i1984.m_Limit = i1985[0]
  i1984.m_Bounciness = i1985[1]
  i1984.m_ContactDistance = i1985[2]
  return i1984
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1987 = data
  i1986.m_ExtremumSlip = i1987[0]
  i1986.m_ExtremumValue = i1987[1]
  i1986.m_AsymptoteSlip = i1987[2]
  i1986.m_AsymptoteValue = i1987[3]
  i1986.m_Stiffness = i1987[4]
  return i1986
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1989 = data
  i1988.m_LowerAngle = i1989[0]
  i1988.m_UpperAngle = i1989[1]
  return i1988
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1991 = data
  i1990.m_MotorSpeed = i1991[0]
  i1990.m_MaximumMotorTorque = i1991[1]
  return i1990
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1993 = data
  i1992.m_DampingRatio = i1993[0]
  i1992.m_Frequency = i1993[1]
  i1992.m_Angle = i1993[2]
  return i1992
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1995 = data
  i1994.m_LowerTranslation = i1995[0]
  i1994.m_UpperTranslation = i1995[1]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1996 = root || new pc.UnityMaterial()
  var i1997 = data
  i1996.name = i1997[0]
  request.r(i1997[1], i1997[2], 0, i1996, 'shader')
  i1996.renderQueue = i1997[3]
  i1996.enableInstancing = !!i1997[4]
  var i1999 = i1997[5]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1999[i + 0]) );
  }
  i1996.floatParameters = i1998
  var i2001 = i1997[6]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2001[i + 0]) );
  }
  i1996.colorParameters = i2000
  var i2003 = i1997[7]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2003[i + 0]) );
  }
  i1996.vectorParameters = i2002
  var i2005 = i1997[8]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2005[i + 0]) );
  }
  i1996.textureParameters = i2004
  var i2007 = i1997[9]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2007[i + 0]) );
  }
  i1996.materialFlags = i2006
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.value = i2011[1]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2015 = data
  i2014.name = i2015[0]
  i2014.value = new pc.Color(i2015[1], i2015[2], i2015[3], i2015[4])
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.value = new pc.Vec4( i2019[1], i2019[2], i2019[3], i2019[4] )
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2023 = data
  i2022.name = i2023[0]
  request.r(i2023[1], i2023[2], 0, i2022, 'value')
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.enabled = !!i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.width = i2029[1]
  i2028.height = i2029[2]
  i2028.mipmapCount = i2029[3]
  i2028.anisoLevel = i2029[4]
  i2028.filterMode = i2029[5]
  i2028.hdr = !!i2029[6]
  i2028.format = i2029[7]
  i2028.wrapMode = i2029[8]
  i2028.alphaIsTransparency = !!i2029[9]
  i2028.alphaSource = i2029[10]
  i2028.graphicsFormat = i2029[11]
  i2028.sRGBTexture = !!i2029[12]
  i2028.desiredColorSpace = i2029[13]
  i2028.wrapU = i2029[14]
  i2028.wrapV = i2029[15]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2031 = data
  i2030.position = new pc.Vec3( i2031[0], i2031[1], i2031[2] )
  i2030.scale = new pc.Vec3( i2031[3], i2031[4], i2031[5] )
  i2030.rotation = new pc.Quat(i2031[6], i2031[7], i2031[8], i2031[9])
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'animatorController')
  request.r(i2033[2], i2033[3], 0, i2032, 'avatar')
  i2032.updateMode = i2033[4]
  i2032.hasTransformHierarchy = !!i2033[5]
  i2032.applyRootMotion = !!i2033[6]
  var i2035 = i2033[7]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2032.humanBones = i2034
  i2032.enabled = !!i2033[8]
  return i2032
}

Deserializers["FailMaker"] = function (request, data, root) {
  var i2038 = root || request.c( 'FailMaker' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'tf')
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2041 = data
  i2040.color = new pc.Color(i2041[0], i2041[1], i2041[2], i2041[3])
  request.r(i2041[4], i2041[5], 0, i2040, 'sprite')
  i2040.flipX = !!i2041[6]
  i2040.flipY = !!i2041[7]
  i2040.drawMode = i2041[8]
  i2040.size = new pc.Vec2( i2041[9], i2041[10] )
  i2040.tileMode = i2041[11]
  i2040.adaptiveModeThreshold = i2041[12]
  i2040.maskInteraction = i2041[13]
  i2040.spriteSortPoint = i2041[14]
  i2040.enabled = !!i2041[15]
  request.r(i2041[16], i2041[17], 0, i2040, 'sharedMaterial')
  var i2043 = i2041[18]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 2, i2042, '')
  }
  i2040.sharedMaterials = i2042
  i2040.receiveShadows = !!i2041[19]
  i2040.shadowCastingMode = i2041[20]
  i2040.sortingLayerID = i2041[21]
  i2040.sortingOrder = i2041[22]
  i2040.lightmapIndex = i2041[23]
  i2040.lightmapSceneIndex = i2041[24]
  i2040.lightmapScaleOffset = new pc.Vec4( i2041[25], i2041[26], i2041[27], i2041[28] )
  i2040.lightProbeUsage = i2041[29]
  i2040.reflectionProbeUsage = i2041[30]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2047 = data
  i2046.name = i2047[0]
  i2046.tagId = i2047[1]
  i2046.enabled = !!i2047[2]
  i2046.isStatic = !!i2047[3]
  i2046.layer = i2047[4]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2049 = data
  i2048.name = i2049[0]
  i2048.halfPrecision = !!i2049[1]
  i2048.useSimplification = !!i2049[2]
  i2048.useUInt32IndexFormat = !!i2049[3]
  i2048.vertexCount = i2049[4]
  i2048.aabb = i2049[5]
  var i2051 = i2049[6]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( !!i2051[i + 0] );
  }
  i2048.streams = i2050
  i2048.vertices = i2049[7]
  var i2053 = i2049[8]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2053[i + 0]) );
  }
  i2048.subMeshes = i2052
  var i2055 = i2049[9]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 16) {
    i2054.push( new pc.Mat4().setData(i2055[i + 0], i2055[i + 1], i2055[i + 2], i2055[i + 3],  i2055[i + 4], i2055[i + 5], i2055[i + 6], i2055[i + 7],  i2055[i + 8], i2055[i + 9], i2055[i + 10], i2055[i + 11],  i2055[i + 12], i2055[i + 13], i2055[i + 14], i2055[i + 15]) );
  }
  i2048.bindposes = i2054
  var i2057 = i2049[10]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2057[i + 0]) );
  }
  i2048.blendShapes = i2056
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2063 = data
  i2062.triangles = i2063[0]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2069 = data
  i2068.name = i2069[0]
  var i2071 = i2069[1]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2071[i + 0]) );
  }
  i2068.frames = i2070
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.index = i2073[1]
  i2072.startup = !!i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2075 = data
  i2074.aspect = i2075[0]
  i2074.orthographic = !!i2075[1]
  i2074.orthographicSize = i2075[2]
  i2074.backgroundColor = new pc.Color(i2075[3], i2075[4], i2075[5], i2075[6])
  i2074.nearClipPlane = i2075[7]
  i2074.farClipPlane = i2075[8]
  i2074.fieldOfView = i2075[9]
  i2074.depth = i2075[10]
  i2074.clearFlags = i2075[11]
  i2074.cullingMask = i2075[12]
  i2074.rect = i2075[13]
  request.r(i2075[14], i2075[15], 0, i2074, 'targetTexture')
  i2074.usePhysicalProperties = !!i2075[16]
  i2074.focalLength = i2075[17]
  i2074.sensorSize = new pc.Vec2( i2075[18], i2075[19] )
  i2074.lensShift = new pc.Vec2( i2075[20], i2075[21] )
  i2074.gateFit = i2075[22]
  i2074.commandBufferCount = i2075[23]
  i2074.cameraType = i2075[24]
  i2074.enabled = !!i2075[25]
  return i2074
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i2077 = data
  i2076.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i2077[0] )
  i2076.m_MaxRayIntersections = i2077[1]
  return i2076
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2078 = root || request.c( 'AutoCameraFit' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'canvasBtn')
  request.r(i2079[2], i2079[3], 0, i2078, 'targetArea')
  i2078.paddingLandscape = i2079[4]
  i2078.paddingPortrait = i2079[5]
  i2078.extraPaddingSmallScreen = i2079[6]
  i2078.smallScreenThreshold = i2079[7]
  i2078.autoUpdateOnResize = !!i2079[8]
  i2078.adjustInEditMode = !!i2079[9]
  return i2078
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'm_FirstSelected')
  i2080.m_sendNavigationEvents = !!i2081[2]
  i2080.m_DragThreshold = i2081[3]
  return i2080
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2083 = data
  i2082.m_HorizontalAxis = i2083[0]
  i2082.m_VerticalAxis = i2083[1]
  i2082.m_SubmitButton = i2083[2]
  i2082.m_CancelButton = i2083[3]
  i2082.m_InputActionsPerSecond = i2083[4]
  i2082.m_RepeatDelay = i2083[5]
  i2082.m_ForceModuleActive = !!i2083[6]
  i2082.m_SendPointerHoverToParent = !!i2083[7]
  return i2082
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2084 = root || request.c( 'Ply_Pool' )
  var i2085 = data
  var i2087 = i2085[0]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Ply_Pool+PoolAmount', i2087[i + 0]) );
  }
  i2084.poolAmounts = i2086
  return i2084
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2090 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2091 = data
  i2090.type = i2091[0]
  i2090.amount = i2091[1]
  request.r(i2091[2], i2091[3], 0, i2090, 'gameUnit')
  return i2090
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2092 = root || request.c( 'Ply_SoundManager' )
  var i2093 = data
  i2092.audioClips = request.d('FxAudio', i2093[0], i2092.audioClips)
  request.r(i2093[1], i2093[2], 0, i2092, 'sound')
  return i2092
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2094 = root || request.c( 'FxAudio' )
  var i2095 = data
  i2094.correctMaker = request.d('SoundData', i2095[0], i2094.correctMaker)
  i2094.wrongMaker = request.d('SoundData', i2095[1], i2094.wrongMaker)
  return i2094
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2096 = root || request.c( 'SoundData' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'clip')
  i2096.repeatCount = i2097[2]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'clip')
  request.r(i2099[2], i2099[3], 0, i2098, 'outputAudioMixerGroup')
  i2098.playOnAwake = !!i2099[4]
  i2098.loop = !!i2099[5]
  i2098.time = i2099[6]
  i2098.volume = i2099[7]
  i2098.pitch = i2099[8]
  i2098.enabled = !!i2099[9]
  return i2098
}

Deserializers["gameManager"] = function (request, data, root) {
  var i2100 = root || request.c( 'gameManager' )
  var i2101 = data
  return i2100
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i2102 = root || request.c( 'ItemManager' )
  var i2103 = data
  var i2105 = i2103[0]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 2, i2104, '')
  }
  i2102.allSpots = i2104
  request.r(i2103[1], i2103[2], 0, i2102, 'progressText')
  i2102.totalSpots = i2103[3]
  i2102.spotsToTriggerStore = i2103[4]
  return i2102
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2108 = root || request.c( 'InputManager' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'mainCamera')
  request.r(i2109[2], i2109[3], 0, i2108, 'itemManager')
  i2108.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2109[4] )
  i2108.backgroundLayer = UnityEngine.LayerMask.FromIntegerValue( i2109[5] )
  i2108.failMarkerZOffset = i2109[6]
  return i2108
}

Deserializers["handHintManager"] = function (request, data, root) {
  var i2110 = root || request.c( 'handHintManager' )
  var i2111 = data
  i2110.timeToHint = i2111[0]
  request.r(i2111[1], i2111[2], 0, i2110, 'handHintObj')
  request.r(i2111[3], i2111[4], 0, i2110, 'itemManager')
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2113 = data
  i2112.pivot = new pc.Vec2( i2113[0], i2113[1] )
  i2112.anchorMin = new pc.Vec2( i2113[2], i2113[3] )
  i2112.anchorMax = new pc.Vec2( i2113[4], i2113[5] )
  i2112.sizeDelta = new pc.Vec2( i2113[6], i2113[7] )
  i2112.anchoredPosition3D = new pc.Vec3( i2113[8], i2113[9], i2113[10] )
  i2112.rotation = new pc.Quat(i2113[11], i2113[12], i2113[13], i2113[14])
  i2112.scale = new pc.Vec3( i2113[15], i2113[16], i2113[17] )
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'additionalVertexStreams')
  i2114.enabled = !!i2115[2]
  request.r(i2115[3], i2115[4], 0, i2114, 'sharedMaterial')
  var i2117 = i2115[5]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2114.sharedMaterials = i2116
  i2114.receiveShadows = !!i2115[6]
  i2114.shadowCastingMode = i2115[7]
  i2114.sortingLayerID = i2115[8]
  i2114.sortingOrder = i2115[9]
  i2114.lightmapIndex = i2115[10]
  i2114.lightmapSceneIndex = i2115[11]
  i2114.lightmapScaleOffset = new pc.Vec4( i2115[12], i2115[13], i2115[14], i2115[15] )
  i2114.lightProbeUsage = i2115[16]
  i2114.reflectionProbeUsage = i2115[17]
  return i2114
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2118 = root || request.c( 'TMPro.TextMeshPro' )
  var i2119 = data
  i2118._SortingLayer = i2119[0]
  i2118._SortingLayerID = i2119[1]
  i2118._SortingOrder = i2119[2]
  i2118.m_hasFontAssetChanged = !!i2119[3]
  request.r(i2119[4], i2119[5], 0, i2118, 'm_renderer')
  i2118.m_maskType = i2119[6]
  i2118.m_text = i2119[7]
  i2118.m_isRightToLeft = !!i2119[8]
  request.r(i2119[9], i2119[10], 0, i2118, 'm_fontAsset')
  request.r(i2119[11], i2119[12], 0, i2118, 'm_sharedMaterial')
  var i2121 = i2119[13]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 2, i2120, '')
  }
  i2118.m_fontSharedMaterials = i2120
  request.r(i2119[14], i2119[15], 0, i2118, 'm_fontMaterial')
  var i2123 = i2119[16]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2118.m_fontMaterials = i2122
  i2118.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2119[17], i2119[18], i2119[19], i2119[20])
  i2118.m_fontColor = new pc.Color(i2119[21], i2119[22], i2119[23], i2119[24])
  i2118.m_enableVertexGradient = !!i2119[25]
  i2118.m_colorMode = i2119[26]
  i2118.m_fontColorGradient = request.d('TMPro.VertexGradient', i2119[27], i2118.m_fontColorGradient)
  request.r(i2119[28], i2119[29], 0, i2118, 'm_fontColorGradientPreset')
  request.r(i2119[30], i2119[31], 0, i2118, 'm_spriteAsset')
  i2118.m_tintAllSprites = !!i2119[32]
  request.r(i2119[33], i2119[34], 0, i2118, 'm_StyleSheet')
  i2118.m_TextStyleHashCode = i2119[35]
  i2118.m_overrideHtmlColors = !!i2119[36]
  i2118.m_faceColor = UnityEngine.Color32.ConstructColor(i2119[37], i2119[38], i2119[39], i2119[40])
  i2118.m_fontSize = i2119[41]
  i2118.m_fontSizeBase = i2119[42]
  i2118.m_fontWeight = i2119[43]
  i2118.m_enableAutoSizing = !!i2119[44]
  i2118.m_fontSizeMin = i2119[45]
  i2118.m_fontSizeMax = i2119[46]
  i2118.m_fontStyle = i2119[47]
  i2118.m_HorizontalAlignment = i2119[48]
  i2118.m_VerticalAlignment = i2119[49]
  i2118.m_textAlignment = i2119[50]
  i2118.m_characterSpacing = i2119[51]
  i2118.m_wordSpacing = i2119[52]
  i2118.m_lineSpacing = i2119[53]
  i2118.m_lineSpacingMax = i2119[54]
  i2118.m_paragraphSpacing = i2119[55]
  i2118.m_charWidthMaxAdj = i2119[56]
  i2118.m_TextWrappingMode = i2119[57]
  i2118.m_wordWrappingRatios = i2119[58]
  i2118.m_overflowMode = i2119[59]
  request.r(i2119[60], i2119[61], 0, i2118, 'm_linkedTextComponent')
  request.r(i2119[62], i2119[63], 0, i2118, 'parentLinkedComponent')
  i2118.m_enableKerning = !!i2119[64]
  var i2125 = i2119[65]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(i2125[i + 0]);
  }
  i2118.m_ActiveFontFeatures = i2124
  i2118.m_enableExtraPadding = !!i2119[66]
  i2118.checkPaddingRequired = !!i2119[67]
  i2118.m_isRichText = !!i2119[68]
  i2118.m_parseCtrlCharacters = !!i2119[69]
  i2118.m_isOrthographic = !!i2119[70]
  i2118.m_isCullingEnabled = !!i2119[71]
  i2118.m_horizontalMapping = i2119[72]
  i2118.m_verticalMapping = i2119[73]
  i2118.m_uvLineOffset = i2119[74]
  i2118.m_geometrySortingOrder = i2119[75]
  i2118.m_IsTextObjectScaleStatic = !!i2119[76]
  i2118.m_VertexBufferAutoSizeReduction = !!i2119[77]
  i2118.m_useMaxVisibleDescender = !!i2119[78]
  i2118.m_pageToDisplay = i2119[79]
  i2118.m_margin = new pc.Vec4( i2119[80], i2119[81], i2119[82], i2119[83] )
  i2118.m_isUsingLegacyAnimationComponent = !!i2119[84]
  i2118.m_isVolumetricText = !!i2119[85]
  request.r(i2119[86], i2119[87], 0, i2118, 'm_Material')
  i2118.m_EmojiFallbackSupport = !!i2119[88]
  i2118.m_Maskable = !!i2119[89]
  i2118.m_Color = new pc.Color(i2119[90], i2119[91], i2119[92], i2119[93])
  i2118.m_RaycastTarget = !!i2119[94]
  i2118.m_RaycastPadding = new pc.Vec4( i2119[95], i2119[96], i2119[97], i2119[98] )
  return i2118
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2126 = root || request.c( 'TMPro.VertexGradient' )
  var i2127 = data
  i2126.topLeft = new pc.Color(i2127[0], i2127[1], i2127[2], i2127[3])
  i2126.topRight = new pc.Color(i2127[4], i2127[5], i2127[6], i2127[7])
  i2126.bottomLeft = new pc.Color(i2127[8], i2127[9], i2127[10], i2127[11])
  i2126.bottomRight = new pc.Color(i2127[12], i2127[13], i2127[14], i2127[15])
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'sharedMesh')
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2133 = data
  i2132.center = new pc.Vec3( i2133[0], i2133[1], i2133[2] )
  i2132.size = new pc.Vec3( i2133[3], i2133[4], i2133[5] )
  i2132.enabled = !!i2133[6]
  i2132.isTrigger = !!i2133[7]
  request.r(i2133[8], i2133[9], 0, i2132, 'material')
  return i2132
}

Deserializers["ItemController"] = function (request, data, root) {
  var i2134 = root || request.c( 'ItemController' )
  var i2135 = data
  i2134.spotID = i2135[0]
  request.r(i2135[1], i2135[2], 0, i2134, 'successMarker')
  return i2134
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2136 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2137 = data
  i2136.loop = !!i2137[0]
  i2136.timeScale = i2137[1]
  request.r(i2137[2], i2137[3], 0, i2136, 'skeletonDataAsset')
  i2136.initialSkinName = i2137[4]
  i2136.fixPrefabOverrideViaMeshFilter = i2137[5]
  i2136.initialFlipX = !!i2137[6]
  i2136.initialFlipY = !!i2137[7]
  i2136.updateWhenInvisible = i2137[8]
  i2136.zSpacing = i2137[9]
  i2136.useClipping = !!i2137[10]
  i2136.immutableTriangles = !!i2137[11]
  i2136.pmaVertexColors = !!i2137[12]
  i2136.clearStateOnDisable = !!i2137[13]
  i2136.tintBlack = !!i2137[14]
  i2136.singleSubmesh = !!i2137[15]
  i2136.fixDrawOrder = !!i2137[16]
  i2136.addNormals = !!i2137[17]
  i2136.calculateTangents = !!i2137[18]
  i2136.maskInteraction = i2137[19]
  i2136.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2137[20], i2136.maskMaterials)
  i2136.disableRenderingOnOverride = !!i2137[21]
  i2136._animationName = i2137[22]
  var i2139 = i2137[23]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( i2139[i + 0] );
  }
  i2136.separatorSlotNames = i2138
  return i2136
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2140 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2141 = data
  var i2143 = i2141[0]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 2, i2142, '')
  }
  i2140.materialsMaskDisabled = i2142
  var i2145 = i2141[1]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2140.materialsInsideMask = i2144
  var i2147 = i2141[2]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2140.materialsOutsideMask = i2146
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2151 = data
  i2150.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2151[0], i2150.main)
  i2150.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2151[1], i2150.colorBySpeed)
  i2150.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2151[2], i2150.colorOverLifetime)
  i2150.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2151[3], i2150.emission)
  i2150.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2151[4], i2150.rotationBySpeed)
  i2150.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2151[5], i2150.rotationOverLifetime)
  i2150.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2151[6], i2150.shape)
  i2150.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2151[7], i2150.sizeBySpeed)
  i2150.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2151[8], i2150.sizeOverLifetime)
  i2150.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2151[9], i2150.textureSheetAnimation)
  i2150.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2151[10], i2150.velocityOverLifetime)
  i2150.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2151[11], i2150.noise)
  i2150.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2151[12], i2150.inheritVelocity)
  i2150.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2151[13], i2150.forceOverLifetime)
  i2150.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2151[14], i2150.limitVelocityOverLifetime)
  i2150.useAutoRandomSeed = !!i2151[15]
  i2150.randomSeed = i2151[16]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2152 = root || new pc.ParticleSystemMain()
  var i2153 = data
  i2152.duration = i2153[0]
  i2152.loop = !!i2153[1]
  i2152.prewarm = !!i2153[2]
  i2152.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[3], i2152.startDelay)
  i2152.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[4], i2152.startLifetime)
  i2152.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[5], i2152.startSpeed)
  i2152.startSize3D = !!i2153[6]
  i2152.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[7], i2152.startSizeX)
  i2152.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[8], i2152.startSizeY)
  i2152.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[9], i2152.startSizeZ)
  i2152.startRotation3D = !!i2153[10]
  i2152.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[11], i2152.startRotationX)
  i2152.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[12], i2152.startRotationY)
  i2152.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[13], i2152.startRotationZ)
  i2152.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2153[14], i2152.startColor)
  i2152.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[15], i2152.gravityModifier)
  i2152.simulationSpace = i2153[16]
  request.r(i2153[17], i2153[18], 0, i2152, 'customSimulationSpace')
  i2152.simulationSpeed = i2153[19]
  i2152.useUnscaledTime = !!i2153[20]
  i2152.scalingMode = i2153[21]
  i2152.playOnAwake = !!i2153[22]
  i2152.maxParticles = i2153[23]
  i2152.emitterVelocityMode = i2153[24]
  i2152.stopAction = i2153[25]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2154 = root || new pc.MinMaxCurve()
  var i2155 = data
  i2154.mode = i2155[0]
  i2154.curveMin = new pc.AnimationCurve( { keys_flow: i2155[1] } )
  i2154.curveMax = new pc.AnimationCurve( { keys_flow: i2155[2] } )
  i2154.curveMultiplier = i2155[3]
  i2154.constantMin = i2155[4]
  i2154.constantMax = i2155[5]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2156 = root || new pc.MinMaxGradient()
  var i2157 = data
  i2156.mode = i2157[0]
  i2156.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2157[1], i2156.gradientMin)
  i2156.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2157[2], i2156.gradientMax)
  i2156.colorMin = new pc.Color(i2157[3], i2157[4], i2157[5], i2157[6])
  i2156.colorMax = new pc.Color(i2157[7], i2157[8], i2157[9], i2157[10])
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2159 = data
  i2158.mode = i2159[0]
  var i2161 = i2159[1]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2161[i + 0]) );
  }
  i2158.colorKeys = i2160
  var i2163 = i2159[2]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2163[i + 0]) );
  }
  i2158.alphaKeys = i2162
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2164 = root || new pc.ParticleSystemColorBySpeed()
  var i2165 = data
  i2164.enabled = !!i2165[0]
  i2164.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2165[1], i2164.color)
  i2164.range = new pc.Vec2( i2165[2], i2165[3] )
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2169 = data
  i2168.color = new pc.Color(i2169[0], i2169[1], i2169[2], i2169[3])
  i2168.time = i2169[4]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2173 = data
  i2172.alpha = i2173[0]
  i2172.time = i2173[1]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2174 = root || new pc.ParticleSystemColorOverLifetime()
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2175[1], i2174.color)
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemEmitter()
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[1], i2176.rateOverTime)
  i2176.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[2], i2176.rateOverDistance)
  var i2179 = i2177[3]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2179[i + 0]) );
  }
  i2176.bursts = i2178
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemBurst()
  var i2183 = data
  i2182.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[0], i2182.count)
  i2182.cycleCount = i2183[1]
  i2182.minCount = i2183[2]
  i2182.maxCount = i2183[3]
  i2182.repeatInterval = i2183[4]
  i2182.time = i2183[5]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemRotationBySpeed()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[1], i2184.x)
  i2184.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[2], i2184.y)
  i2184.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[3], i2184.z)
  i2184.separateAxes = !!i2185[4]
  i2184.range = new pc.Vec2( i2185[5], i2185[6] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[1], i2186.x)
  i2186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.y)
  i2186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.z)
  i2186.separateAxes = !!i2187[4]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemShape()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.shapeType = i2189[1]
  i2188.randomDirectionAmount = i2189[2]
  i2188.sphericalDirectionAmount = i2189[3]
  i2188.randomPositionAmount = i2189[4]
  i2188.alignToDirection = !!i2189[5]
  i2188.radius = i2189[6]
  i2188.radiusMode = i2189[7]
  i2188.radiusSpread = i2189[8]
  i2188.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[9], i2188.radiusSpeed)
  i2188.radiusThickness = i2189[10]
  i2188.angle = i2189[11]
  i2188.length = i2189[12]
  i2188.boxThickness = new pc.Vec3( i2189[13], i2189[14], i2189[15] )
  i2188.meshShapeType = i2189[16]
  request.r(i2189[17], i2189[18], 0, i2188, 'mesh')
  request.r(i2189[19], i2189[20], 0, i2188, 'meshRenderer')
  request.r(i2189[21], i2189[22], 0, i2188, 'skinnedMeshRenderer')
  i2188.useMeshMaterialIndex = !!i2189[23]
  i2188.meshMaterialIndex = i2189[24]
  i2188.useMeshColors = !!i2189[25]
  i2188.normalOffset = i2189[26]
  i2188.arc = i2189[27]
  i2188.arcMode = i2189[28]
  i2188.arcSpread = i2189[29]
  i2188.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[30], i2188.arcSpeed)
  i2188.donutRadius = i2189[31]
  i2188.position = new pc.Vec3( i2189[32], i2189[33], i2189[34] )
  i2188.rotation = new pc.Vec3( i2189[35], i2189[36], i2189[37] )
  i2188.scale = new pc.Vec3( i2189[38], i2189[39], i2189[40] )
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemSizeBySpeed()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[1], i2190.x)
  i2190.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[2], i2190.y)
  i2190.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[3], i2190.z)
  i2190.separateAxes = !!i2191[4]
  i2190.range = new pc.Vec2( i2191[5], i2191[6] )
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[1], i2192.x)
  i2192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[2], i2192.y)
  i2192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[3], i2192.z)
  i2192.separateAxes = !!i2193[4]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.mode = i2195[1]
  i2194.animation = i2195[2]
  i2194.numTilesX = i2195[3]
  i2194.numTilesY = i2195[4]
  i2194.useRandomRow = !!i2195[5]
  i2194.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[6], i2194.frameOverTime)
  i2194.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[7], i2194.startFrame)
  i2194.cycleCount = i2195[8]
  i2194.rowIndex = i2195[9]
  i2194.flipU = i2195[10]
  i2194.flipV = i2195[11]
  i2194.spriteCount = i2195[12]
  var i2197 = i2195[13]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2194.sprites = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[1], i2200.x)
  i2200.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.y)
  i2200.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[3], i2200.z)
  i2200.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[4], i2200.radial)
  i2200.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[5], i2200.speedModifier)
  i2200.space = i2201[6]
  i2200.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[7], i2200.orbitalX)
  i2200.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[8], i2200.orbitalY)
  i2200.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[9], i2200.orbitalZ)
  i2200.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[10], i2200.orbitalOffsetX)
  i2200.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[11], i2200.orbitalOffsetY)
  i2200.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[12], i2200.orbitalOffsetZ)
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemNoise()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.separateAxes = !!i2203[1]
  i2202.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.strengthX)
  i2202.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.strengthY)
  i2202.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[4], i2202.strengthZ)
  i2202.frequency = i2203[5]
  i2202.damping = !!i2203[6]
  i2202.octaveCount = i2203[7]
  i2202.octaveMultiplier = i2203[8]
  i2202.octaveScale = i2203[9]
  i2202.quality = i2203[10]
  i2202.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[11], i2202.scrollSpeed)
  i2202.scrollSpeedMultiplier = i2203[12]
  i2202.remapEnabled = !!i2203[13]
  i2202.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[14], i2202.remapX)
  i2202.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[15], i2202.remapY)
  i2202.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[16], i2202.remapZ)
  i2202.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[17], i2202.positionAmount)
  i2202.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[18], i2202.rotationAmount)
  i2202.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[19], i2202.sizeAmount)
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemInheritVelocity()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.mode = i2205[1]
  i2204.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.curve)
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemForceOverLifetime()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[1], i2206.x)
  i2206.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[2], i2206.y)
  i2206.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[3], i2206.z)
  i2206.space = i2207[4]
  i2206.randomized = !!i2207[5]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[1], i2208.limit)
  i2208.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.limitX)
  i2208.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.limitY)
  i2208.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[4], i2208.limitZ)
  i2208.dampen = i2209[5]
  i2208.separateAxes = !!i2209[6]
  i2208.space = i2209[7]
  i2208.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[8], i2208.drag)
  i2208.multiplyDragByParticleSize = !!i2209[9]
  i2208.multiplyDragByParticleVelocity = !!i2209[10]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'mesh')
  i2210.meshCount = i2211[2]
  i2210.activeVertexStreamsCount = i2211[3]
  i2210.alignment = i2211[4]
  i2210.renderMode = i2211[5]
  i2210.sortMode = i2211[6]
  i2210.lengthScale = i2211[7]
  i2210.velocityScale = i2211[8]
  i2210.cameraVelocityScale = i2211[9]
  i2210.normalDirection = i2211[10]
  i2210.sortingFudge = i2211[11]
  i2210.minParticleSize = i2211[12]
  i2210.maxParticleSize = i2211[13]
  i2210.pivot = new pc.Vec3( i2211[14], i2211[15], i2211[16] )
  request.r(i2211[17], i2211[18], 0, i2210, 'trailMaterial')
  i2210.applyActiveColorSpace = !!i2211[19]
  i2210.enabled = !!i2211[20]
  request.r(i2211[21], i2211[22], 0, i2210, 'sharedMaterial')
  var i2213 = i2211[23]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2210.sharedMaterials = i2212
  i2210.receiveShadows = !!i2211[24]
  i2210.shadowCastingMode = i2211[25]
  i2210.sortingLayerID = i2211[26]
  i2210.sortingOrder = i2211[27]
  i2210.lightmapIndex = i2211[28]
  i2210.lightmapSceneIndex = i2211[29]
  i2210.lightmapScaleOffset = new pc.Vec4( i2211[30], i2211[31], i2211[32], i2211[33] )
  i2210.lightProbeUsage = i2211[34]
  i2210.reflectionProbeUsage = i2211[35]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2215 = data
  i2214.ambientIntensity = i2215[0]
  i2214.reflectionIntensity = i2215[1]
  i2214.ambientMode = i2215[2]
  i2214.ambientLight = new pc.Color(i2215[3], i2215[4], i2215[5], i2215[6])
  i2214.ambientSkyColor = new pc.Color(i2215[7], i2215[8], i2215[9], i2215[10])
  i2214.ambientGroundColor = new pc.Color(i2215[11], i2215[12], i2215[13], i2215[14])
  i2214.ambientEquatorColor = new pc.Color(i2215[15], i2215[16], i2215[17], i2215[18])
  i2214.fogColor = new pc.Color(i2215[19], i2215[20], i2215[21], i2215[22])
  i2214.fogEndDistance = i2215[23]
  i2214.fogStartDistance = i2215[24]
  i2214.fogDensity = i2215[25]
  i2214.fog = !!i2215[26]
  request.r(i2215[27], i2215[28], 0, i2214, 'skybox')
  i2214.fogMode = i2215[29]
  var i2217 = i2215[30]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2217[i + 0]) );
  }
  i2214.lightmaps = i2216
  i2214.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2215[31], i2214.lightProbes)
  i2214.lightmapsMode = i2215[32]
  i2214.mixedBakeMode = i2215[33]
  i2214.environmentLightingMode = i2215[34]
  i2214.ambientProbe = new pc.SphericalHarmonicsL2(i2215[35])
  i2214.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2215[36])
  i2214.useReferenceAmbientProbe = !!i2215[37]
  request.r(i2215[38], i2215[39], 0, i2214, 'customReflection')
  request.r(i2215[40], i2215[41], 0, i2214, 'defaultReflection')
  i2214.defaultReflectionMode = i2215[42]
  i2214.defaultReflectionResolution = i2215[43]
  i2214.sunLightObjectId = i2215[44]
  i2214.pixelLightCount = i2215[45]
  i2214.defaultReflectionHDR = !!i2215[46]
  i2214.hasLightDataAsset = !!i2215[47]
  i2214.hasManualGenerate = !!i2215[48]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'lightmapColor')
  request.r(i2221[2], i2221[3], 0, i2220, 'lightmapDirection')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2222 = root || new UnityEngine.LightProbes()
  var i2223 = data
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2231 = data
  var i2233 = i2231[0]
  var i2232 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2233[i + 0]));
  }
  i2230.ShaderCompilationErrors = i2232
  i2230.name = i2231[1]
  i2230.guid = i2231[2]
  var i2235 = i2231[3]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( i2235[i + 0] );
  }
  i2230.shaderDefinedKeywords = i2234
  var i2237 = i2231[4]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2237[i + 0]) );
  }
  i2230.passes = i2236
  var i2239 = i2231[5]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2239[i + 0]) );
  }
  i2230.usePasses = i2238
  var i2241 = i2231[6]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2241[i + 0]) );
  }
  i2230.defaultParameterValues = i2240
  request.r(i2231[7], i2231[8], 0, i2230, 'unityFallbackShader')
  i2230.readDepth = !!i2231[9]
  i2230.hasDepthOnlyPass = !!i2231[10]
  i2230.isCreatedByShaderGraph = !!i2231[11]
  i2230.disableBatching = !!i2231[12]
  i2230.compiled = !!i2231[13]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2245 = data
  i2244.shaderName = i2245[0]
  i2244.errorMessage = i2245[1]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2248 = root || new pc.UnityShaderPass()
  var i2249 = data
  i2248.id = i2249[0]
  i2248.subShaderIndex = i2249[1]
  i2248.name = i2249[2]
  i2248.passType = i2249[3]
  i2248.grabPassTextureName = i2249[4]
  i2248.usePass = !!i2249[5]
  i2248.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[6], i2248.zTest)
  i2248.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[7], i2248.zWrite)
  i2248.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[8], i2248.culling)
  i2248.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2249[9], i2248.blending)
  i2248.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2249[10], i2248.alphaBlending)
  i2248.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[11], i2248.colorWriteMask)
  i2248.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[12], i2248.offsetUnits)
  i2248.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[13], i2248.offsetFactor)
  i2248.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[14], i2248.stencilRef)
  i2248.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[15], i2248.stencilReadMask)
  i2248.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2249[16], i2248.stencilWriteMask)
  i2248.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2249[17], i2248.stencilOp)
  i2248.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2249[18], i2248.stencilOpFront)
  i2248.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2249[19], i2248.stencilOpBack)
  var i2251 = i2249[20]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2251[i + 0]) );
  }
  i2248.tags = i2250
  var i2253 = i2249[21]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( i2253[i + 0] );
  }
  i2248.passDefinedKeywords = i2252
  var i2255 = i2249[22]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2255[i + 0]) );
  }
  i2248.passDefinedKeywordGroups = i2254
  var i2257 = i2249[23]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2257[i + 0]) );
  }
  i2248.variants = i2256
  var i2259 = i2249[24]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2259[i + 0]) );
  }
  i2248.excludedVariants = i2258
  i2248.hasDepthReader = !!i2249[25]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2261 = data
  i2260.val = i2261[0]
  i2260.name = i2261[1]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2263 = data
  i2262.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[0], i2262.src)
  i2262.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[1], i2262.dst)
  i2262.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[2], i2262.op)
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2265 = data
  i2264.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2265[0], i2264.pass)
  i2264.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2265[1], i2264.fail)
  i2264.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2265[2], i2264.zFail)
  i2264.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2265[3], i2264.comp)
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.value = i2269[1]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2273 = data
  var i2275 = i2273[0]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( i2275[i + 0] );
  }
  i2272.keywords = i2274
  i2272.hasDiscard = !!i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2279 = data
  i2278.passId = i2279[0]
  i2278.subShaderIndex = i2279[1]
  var i2281 = i2279[2]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( i2281[i + 0] );
  }
  i2278.keywords = i2280
  i2278.vertexProgram = i2279[3]
  i2278.fragmentProgram = i2279[4]
  i2278.exportedForWebGl2 = !!i2279[5]
  i2278.readDepth = !!i2279[6]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'shader')
  i2284.pass = i2285[2]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.type = i2289[1]
  i2288.value = new pc.Vec4( i2289[2], i2289[3], i2289[4], i2289[5] )
  i2288.textureValue = i2289[6]
  i2288.shaderPropertyFlag = i2289[7]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2291 = data
  i2290.name = i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'texture')
  i2290.aabb = i2291[3]
  i2290.vertices = i2291[4]
  i2290.triangles = i2291[5]
  i2290.textureRect = UnityEngine.Rect.MinMaxRect(i2291[6], i2291[7], i2291[8], i2291[9])
  i2290.packedRect = UnityEngine.Rect.MinMaxRect(i2291[10], i2291[11], i2291[12], i2291[13])
  i2290.border = new pc.Vec4( i2291[14], i2291[15], i2291[16], i2291[17] )
  i2290.transparency = i2291[18]
  i2290.bounds = i2291[19]
  i2290.pixelsPerUnit = i2291[20]
  i2290.textureWidth = i2291[21]
  i2290.textureHeight = i2291[22]
  i2290.nativeSize = new pc.Vec2( i2291[23], i2291[24] )
  i2290.pivot = new pc.Vec2( i2291[25], i2291[26] )
  i2290.textureRectOffset = new pc.Vec2( i2291[27], i2291[28] )
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2293 = data
  i2292.name = i2293[0]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.wrapMode = i2295[1]
  i2294.isLooping = !!i2295[2]
  i2294.length = i2295[3]
  var i2297 = i2295[4]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2297[i + 0]) );
  }
  i2294.curves = i2296
  var i2299 = i2295[5]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2299[i + 0]) );
  }
  i2294.events = i2298
  i2294.halfPrecision = !!i2295[6]
  i2294._frameRate = i2295[7]
  i2294.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2295[8], i2294.localBounds)
  i2294.hasMuscleCurves = !!i2295[9]
  var i2301 = i2295[10]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( i2301[i + 0] );
  }
  i2294.clipMuscleConstant = i2300
  i2294.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2295[11], i2294.clipBindingConstant)
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2305 = data
  i2304.path = i2305[0]
  i2304.hash = i2305[1]
  i2304.componentType = i2305[2]
  i2304.property = i2305[3]
  i2304.keys = i2305[4]
  var i2307 = i2305[5]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2307[i + 0]) );
  }
  i2304.objectReferenceKeys = i2306
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2311 = data
  i2310.time = i2311[0]
  request.r(i2311[1], i2311[2], 0, i2310, 'value')
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2315 = data
  i2314.functionName = i2315[0]
  i2314.floatParameter = i2315[1]
  i2314.intParameter = i2315[2]
  i2314.stringParameter = i2315[3]
  request.r(i2315[4], i2315[5], 0, i2314, 'objectReferenceParameter')
  i2314.time = i2315[6]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2317 = data
  i2316.center = new pc.Vec3( i2317[0], i2317[1], i2317[2] )
  i2316.extends = new pc.Vec3( i2317[3], i2317[4], i2317[5] )
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( i2323[i + 0] );
  }
  i2320.genericBindings = i2322
  var i2325 = i2321[1]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( i2325[i + 0] );
  }
  i2320.pptrCurveMapping = i2324
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2327 = data
  i2326.name = i2327[0]
  i2326.ascent = i2327[1]
  i2326.originalLineHeight = i2327[2]
  i2326.fontSize = i2327[3]
  var i2329 = i2327[4]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2329[i + 0]) );
  }
  i2326.characterInfo = i2328
  request.r(i2327[5], i2327[6], 0, i2326, 'texture')
  i2326.originalFontSize = i2327[7]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2333 = data
  i2332.index = i2333[0]
  i2332.advance = i2333[1]
  i2332.bearing = i2333[2]
  i2332.glyphWidth = i2333[3]
  i2332.glyphHeight = i2333[4]
  i2332.minX = i2333[5]
  i2332.maxX = i2333[6]
  i2332.minY = i2333[7]
  i2332.maxY = i2333[8]
  i2332.uvBottomLeftX = i2333[9]
  i2332.uvBottomLeftY = i2333[10]
  i2332.uvBottomRightX = i2333[11]
  i2332.uvBottomRightY = i2333[12]
  i2332.uvTopLeftX = i2333[13]
  i2332.uvTopLeftY = i2333[14]
  i2332.uvTopRightX = i2333[15]
  i2332.uvTopRightY = i2333[16]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2335 = data
  i2334.name = i2335[0]
  var i2337 = i2335[1]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2337[i + 0]) );
  }
  i2334.layers = i2336
  var i2339 = i2335[2]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2339[i + 0]) );
  }
  i2334.parameters = i2338
  i2334.animationClips = i2335[3]
  i2334.avatarUnsupported = i2335[4]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2343 = data
  i2342.name = i2343[0]
  i2342.defaultWeight = i2343[1]
  i2342.blendingMode = i2343[2]
  i2342.avatarMask = i2343[3]
  i2342.syncedLayerIndex = i2343[4]
  i2342.syncedLayerAffectsTiming = !!i2343[5]
  i2342.syncedLayers = i2343[6]
  i2342.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2343[7], i2342.stateMachine)
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2345 = data
  i2344.id = i2345[0]
  i2344.name = i2345[1]
  i2344.path = i2345[2]
  var i2347 = i2345[3]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2347[i + 0]) );
  }
  i2344.states = i2346
  var i2349 = i2345[4]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2349[i + 0]) );
  }
  i2344.machines = i2348
  var i2351 = i2345[5]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2351[i + 0]) );
  }
  i2344.entryStateTransitions = i2350
  var i2353 = i2345[6]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2353[i + 0]) );
  }
  i2344.exitStateTransitions = i2352
  var i2355 = i2345[7]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2355[i + 0]) );
  }
  i2344.anyStateTransitions = i2354
  i2344.defaultStateId = i2345[8]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2359 = data
  i2358.id = i2359[0]
  i2358.name = i2359[1]
  i2358.cycleOffset = i2359[2]
  i2358.cycleOffsetParameter = i2359[3]
  i2358.cycleOffsetParameterActive = !!i2359[4]
  i2358.mirror = !!i2359[5]
  i2358.mirrorParameter = i2359[6]
  i2358.mirrorParameterActive = !!i2359[7]
  i2358.motionId = i2359[8]
  i2358.nameHash = i2359[9]
  i2358.fullPathHash = i2359[10]
  i2358.speed = i2359[11]
  i2358.speedParameter = i2359[12]
  i2358.speedParameterActive = !!i2359[13]
  i2358.tag = i2359[14]
  i2358.tagHash = i2359[15]
  i2358.writeDefaultValues = !!i2359[16]
  var i2361 = i2359[17]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.behaviours = i2360
  var i2363 = i2359[18]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2363[i + 0]) );
  }
  i2358.transitions = i2362
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2369 = data
  i2368.fullPath = i2369[0]
  i2368.canTransitionToSelf = !!i2369[1]
  i2368.duration = i2369[2]
  i2368.exitTime = i2369[3]
  i2368.hasExitTime = !!i2369[4]
  i2368.hasFixedDuration = !!i2369[5]
  i2368.interruptionSource = i2369[6]
  i2368.offset = i2369[7]
  i2368.orderedInterruption = !!i2369[8]
  i2368.destinationStateId = i2369[9]
  i2368.isExit = !!i2369[10]
  i2368.mute = !!i2369[11]
  i2368.solo = !!i2369[12]
  var i2371 = i2369[13]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2371[i + 0]) );
  }
  i2368.conditions = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2377 = data
  i2376.destinationStateId = i2377[0]
  i2376.isExit = !!i2377[1]
  i2376.mute = !!i2377[2]
  i2376.solo = !!i2377[3]
  var i2379 = i2377[4]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2379[i + 0]) );
  }
  i2376.conditions = i2378
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2383 = data
  i2382.defaultBool = !!i2383[0]
  i2382.defaultFloat = i2383[1]
  i2382.defaultInt = i2383[2]
  i2382.name = i2383[3]
  i2382.nameHash = i2383[4]
  i2382.type = i2383[5]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2387 = data
  i2386.mode = i2387[0]
  i2386.parameter = i2387[1]
  i2386.threshold = i2387[2]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2389 = data
  i2388.name = i2389[0]
  i2388.bytes64 = i2389[1]
  i2388.data = i2389[2]
  return i2388
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2390 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2391 = data
  var i2393 = i2391[0]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.atlasAssets = i2392
  i2390.scale = i2391[1]
  request.r(i2391[2], i2391[3], 0, i2390, 'skeletonJSON')
  i2390.isUpgradingBlendModeMaterials = !!i2391[4]
  i2390.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2391[5], i2390.blendModeMaterials)
  var i2395 = i2391[6]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 1, i2394, '')
  }
  i2390.skeletonDataModifiers = i2394
  var i2397 = i2391[7]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( i2397[i + 0] );
  }
  i2390.fromAnimation = i2396
  var i2399 = i2391[8]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( i2399[i + 0] );
  }
  i2390.toAnimation = i2398
  i2390.duration = i2391[9]
  i2390.defaultMix = i2391[10]
  request.r(i2391[11], i2391[12], 0, i2390, 'controller')
  return i2390
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2402 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2403 = data
  i2402.applyAdditiveMaterial = !!i2403[0]
  var i2405 = i2403[1]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2405[i + 0]));
  }
  i2402.additiveMaterials = i2404
  var i2407 = i2403[2]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2407[i + 0]));
  }
  i2402.multiplyMaterials = i2406
  var i2409 = i2403[3]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2409[i + 0]));
  }
  i2402.screenMaterials = i2408
  i2402.requiresBlendModeMaterials = !!i2403[4]
  return i2402
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2412 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2413 = data
  i2412.pageName = i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'material')
  return i2412
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2416 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'atlasFile')
  var i2419 = i2417[2]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 2, i2418, '')
  }
  i2416.materials = i2418
  return i2416
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2420 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2421 = data
  i2420.normalStyle = i2421[0]
  i2420.normalSpacingOffset = i2421[1]
  i2420.boldStyle = i2421[2]
  i2420.boldSpacing = i2421[3]
  i2420.italicStyle = i2421[4]
  i2420.tabSize = i2421[5]
  request.r(i2421[6], i2421[7], 0, i2420, 'atlas')
  i2420.m_SourceFontFileGUID = i2421[8]
  i2420.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2421[9], i2420.m_CreationSettings)
  request.r(i2421[10], i2421[11], 0, i2420, 'm_SourceFontFile')
  i2420.m_SourceFontFilePath = i2421[12]
  i2420.m_AtlasPopulationMode = i2421[13]
  i2420.InternalDynamicOS = !!i2421[14]
  var i2423 = i2421[15]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('UnityEngine.TextCore.Glyph', i2423[i + 0]));
  }
  i2420.m_GlyphTable = i2422
  var i2425 = i2421[16]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('TMPro.TMP_Character', i2425[i + 0]));
  }
  i2420.m_CharacterTable = i2424
  var i2427 = i2421[17]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 2, i2426, '')
  }
  i2420.m_AtlasTextures = i2426
  i2420.m_AtlasTextureIndex = i2421[18]
  i2420.m_IsMultiAtlasTexturesEnabled = !!i2421[19]
  i2420.m_GetFontFeatures = !!i2421[20]
  i2420.m_ClearDynamicDataOnBuild = !!i2421[21]
  i2420.m_AtlasWidth = i2421[22]
  i2420.m_AtlasHeight = i2421[23]
  i2420.m_AtlasPadding = i2421[24]
  i2420.m_AtlasRenderMode = i2421[25]
  var i2429 = i2421[26]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.add(request.d('UnityEngine.TextCore.GlyphRect', i2429[i + 0]));
  }
  i2420.m_UsedGlyphRects = i2428
  var i2431 = i2421[27]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.add(request.d('UnityEngine.TextCore.GlyphRect', i2431[i + 0]));
  }
  i2420.m_FreeGlyphRects = i2430
  i2420.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2421[28], i2420.m_FontFeatureTable)
  i2420.m_ShouldReimportFontFeatures = !!i2421[29]
  var i2433 = i2421[30]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2433.length; i += 2) {
  request.r(i2433[i + 0], i2433[i + 1], 1, i2432, '')
  }
  i2420.m_FallbackFontAssetTable = i2432
  var i2435 = i2421[31]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('TMPro.TMP_FontWeightPair', i2435[i + 0]) );
  }
  i2420.m_FontWeightTable = i2434
  var i2437 = i2421[32]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('TMPro.TMP_FontWeightPair', i2437[i + 0]) );
  }
  i2420.fontWeights = i2436
  i2420.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2421[33], i2420.m_fontInfo)
  var i2439 = i2421[34]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.add(request.d('TMPro.TMP_Glyph', i2439[i + 0]));
  }
  i2420.m_glyphInfoList = i2438
  i2420.m_KerningTable = request.d('TMPro.KerningTable', i2421[35], i2420.m_KerningTable)
  var i2441 = i2421[36]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 1, i2440, '')
  }
  i2420.fallbackFontAssets = i2440
  i2420.m_Version = i2421[37]
  i2420.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2421[38], i2420.m_FaceInfo)
  request.r(i2421[39], i2421[40], 0, i2420, 'm_Material')
  return i2420
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2442 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2443 = data
  i2442.sourceFontFileName = i2443[0]
  i2442.sourceFontFileGUID = i2443[1]
  i2442.faceIndex = i2443[2]
  i2442.pointSizeSamplingMode = i2443[3]
  i2442.pointSize = i2443[4]
  i2442.padding = i2443[5]
  i2442.paddingMode = i2443[6]
  i2442.packingMode = i2443[7]
  i2442.atlasWidth = i2443[8]
  i2442.atlasHeight = i2443[9]
  i2442.characterSetSelectionMode = i2443[10]
  i2442.characterSequence = i2443[11]
  i2442.referencedFontAssetGUID = i2443[12]
  i2442.referencedTextAssetGUID = i2443[13]
  i2442.fontStyle = i2443[14]
  i2442.fontStyleModifier = i2443[15]
  i2442.renderMode = i2443[16]
  i2442.includeFontFeatures = !!i2443[17]
  return i2442
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2447 = data
  i2446.m_Index = i2447[0]
  i2446.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2447[1], i2446.m_Metrics)
  i2446.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2447[2], i2446.m_GlyphRect)
  i2446.m_Scale = i2447[3]
  i2446.m_AtlasIndex = i2447[4]
  i2446.m_ClassDefinitionType = i2447[5]
  return i2446
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2449 = data
  i2448.m_Width = i2449[0]
  i2448.m_Height = i2449[1]
  i2448.m_HorizontalBearingX = i2449[2]
  i2448.m_HorizontalBearingY = i2449[3]
  i2448.m_HorizontalAdvance = i2449[4]
  return i2448
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2451 = data
  i2450.m_X = i2451[0]
  i2450.m_Y = i2451[1]
  i2450.m_Width = i2451[2]
  i2450.m_Height = i2451[3]
  return i2450
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2454 = root || request.c( 'TMPro.TMP_Character' )
  var i2455 = data
  i2454.m_ElementType = i2455[0]
  i2454.m_Unicode = i2455[1]
  i2454.m_GlyphIndex = i2455[2]
  i2454.m_Scale = i2455[3]
  return i2454
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2460 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2461 = data
  var i2463 = i2461[0]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.add(request.d('TMPro.MultipleSubstitutionRecord', i2463[i + 0]));
  }
  i2460.m_MultipleSubstitutionRecords = i2462
  var i2465 = i2461[1]
  var i2464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.add(request.d('TMPro.LigatureSubstitutionRecord', i2465[i + 0]));
  }
  i2460.m_LigatureSubstitutionRecords = i2464
  var i2467 = i2461[2]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2467[i + 0]));
  }
  i2460.m_GlyphPairAdjustmentRecords = i2466
  var i2469 = i2461[3]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2469[i + 0]));
  }
  i2460.m_MarkToBaseAdjustmentRecords = i2468
  var i2471 = i2461[4]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2471[i + 0]));
  }
  i2460.m_MarkToMarkAdjustmentRecords = i2470
  return i2460
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2475 = data
  i2474.m_TargetGlyphID = i2475[0]
  i2474.m_SubstituteGlyphIDs = i2475[1]
  return i2474
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2478 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2479 = data
  i2478.m_ComponentGlyphIDs = i2479[0]
  i2478.m_LigatureGlyphID = i2479[1]
  return i2478
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2483 = data
  i2482.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2483[0], i2482.m_FirstAdjustmentRecord)
  i2482.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2483[1], i2482.m_SecondAdjustmentRecord)
  i2482.m_FeatureLookupFlags = i2483[2]
  return i2482
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2485 = data
  i2484.m_GlyphIndex = i2485[0]
  i2484.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2485[1], i2484.m_GlyphValueRecord)
  return i2484
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2487 = data
  i2486.m_XPlacement = i2487[0]
  i2486.m_YPlacement = i2487[1]
  i2486.m_XAdvance = i2487[2]
  i2486.m_YAdvance = i2487[3]
  return i2486
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2491 = data
  i2490.m_BaseGlyphID = i2491[0]
  i2490.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2491[1], i2490.m_BaseGlyphAnchorPoint)
  i2490.m_MarkGlyphID = i2491[2]
  i2490.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2491[3], i2490.m_MarkPositionAdjustment)
  return i2490
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2495 = data
  i2494.m_BaseMarkGlyphID = i2495[0]
  i2494.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2495[1], i2494.m_BaseMarkGlyphAnchorPoint)
  i2494.m_CombiningMarkGlyphID = i2495[2]
  i2494.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2495[3], i2494.m_CombiningMarkPositionAdjustment)
  return i2494
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2500 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'regularTypeface')
  request.r(i2501[2], i2501[3], 0, i2500, 'italicTypeface')
  return i2500
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2502 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2503 = data
  i2502.Name = i2503[0]
  i2502.PointSize = i2503[1]
  i2502.Scale = i2503[2]
  i2502.CharacterCount = i2503[3]
  i2502.LineHeight = i2503[4]
  i2502.Baseline = i2503[5]
  i2502.Ascender = i2503[6]
  i2502.CapHeight = i2503[7]
  i2502.Descender = i2503[8]
  i2502.CenterLine = i2503[9]
  i2502.SuperscriptOffset = i2503[10]
  i2502.SubscriptOffset = i2503[11]
  i2502.SubSize = i2503[12]
  i2502.Underline = i2503[13]
  i2502.UnderlineThickness = i2503[14]
  i2502.strikethrough = i2503[15]
  i2502.strikethroughThickness = i2503[16]
  i2502.TabWidth = i2503[17]
  i2502.Padding = i2503[18]
  i2502.AtlasWidth = i2503[19]
  i2502.AtlasHeight = i2503[20]
  return i2502
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2507 = data
  i2506.id = i2507[0]
  i2506.x = i2507[1]
  i2506.y = i2507[2]
  i2506.width = i2507[3]
  i2506.height = i2507[4]
  i2506.xOffset = i2507[5]
  i2506.yOffset = i2507[6]
  i2506.xAdvance = i2507[7]
  i2506.scale = i2507[8]
  return i2506
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2508 = root || request.c( 'TMPro.KerningTable' )
  var i2509 = data
  var i2511 = i2509[0]
  var i2510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.add(request.d('TMPro.KerningPair', i2511[i + 0]));
  }
  i2508.kerningPairs = i2510
  return i2508
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2514 = root || request.c( 'TMPro.KerningPair' )
  var i2515 = data
  i2514.xOffset = i2515[0]
  i2514.m_FirstGlyph = i2515[1]
  i2514.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2515[2], i2514.m_FirstGlyphAdjustments)
  i2514.m_SecondGlyph = i2515[3]
  i2514.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2515[4], i2514.m_SecondGlyphAdjustments)
  i2514.m_IgnoreSpacingAdjustments = !!i2515[5]
  return i2514
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2517 = data
  i2516.m_FaceIndex = i2517[0]
  i2516.m_FamilyName = i2517[1]
  i2516.m_StyleName = i2517[2]
  i2516.m_PointSize = i2517[3]
  i2516.m_Scale = i2517[4]
  i2516.m_UnitsPerEM = i2517[5]
  i2516.m_LineHeight = i2517[6]
  i2516.m_AscentLine = i2517[7]
  i2516.m_CapLine = i2517[8]
  i2516.m_MeanLine = i2517[9]
  i2516.m_Baseline = i2517[10]
  i2516.m_DescentLine = i2517[11]
  i2516.m_SuperscriptOffset = i2517[12]
  i2516.m_SuperscriptSize = i2517[13]
  i2516.m_SubscriptOffset = i2517[14]
  i2516.m_SubscriptSize = i2517[15]
  i2516.m_UnderlineOffset = i2517[16]
  i2516.m_UnderlineThickness = i2517[17]
  i2516.m_StrikethroughOffset = i2517[18]
  i2516.m_StrikethroughThickness = i2517[19]
  i2516.m_TabWidth = i2517[20]
  return i2516
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2518 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2519 = data
  i2518.useSafeMode = !!i2519[0]
  i2518.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2519[1], i2518.safeModeOptions)
  i2518.timeScale = i2519[2]
  i2518.unscaledTimeScale = i2519[3]
  i2518.useSmoothDeltaTime = !!i2519[4]
  i2518.maxSmoothUnscaledTime = i2519[5]
  i2518.rewindCallbackMode = i2519[6]
  i2518.showUnityEditorReport = !!i2519[7]
  i2518.logBehaviour = i2519[8]
  i2518.drawGizmos = !!i2519[9]
  i2518.defaultRecyclable = !!i2519[10]
  i2518.defaultAutoPlay = i2519[11]
  i2518.defaultUpdateType = i2519[12]
  i2518.defaultTimeScaleIndependent = !!i2519[13]
  i2518.defaultEaseType = i2519[14]
  i2518.defaultEaseOvershootOrAmplitude = i2519[15]
  i2518.defaultEasePeriod = i2519[16]
  i2518.defaultAutoKill = !!i2519[17]
  i2518.defaultLoopType = i2519[18]
  i2518.debugMode = !!i2519[19]
  i2518.debugStoreTargetId = !!i2519[20]
  i2518.showPreviewPanel = !!i2519[21]
  i2518.storeSettingsLocation = i2519[22]
  i2518.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2519[23], i2518.modules)
  i2518.createASMDEF = !!i2519[24]
  i2518.showPlayingTweens = !!i2519[25]
  i2518.showPausedTweens = !!i2519[26]
  return i2518
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2520 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2521 = data
  i2520.logBehaviour = i2521[0]
  i2520.nestedTweenFailureBehaviour = i2521[1]
  return i2520
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2522 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2523 = data
  i2522.showPanel = !!i2523[0]
  i2522.audioEnabled = !!i2523[1]
  i2522.physicsEnabled = !!i2523[2]
  i2522.physics2DEnabled = !!i2523[3]
  i2522.spriteEnabled = !!i2523[4]
  i2522.uiEnabled = !!i2523[5]
  i2522.uiToolkitEnabled = !!i2523[6]
  i2522.textMeshProEnabled = !!i2523[7]
  i2522.tk2DEnabled = !!i2523[8]
  i2522.deAudioEnabled = !!i2523[9]
  i2522.deUnityExtendedEnabled = !!i2523[10]
  i2522.epoOutlineEnabled = !!i2523[11]
  return i2522
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2524 = root || request.c( 'TMPro.TMP_Settings' )
  var i2525 = data
  i2524.assetVersion = i2525[0]
  i2524.m_TextWrappingMode = i2525[1]
  i2524.m_enableKerning = !!i2525[2]
  var i2527 = i2525[3]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(i2527[i + 0]);
  }
  i2524.m_ActiveFontFeatures = i2526
  i2524.m_enableExtraPadding = !!i2525[4]
  i2524.m_enableTintAllSprites = !!i2525[5]
  i2524.m_enableParseEscapeCharacters = !!i2525[6]
  i2524.m_EnableRaycastTarget = !!i2525[7]
  i2524.m_GetFontFeaturesAtRuntime = !!i2525[8]
  i2524.m_missingGlyphCharacter = i2525[9]
  i2524.m_ClearDynamicDataOnBuild = !!i2525[10]
  i2524.m_warningsDisabled = !!i2525[11]
  request.r(i2525[12], i2525[13], 0, i2524, 'm_defaultFontAsset')
  i2524.m_defaultFontAssetPath = i2525[14]
  i2524.m_defaultFontSize = i2525[15]
  i2524.m_defaultAutoSizeMinRatio = i2525[16]
  i2524.m_defaultAutoSizeMaxRatio = i2525[17]
  i2524.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2525[18], i2525[19] )
  i2524.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2525[20], i2525[21] )
  i2524.m_autoSizeTextContainer = !!i2525[22]
  i2524.m_IsTextObjectScaleStatic = !!i2525[23]
  var i2529 = i2525[24]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 1, i2528, '')
  }
  i2524.m_fallbackFontAssets = i2528
  i2524.m_matchMaterialPreset = !!i2525[25]
  i2524.m_HideSubTextObjects = !!i2525[26]
  request.r(i2525[27], i2525[28], 0, i2524, 'm_defaultSpriteAsset')
  i2524.m_defaultSpriteAssetPath = i2525[29]
  i2524.m_enableEmojiSupport = !!i2525[30]
  i2524.m_MissingCharacterSpriteUnicode = i2525[31]
  var i2531 = i2525[32]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 1, i2530, '')
  }
  i2524.m_EmojiFallbackTextAssets = i2530
  i2524.m_defaultColorGradientPresetsPath = i2525[33]
  request.r(i2525[34], i2525[35], 0, i2524, 'm_defaultStyleSheet')
  i2524.m_StyleSheetsResourcePath = i2525[36]
  request.r(i2525[37], i2525[38], 0, i2524, 'm_leadingCharacters')
  request.r(i2525[39], i2525[40], 0, i2524, 'm_followingCharacters')
  i2524.m_UseModernHangulLineBreakingRules = !!i2525[41]
  return i2524
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2534 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'spriteSheet')
  var i2537 = i2535[2]
  var i2536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.add(request.d('TMPro.TMP_Sprite', i2537[i + 0]));
  }
  i2534.spriteInfoList = i2536
  var i2539 = i2535[3]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 1, i2538, '')
  }
  i2534.fallbackSpriteAssets = i2538
  var i2541 = i2535[4]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.add(request.d('TMPro.TMP_SpriteCharacter', i2541[i + 0]));
  }
  i2534.m_SpriteCharacterTable = i2540
  var i2543 = i2535[5]
  var i2542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.add(request.d('TMPro.TMP_SpriteGlyph', i2543[i + 0]));
  }
  i2534.m_GlyphTable = i2542
  i2534.m_Version = i2535[6]
  i2534.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2535[7], i2534.m_FaceInfo)
  request.r(i2535[8], i2535[9], 0, i2534, 'm_Material')
  return i2534
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2546 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2547 = data
  i2546.name = i2547[0]
  i2546.hashCode = i2547[1]
  i2546.unicode = i2547[2]
  i2546.pivot = new pc.Vec2( i2547[3], i2547[4] )
  request.r(i2547[5], i2547[6], 0, i2546, 'sprite')
  i2546.id = i2547[7]
  i2546.x = i2547[8]
  i2546.y = i2547[9]
  i2546.width = i2547[10]
  i2546.height = i2547[11]
  i2546.xOffset = i2547[12]
  i2546.yOffset = i2547[13]
  i2546.xAdvance = i2547[14]
  i2546.scale = i2547[15]
  return i2546
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2552 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2553 = data
  i2552.m_Name = i2553[0]
  i2552.m_ElementType = i2553[1]
  i2552.m_Unicode = i2553[2]
  i2552.m_GlyphIndex = i2553[3]
  i2552.m_Scale = i2553[4]
  return i2552
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'sprite')
  i2556.m_Index = i2557[2]
  i2556.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2557[3], i2556.m_Metrics)
  i2556.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2557[4], i2556.m_GlyphRect)
  i2556.m_Scale = i2557[5]
  i2556.m_AtlasIndex = i2557[6]
  i2556.m_ClassDefinitionType = i2557[7]
  return i2556
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('TMPro.TMP_Style', i2561[i + 0]));
  }
  i2558.m_StyleList = i2560
  return i2558
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2564 = root || request.c( 'TMPro.TMP_Style' )
  var i2565 = data
  i2564.m_Name = i2565[0]
  i2564.m_HashCode = i2565[1]
  i2564.m_OpeningDefinition = i2565[2]
  i2564.m_ClosingDefinition = i2565[3]
  i2564.m_OpeningTagArray = i2565[4]
  i2564.m_ClosingTagArray = i2565[5]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2569[i + 0]) );
  }
  i2566.files = i2568
  i2566.componentToPrefabIds = i2567[1]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2573 = data
  i2572.path = i2573[0]
  request.r(i2573[1], i2573[2], 0, i2572, 'unityObject')
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2575 = data
  var i2577 = i2575[0]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2577[i + 0]) );
  }
  i2574.scriptsExecutionOrder = i2576
  var i2579 = i2575[1]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2579[i + 0]) );
  }
  i2574.sortingLayers = i2578
  var i2581 = i2575[2]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2581[i + 0]) );
  }
  i2574.cullingLayers = i2580
  i2574.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2575[3], i2574.timeSettings)
  i2574.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2575[4], i2574.physicsSettings)
  i2574.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2575[5], i2574.physics2DSettings)
  i2574.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2575[6], i2574.qualitySettings)
  i2574.enableRealtimeShadows = !!i2575[7]
  i2574.enableAutoInstancing = !!i2575[8]
  i2574.enableStaticBatching = !!i2575[9]
  i2574.enableDynamicBatching = !!i2575[10]
  i2574.lightmapEncodingQuality = i2575[11]
  i2574.desiredColorSpace = i2575[12]
  var i2583 = i2575[13]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( i2583[i + 0] );
  }
  i2574.allTags = i2582
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.value = i2587[1]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2591 = data
  i2590.id = i2591[0]
  i2590.name = i2591[1]
  i2590.value = i2591[2]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2595 = data
  i2594.id = i2595[0]
  i2594.name = i2595[1]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2597 = data
  i2596.fixedDeltaTime = i2597[0]
  i2596.maximumDeltaTime = i2597[1]
  i2596.timeScale = i2597[2]
  i2596.maximumParticleTimestep = i2597[3]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2599 = data
  i2598.gravity = new pc.Vec3( i2599[0], i2599[1], i2599[2] )
  i2598.defaultSolverIterations = i2599[3]
  i2598.bounceThreshold = i2599[4]
  i2598.autoSyncTransforms = !!i2599[5]
  i2598.autoSimulation = !!i2599[6]
  var i2601 = i2599[7]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2601[i + 0]) );
  }
  i2598.collisionMatrix = i2600
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2605 = data
  i2604.enabled = !!i2605[0]
  i2604.layerId = i2605[1]
  i2604.otherLayerId = i2605[2]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'material')
  i2606.gravity = new pc.Vec2( i2607[2], i2607[3] )
  i2606.positionIterations = i2607[4]
  i2606.velocityIterations = i2607[5]
  i2606.velocityThreshold = i2607[6]
  i2606.maxLinearCorrection = i2607[7]
  i2606.maxAngularCorrection = i2607[8]
  i2606.maxTranslationSpeed = i2607[9]
  i2606.maxRotationSpeed = i2607[10]
  i2606.baumgarteScale = i2607[11]
  i2606.baumgarteTOIScale = i2607[12]
  i2606.timeToSleep = i2607[13]
  i2606.linearSleepTolerance = i2607[14]
  i2606.angularSleepTolerance = i2607[15]
  i2606.defaultContactOffset = i2607[16]
  i2606.autoSimulation = !!i2607[17]
  i2606.queriesHitTriggers = !!i2607[18]
  i2606.queriesStartInColliders = !!i2607[19]
  i2606.callbacksOnDisable = !!i2607[20]
  i2606.reuseCollisionCallbacks = !!i2607[21]
  i2606.autoSyncTransforms = !!i2607[22]
  var i2609 = i2607[23]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2609[i + 0]) );
  }
  i2606.collisionMatrix = i2608
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2613 = data
  i2612.enabled = !!i2613[0]
  i2612.layerId = i2613[1]
  i2612.otherLayerId = i2613[2]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2615 = data
  var i2617 = i2615[0]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2617[i + 0]) );
  }
  i2614.qualityLevels = i2616
  var i2619 = i2615[1]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( i2619[i + 0] );
  }
  i2614.names = i2618
  i2614.shadows = i2615[2]
  i2614.anisotropicFiltering = i2615[3]
  i2614.antiAliasing = i2615[4]
  i2614.lodBias = i2615[5]
  i2614.shadowCascades = i2615[6]
  i2614.shadowDistance = i2615[7]
  i2614.shadowmaskMode = i2615[8]
  i2614.shadowProjection = i2615[9]
  i2614.shadowResolution = i2615[10]
  i2614.softParticles = !!i2615[11]
  i2614.softVegetation = !!i2615[12]
  i2614.activeColorSpace = i2615[13]
  i2614.desiredColorSpace = i2615[14]
  i2614.masterTextureLimit = i2615[15]
  i2614.maxQueuedFrames = i2615[16]
  i2614.particleRaycastBudget = i2615[17]
  i2614.pixelLightCount = i2615[18]
  i2614.realtimeReflectionProbes = !!i2615[19]
  i2614.shadowCascade2Split = i2615[20]
  i2614.shadowCascade4Split = new pc.Vec3( i2615[21], i2615[22], i2615[23] )
  i2614.streamingMipmapsActive = !!i2615[24]
  i2614.vSyncCount = i2615[25]
  i2614.asyncUploadBufferSize = i2615[26]
  i2614.asyncUploadTimeSlice = i2615[27]
  i2614.billboardsFaceCameraPosition = !!i2615[28]
  i2614.shadowNearPlaneOffset = i2615[29]
  i2614.streamingMipmapsMemoryBudget = i2615[30]
  i2614.maximumLODLevel = i2615[31]
  i2614.streamingMipmapsAddAllCameras = !!i2615[32]
  i2614.streamingMipmapsMaxLevelReduction = i2615[33]
  i2614.streamingMipmapsRenderersPerFrame = i2615[34]
  i2614.resolutionScalingFixedDPIFactor = i2615[35]
  i2614.streamingMipmapsMaxFileIORequests = i2615[36]
  i2614.currentQualityLevel = i2615[37]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2625 = data
  i2624.weight = i2625[0]
  i2624.vertices = i2625[1]
  i2624.normals = i2625[2]
  i2624.tangents = i2625[3]
  return i2624
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2627 = data
  i2626.m_XCoordinate = i2627[0]
  i2626.m_YCoordinate = i2627[1]
  return i2626
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2628 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2629 = data
  i2628.m_XPositionAdjustment = i2629[0]
  i2628.m_YPositionAdjustment = i2629[1]
  return i2628
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2631 = data
  i2630.xPlacement = i2631[0]
  i2630.yPlacement = i2631[1]
  i2630.xAdvance = i2631[2]
  i2630.yAdvance = i2631[3]
  return i2630
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[10],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[10],"77":[29],"78":[79],"80":[79],"81":[28],"14":[10],"82":[28],"83":[84,28],"34":[29],"85":[84,28],"86":[2,29],"87":[29],"88":[29,31],"89":[56],"90":[63],"91":[92],"93":[94],"95":[6],"96":[10],"97":[98],"99":[15],"100":[81],"101":[28],"24":[29,28],"102":[28,84],"103":[28],"104":[84,28],"105":[29],"106":[84,28],"107":[28],"108":[109],"110":[109],"111":[109],"112":[113],"114":[28],"115":[28],"116":[81],"117":[84,28],"118":[28],"119":[81],"120":[28],"121":[28],"122":[28],"123":[28],"124":[28],"125":[28],"126":[28],"127":[28],"128":[28],"129":[84,28],"130":[28],"131":[28],"132":[28],"133":[28],"134":[84,28],"135":[28],"136":[15],"137":[15],"16":[15],"138":[15],"13":[10],"139":[10]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","FailMaker","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.Physics2DRaycaster","AutoCameraFit","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","gameManager","ItemManager","ItemController","TMPro.TextMeshPro","InputManager","handHintManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.MeshRenderer","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","UnityEngine.BoxCollider","UnityEngine.Mesh","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.CanvasRenderer","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom_PointAndClick";

Deserializers.lunaInitializationTime = "06/04/2026 03:10:57";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.buildID = "21eb7011-bf06-4deb-be21-18a110f31690";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


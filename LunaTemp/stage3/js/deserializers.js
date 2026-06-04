var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3290 = root || request.c( 'UnityEngine.JointSpring' )
  var i3291 = data
  i3290.spring = i3291[0]
  i3290.damper = i3291[1]
  i3290.targetPosition = i3291[2]
  return i3290
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3292 = root || request.c( 'UnityEngine.JointMotor' )
  var i3293 = data
  i3292.m_TargetVelocity = i3293[0]
  i3292.m_Force = i3293[1]
  i3292.m_FreeSpin = i3293[2]
  return i3292
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3294 = root || request.c( 'UnityEngine.JointLimits' )
  var i3295 = data
  i3294.m_Min = i3295[0]
  i3294.m_Max = i3295[1]
  i3294.m_Bounciness = i3295[2]
  i3294.m_BounceMinVelocity = i3295[3]
  i3294.m_ContactDistance = i3295[4]
  i3294.minBounce = i3295[5]
  i3294.maxBounce = i3295[6]
  return i3294
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3296 = root || request.c( 'UnityEngine.JointDrive' )
  var i3297 = data
  i3296.m_PositionSpring = i3297[0]
  i3296.m_PositionDamper = i3297[1]
  i3296.m_MaximumForce = i3297[2]
  i3296.m_UseAcceleration = i3297[3]
  return i3296
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3298 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3299 = data
  i3298.m_Spring = i3299[0]
  i3298.m_Damper = i3299[1]
  return i3298
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3300 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3301 = data
  i3300.m_Limit = i3301[0]
  i3300.m_Bounciness = i3301[1]
  i3300.m_ContactDistance = i3301[2]
  return i3300
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3302 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3303 = data
  i3302.m_ExtremumSlip = i3303[0]
  i3302.m_ExtremumValue = i3303[1]
  i3302.m_AsymptoteSlip = i3303[2]
  i3302.m_AsymptoteValue = i3303[3]
  i3302.m_Stiffness = i3303[4]
  return i3302
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3304 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3305 = data
  i3304.m_LowerAngle = i3305[0]
  i3304.m_UpperAngle = i3305[1]
  return i3304
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3306 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3307 = data
  i3306.m_MotorSpeed = i3307[0]
  i3306.m_MaximumMotorTorque = i3307[1]
  return i3306
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3308 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3309 = data
  i3308.m_DampingRatio = i3309[0]
  i3308.m_Frequency = i3309[1]
  i3308.m_Angle = i3309[2]
  return i3308
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3310 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3311 = data
  i3310.m_LowerTranslation = i3311[0]
  i3310.m_UpperTranslation = i3311[1]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3312 = root || new pc.UnityMaterial()
  var i3313 = data
  i3312.name = i3313[0]
  request.r(i3313[1], i3313[2], 0, i3312, 'shader')
  i3312.renderQueue = i3313[3]
  i3312.enableInstancing = !!i3313[4]
  var i3315 = i3313[5]
  var i3314 = []
  for(var i = 0; i < i3315.length; i += 1) {
    i3314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3315[i + 0]) );
  }
  i3312.floatParameters = i3314
  var i3317 = i3313[6]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3317[i + 0]) );
  }
  i3312.colorParameters = i3316
  var i3319 = i3313[7]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 1) {
    i3318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3319[i + 0]) );
  }
  i3312.vectorParameters = i3318
  var i3321 = i3313[8]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3321[i + 0]) );
  }
  i3312.textureParameters = i3320
  var i3323 = i3313[9]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3323[i + 0]) );
  }
  i3312.materialFlags = i3322
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3327 = data
  i3326.name = i3327[0]
  i3326.value = i3327[1]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3331 = data
  i3330.name = i3331[0]
  i3330.value = new pc.Color(i3331[1], i3331[2], i3331[3], i3331[4])
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3335 = data
  i3334.name = i3335[0]
  i3334.value = new pc.Vec4( i3335[1], i3335[2], i3335[3], i3335[4] )
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3339 = data
  i3338.name = i3339[0]
  request.r(i3339[1], i3339[2], 0, i3338, 'value')
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3343 = data
  i3342.name = i3343[0]
  i3342.enabled = !!i3343[1]
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3345 = data
  i3344.name = i3345[0]
  i3344.width = i3345[1]
  i3344.height = i3345[2]
  i3344.mipmapCount = i3345[3]
  i3344.anisoLevel = i3345[4]
  i3344.filterMode = i3345[5]
  i3344.hdr = !!i3345[6]
  i3344.format = i3345[7]
  i3344.wrapMode = i3345[8]
  i3344.alphaIsTransparency = !!i3345[9]
  i3344.alphaSource = i3345[10]
  i3344.graphicsFormat = i3345[11]
  i3344.sRGBTexture = !!i3345[12]
  i3344.desiredColorSpace = i3345[13]
  i3344.wrapU = i3345[14]
  i3344.wrapV = i3345[15]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3347 = data
  i3346.position = new pc.Vec3( i3347[0], i3347[1], i3347[2] )
  i3346.scale = new pc.Vec3( i3347[3], i3347[4], i3347[5] )
  i3346.rotation = new pc.Quat(i3347[6], i3347[7], i3347[8], i3347[9])
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3349 = data
  request.r(i3349[0], i3349[1], 0, i3348, 'animatorController')
  request.r(i3349[2], i3349[3], 0, i3348, 'avatar')
  i3348.updateMode = i3349[4]
  i3348.hasTransformHierarchy = !!i3349[5]
  i3348.applyRootMotion = !!i3349[6]
  var i3351 = i3349[7]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 2) {
  request.r(i3351[i + 0], i3351[i + 1], 2, i3350, '')
  }
  i3348.humanBones = i3350
  i3348.enabled = !!i3349[8]
  return i3348
}

Deserializers["FailMaker"] = function (request, data, root) {
  var i3354 = root || request.c( 'FailMaker' )
  var i3355 = data
  request.r(i3355[0], i3355[1], 0, i3354, 'tf')
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3357 = data
  i3356.color = new pc.Color(i3357[0], i3357[1], i3357[2], i3357[3])
  request.r(i3357[4], i3357[5], 0, i3356, 'sprite')
  i3356.flipX = !!i3357[6]
  i3356.flipY = !!i3357[7]
  i3356.drawMode = i3357[8]
  i3356.size = new pc.Vec2( i3357[9], i3357[10] )
  i3356.tileMode = i3357[11]
  i3356.adaptiveModeThreshold = i3357[12]
  i3356.maskInteraction = i3357[13]
  i3356.spriteSortPoint = i3357[14]
  i3356.enabled = !!i3357[15]
  request.r(i3357[16], i3357[17], 0, i3356, 'sharedMaterial')
  var i3359 = i3357[18]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 2) {
  request.r(i3359[i + 0], i3359[i + 1], 2, i3358, '')
  }
  i3356.sharedMaterials = i3358
  i3356.receiveShadows = !!i3357[19]
  i3356.shadowCastingMode = i3357[20]
  i3356.sortingLayerID = i3357[21]
  i3356.sortingOrder = i3357[22]
  i3356.lightmapIndex = i3357[23]
  i3356.lightmapSceneIndex = i3357[24]
  i3356.lightmapScaleOffset = new pc.Vec4( i3357[25], i3357[26], i3357[27], i3357[28] )
  i3356.lightProbeUsage = i3357[29]
  i3356.reflectionProbeUsage = i3357[30]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3363 = data
  i3362.name = i3363[0]
  i3362.tagId = i3363[1]
  i3362.enabled = !!i3363[2]
  i3362.isStatic = !!i3363[3]
  i3362.layer = i3363[4]
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3365 = data
  i3364.name = i3365[0]
  i3364.halfPrecision = !!i3365[1]
  i3364.useSimplification = !!i3365[2]
  i3364.useUInt32IndexFormat = !!i3365[3]
  i3364.vertexCount = i3365[4]
  i3364.aabb = i3365[5]
  var i3367 = i3365[6]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( !!i3367[i + 0] );
  }
  i3364.streams = i3366
  i3364.vertices = i3365[7]
  var i3369 = i3365[8]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3369[i + 0]) );
  }
  i3364.subMeshes = i3368
  var i3371 = i3365[9]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 16) {
    i3370.push( new pc.Mat4().setData(i3371[i + 0], i3371[i + 1], i3371[i + 2], i3371[i + 3],  i3371[i + 4], i3371[i + 5], i3371[i + 6], i3371[i + 7],  i3371[i + 8], i3371[i + 9], i3371[i + 10], i3371[i + 11],  i3371[i + 12], i3371[i + 13], i3371[i + 14], i3371[i + 15]) );
  }
  i3364.bindposes = i3370
  var i3373 = i3365[10]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3373[i + 0]) );
  }
  i3364.blendShapes = i3372
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3379 = data
  i3378.triangles = i3379[0]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3385 = data
  i3384.name = i3385[0]
  var i3387 = i3385[1]
  var i3386 = []
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3387[i + 0]) );
  }
  i3384.frames = i3386
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3389 = data
  i3388.name = i3389[0]
  i3388.index = i3389[1]
  i3388.startup = !!i3389[2]
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3391 = data
  i3390.aspect = i3391[0]
  i3390.orthographic = !!i3391[1]
  i3390.orthographicSize = i3391[2]
  i3390.backgroundColor = new pc.Color(i3391[3], i3391[4], i3391[5], i3391[6])
  i3390.nearClipPlane = i3391[7]
  i3390.farClipPlane = i3391[8]
  i3390.fieldOfView = i3391[9]
  i3390.depth = i3391[10]
  i3390.clearFlags = i3391[11]
  i3390.cullingMask = i3391[12]
  i3390.rect = i3391[13]
  request.r(i3391[14], i3391[15], 0, i3390, 'targetTexture')
  i3390.usePhysicalProperties = !!i3391[16]
  i3390.focalLength = i3391[17]
  i3390.sensorSize = new pc.Vec2( i3391[18], i3391[19] )
  i3390.lensShift = new pc.Vec2( i3391[20], i3391[21] )
  i3390.gateFit = i3391[22]
  i3390.commandBufferCount = i3391[23]
  i3390.cameraType = i3391[24]
  i3390.enabled = !!i3391[25]
  return i3390
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i3393 = data
  i3392.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i3393[0] )
  i3392.m_MaxRayIntersections = i3393[1]
  return i3392
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3394 = root || request.c( 'AutoCameraFit' )
  var i3395 = data
  request.r(i3395[0], i3395[1], 0, i3394, 'canvasBtn')
  request.r(i3395[2], i3395[3], 0, i3394, 'targetArea')
  i3394.paddingLandscape = i3395[4]
  i3394.paddingPortrait = i3395[5]
  i3394.extraPaddingSmallScreen = i3395[6]
  i3394.smallScreenThreshold = i3395[7]
  i3394.autoUpdateOnResize = !!i3395[8]
  i3394.adjustInEditMode = !!i3395[9]
  return i3394
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3397 = data
  request.r(i3397[0], i3397[1], 0, i3396, 'm_FirstSelected')
  i3396.m_sendNavigationEvents = !!i3397[2]
  i3396.m_DragThreshold = i3397[3]
  return i3396
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3398 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3399 = data
  i3398.m_HorizontalAxis = i3399[0]
  i3398.m_VerticalAxis = i3399[1]
  i3398.m_SubmitButton = i3399[2]
  i3398.m_CancelButton = i3399[3]
  i3398.m_InputActionsPerSecond = i3399[4]
  i3398.m_RepeatDelay = i3399[5]
  i3398.m_ForceModuleActive = !!i3399[6]
  i3398.m_SendPointerHoverToParent = !!i3399[7]
  return i3398
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3400 = root || request.c( 'Ply_Pool' )
  var i3401 = data
  var i3403 = i3401[0]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 1) {
    i3402.push( request.d('Ply_Pool+PoolAmount', i3403[i + 0]) );
  }
  i3400.poolAmounts = i3402
  return i3400
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3406 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3407 = data
  i3406.type = i3407[0]
  i3406.amount = i3407[1]
  request.r(i3407[2], i3407[3], 0, i3406, 'gameUnit')
  return i3406
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3408 = root || request.c( 'Ply_SoundManager' )
  var i3409 = data
  i3408.audioClips = request.d('FxAudio', i3409[0], i3408.audioClips)
  request.r(i3409[1], i3409[2], 0, i3408, 'sound')
  return i3408
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3410 = root || request.c( 'FxAudio' )
  var i3411 = data
  i3410.correctMaker = request.d('SoundData', i3411[0], i3410.correctMaker)
  i3410.wrongMaker = request.d('SoundData', i3411[1], i3410.wrongMaker)
  return i3410
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3412 = root || request.c( 'SoundData' )
  var i3413 = data
  request.r(i3413[0], i3413[1], 0, i3412, 'clip')
  i3412.repeatCount = i3413[2]
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3415 = data
  request.r(i3415[0], i3415[1], 0, i3414, 'clip')
  request.r(i3415[2], i3415[3], 0, i3414, 'outputAudioMixerGroup')
  i3414.playOnAwake = !!i3415[4]
  i3414.loop = !!i3415[5]
  i3414.time = i3415[6]
  i3414.volume = i3415[7]
  i3414.pitch = i3415[8]
  i3414.enabled = !!i3415[9]
  return i3414
}

Deserializers["gameManager"] = function (request, data, root) {
  var i3416 = root || request.c( 'gameManager' )
  var i3417 = data
  return i3416
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i3418 = root || request.c( 'ItemManager' )
  var i3419 = data
  var i3421 = i3419[0]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 2) {
  request.r(i3421[i + 0], i3421[i + 1], 2, i3420, '')
  }
  i3418.allSpots = i3420
  request.r(i3419[1], i3419[2], 0, i3418, 'progressText')
  i3418.totalSpots = i3419[3]
  i3418.spotsToTriggerStore = i3419[4]
  return i3418
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3424 = root || request.c( 'InputManager' )
  var i3425 = data
  request.r(i3425[0], i3425[1], 0, i3424, 'mainCamera')
  request.r(i3425[2], i3425[3], 0, i3424, 'itemManager')
  i3424.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3425[4] )
  i3424.backgroundLayer = UnityEngine.LayerMask.FromIntegerValue( i3425[5] )
  i3424.failMarkerZOffset = i3425[6]
  return i3424
}

Deserializers["handHintManager"] = function (request, data, root) {
  var i3426 = root || request.c( 'handHintManager' )
  var i3427 = data
  i3426.timeToHint = i3427[0]
  request.r(i3427[1], i3427[2], 0, i3426, 'handHintObj')
  request.r(i3427[3], i3427[4], 0, i3426, 'itemManager')
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3429 = data
  i3428.pivot = new pc.Vec2( i3429[0], i3429[1] )
  i3428.anchorMin = new pc.Vec2( i3429[2], i3429[3] )
  i3428.anchorMax = new pc.Vec2( i3429[4], i3429[5] )
  i3428.sizeDelta = new pc.Vec2( i3429[6], i3429[7] )
  i3428.anchoredPosition3D = new pc.Vec3( i3429[8], i3429[9], i3429[10] )
  i3428.rotation = new pc.Quat(i3429[11], i3429[12], i3429[13], i3429[14])
  i3428.scale = new pc.Vec3( i3429[15], i3429[16], i3429[17] )
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'additionalVertexStreams')
  i3430.enabled = !!i3431[2]
  request.r(i3431[3], i3431[4], 0, i3430, 'sharedMaterial')
  var i3433 = i3431[5]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 2) {
  request.r(i3433[i + 0], i3433[i + 1], 2, i3432, '')
  }
  i3430.sharedMaterials = i3432
  i3430.receiveShadows = !!i3431[6]
  i3430.shadowCastingMode = i3431[7]
  i3430.sortingLayerID = i3431[8]
  i3430.sortingOrder = i3431[9]
  i3430.lightmapIndex = i3431[10]
  i3430.lightmapSceneIndex = i3431[11]
  i3430.lightmapScaleOffset = new pc.Vec4( i3431[12], i3431[13], i3431[14], i3431[15] )
  i3430.lightProbeUsage = i3431[16]
  i3430.reflectionProbeUsage = i3431[17]
  return i3430
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3434 = root || request.c( 'TMPro.TextMeshPro' )
  var i3435 = data
  i3434._SortingLayer = i3435[0]
  i3434._SortingLayerID = i3435[1]
  i3434._SortingOrder = i3435[2]
  i3434.m_hasFontAssetChanged = !!i3435[3]
  request.r(i3435[4], i3435[5], 0, i3434, 'm_renderer')
  i3434.m_maskType = i3435[6]
  i3434.m_text = i3435[7]
  i3434.m_isRightToLeft = !!i3435[8]
  request.r(i3435[9], i3435[10], 0, i3434, 'm_fontAsset')
  request.r(i3435[11], i3435[12], 0, i3434, 'm_sharedMaterial')
  var i3437 = i3435[13]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3434.m_fontSharedMaterials = i3436
  request.r(i3435[14], i3435[15], 0, i3434, 'm_fontMaterial')
  var i3439 = i3435[16]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3434.m_fontMaterials = i3438
  i3434.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3435[17], i3435[18], i3435[19], i3435[20])
  i3434.m_fontColor = new pc.Color(i3435[21], i3435[22], i3435[23], i3435[24])
  i3434.m_enableVertexGradient = !!i3435[25]
  i3434.m_colorMode = i3435[26]
  i3434.m_fontColorGradient = request.d('TMPro.VertexGradient', i3435[27], i3434.m_fontColorGradient)
  request.r(i3435[28], i3435[29], 0, i3434, 'm_fontColorGradientPreset')
  request.r(i3435[30], i3435[31], 0, i3434, 'm_spriteAsset')
  i3434.m_tintAllSprites = !!i3435[32]
  request.r(i3435[33], i3435[34], 0, i3434, 'm_StyleSheet')
  i3434.m_TextStyleHashCode = i3435[35]
  i3434.m_overrideHtmlColors = !!i3435[36]
  i3434.m_faceColor = UnityEngine.Color32.ConstructColor(i3435[37], i3435[38], i3435[39], i3435[40])
  i3434.m_fontSize = i3435[41]
  i3434.m_fontSizeBase = i3435[42]
  i3434.m_fontWeight = i3435[43]
  i3434.m_enableAutoSizing = !!i3435[44]
  i3434.m_fontSizeMin = i3435[45]
  i3434.m_fontSizeMax = i3435[46]
  i3434.m_fontStyle = i3435[47]
  i3434.m_HorizontalAlignment = i3435[48]
  i3434.m_VerticalAlignment = i3435[49]
  i3434.m_textAlignment = i3435[50]
  i3434.m_characterSpacing = i3435[51]
  i3434.m_wordSpacing = i3435[52]
  i3434.m_lineSpacing = i3435[53]
  i3434.m_lineSpacingMax = i3435[54]
  i3434.m_paragraphSpacing = i3435[55]
  i3434.m_charWidthMaxAdj = i3435[56]
  i3434.m_TextWrappingMode = i3435[57]
  i3434.m_wordWrappingRatios = i3435[58]
  i3434.m_overflowMode = i3435[59]
  request.r(i3435[60], i3435[61], 0, i3434, 'm_linkedTextComponent')
  request.r(i3435[62], i3435[63], 0, i3434, 'parentLinkedComponent')
  i3434.m_enableKerning = !!i3435[64]
  var i3441 = i3435[65]
  var i3440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.add(i3441[i + 0]);
  }
  i3434.m_ActiveFontFeatures = i3440
  i3434.m_enableExtraPadding = !!i3435[66]
  i3434.checkPaddingRequired = !!i3435[67]
  i3434.m_isRichText = !!i3435[68]
  i3434.m_parseCtrlCharacters = !!i3435[69]
  i3434.m_isOrthographic = !!i3435[70]
  i3434.m_isCullingEnabled = !!i3435[71]
  i3434.m_horizontalMapping = i3435[72]
  i3434.m_verticalMapping = i3435[73]
  i3434.m_uvLineOffset = i3435[74]
  i3434.m_geometrySortingOrder = i3435[75]
  i3434.m_IsTextObjectScaleStatic = !!i3435[76]
  i3434.m_VertexBufferAutoSizeReduction = !!i3435[77]
  i3434.m_useMaxVisibleDescender = !!i3435[78]
  i3434.m_pageToDisplay = i3435[79]
  i3434.m_margin = new pc.Vec4( i3435[80], i3435[81], i3435[82], i3435[83] )
  i3434.m_isUsingLegacyAnimationComponent = !!i3435[84]
  i3434.m_isVolumetricText = !!i3435[85]
  request.r(i3435[86], i3435[87], 0, i3434, 'm_Material')
  i3434.m_EmojiFallbackSupport = !!i3435[88]
  i3434.m_Maskable = !!i3435[89]
  i3434.m_Color = new pc.Color(i3435[90], i3435[91], i3435[92], i3435[93])
  i3434.m_RaycastTarget = !!i3435[94]
  i3434.m_RaycastPadding = new pc.Vec4( i3435[95], i3435[96], i3435[97], i3435[98] )
  return i3434
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3442 = root || request.c( 'TMPro.VertexGradient' )
  var i3443 = data
  i3442.topLeft = new pc.Color(i3443[0], i3443[1], i3443[2], i3443[3])
  i3442.topRight = new pc.Color(i3443[4], i3443[5], i3443[6], i3443[7])
  i3442.bottomLeft = new pc.Color(i3443[8], i3443[9], i3443[10], i3443[11])
  i3442.bottomRight = new pc.Color(i3443[12], i3443[13], i3443[14], i3443[15])
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, 'sharedMesh')
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3449 = data
  i3448.center = new pc.Vec3( i3449[0], i3449[1], i3449[2] )
  i3448.size = new pc.Vec3( i3449[3], i3449[4], i3449[5] )
  i3448.enabled = !!i3449[6]
  i3448.isTrigger = !!i3449[7]
  request.r(i3449[8], i3449[9], 0, i3448, 'material')
  return i3448
}

Deserializers["ItemController"] = function (request, data, root) {
  var i3450 = root || request.c( 'ItemController' )
  var i3451 = data
  i3450.spotID = i3451[0]
  request.r(i3451[1], i3451[2], 0, i3450, 'successMarker')
  return i3450
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i3452 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i3453 = data
  i3452.loop = !!i3453[0]
  i3452.timeScale = i3453[1]
  request.r(i3453[2], i3453[3], 0, i3452, 'skeletonDataAsset')
  i3452.initialSkinName = i3453[4]
  i3452.fixPrefabOverrideViaMeshFilter = i3453[5]
  i3452.initialFlipX = !!i3453[6]
  i3452.initialFlipY = !!i3453[7]
  i3452.updateWhenInvisible = i3453[8]
  i3452.zSpacing = i3453[9]
  i3452.useClipping = !!i3453[10]
  i3452.immutableTriangles = !!i3453[11]
  i3452.pmaVertexColors = !!i3453[12]
  i3452.clearStateOnDisable = !!i3453[13]
  i3452.tintBlack = !!i3453[14]
  i3452.singleSubmesh = !!i3453[15]
  i3452.fixDrawOrder = !!i3453[16]
  i3452.addNormals = !!i3453[17]
  i3452.calculateTangents = !!i3453[18]
  i3452.maskInteraction = i3453[19]
  i3452.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i3453[20], i3452.maskMaterials)
  i3452.disableRenderingOnOverride = !!i3453[21]
  i3452._animationName = i3453[22]
  var i3455 = i3453[23]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( i3455[i + 0] );
  }
  i3452.separatorSlotNames = i3454
  return i3452
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i3456 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i3457 = data
  var i3459 = i3457[0]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 2) {
  request.r(i3459[i + 0], i3459[i + 1], 2, i3458, '')
  }
  i3456.materialsMaskDisabled = i3458
  var i3461 = i3457[1]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 2) {
  request.r(i3461[i + 0], i3461[i + 1], 2, i3460, '')
  }
  i3456.materialsInsideMask = i3460
  var i3463 = i3457[2]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 2) {
  request.r(i3463[i + 0], i3463[i + 1], 2, i3462, '')
  }
  i3456.materialsOutsideMask = i3462
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3467 = data
  i3466.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3467[0], i3466.main)
  i3466.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3467[1], i3466.colorBySpeed)
  i3466.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3467[2], i3466.colorOverLifetime)
  i3466.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3467[3], i3466.emission)
  i3466.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3467[4], i3466.rotationBySpeed)
  i3466.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3467[5], i3466.rotationOverLifetime)
  i3466.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3467[6], i3466.shape)
  i3466.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3467[7], i3466.sizeBySpeed)
  i3466.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3467[8], i3466.sizeOverLifetime)
  i3466.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3467[9], i3466.textureSheetAnimation)
  i3466.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3467[10], i3466.velocityOverLifetime)
  i3466.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3467[11], i3466.noise)
  i3466.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3467[12], i3466.inheritVelocity)
  i3466.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3467[13], i3466.forceOverLifetime)
  i3466.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3467[14], i3466.limitVelocityOverLifetime)
  i3466.useAutoRandomSeed = !!i3467[15]
  i3466.randomSeed = i3467[16]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3468 = root || new pc.ParticleSystemMain()
  var i3469 = data
  i3468.duration = i3469[0]
  i3468.loop = !!i3469[1]
  i3468.prewarm = !!i3469[2]
  i3468.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[3], i3468.startDelay)
  i3468.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[4], i3468.startLifetime)
  i3468.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[5], i3468.startSpeed)
  i3468.startSize3D = !!i3469[6]
  i3468.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[7], i3468.startSizeX)
  i3468.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[8], i3468.startSizeY)
  i3468.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[9], i3468.startSizeZ)
  i3468.startRotation3D = !!i3469[10]
  i3468.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[11], i3468.startRotationX)
  i3468.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[12], i3468.startRotationY)
  i3468.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[13], i3468.startRotationZ)
  i3468.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3469[14], i3468.startColor)
  i3468.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3469[15], i3468.gravityModifier)
  i3468.simulationSpace = i3469[16]
  request.r(i3469[17], i3469[18], 0, i3468, 'customSimulationSpace')
  i3468.simulationSpeed = i3469[19]
  i3468.useUnscaledTime = !!i3469[20]
  i3468.scalingMode = i3469[21]
  i3468.playOnAwake = !!i3469[22]
  i3468.maxParticles = i3469[23]
  i3468.emitterVelocityMode = i3469[24]
  i3468.stopAction = i3469[25]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3470 = root || new pc.MinMaxCurve()
  var i3471 = data
  i3470.mode = i3471[0]
  i3470.curveMin = new pc.AnimationCurve( { keys_flow: i3471[1] } )
  i3470.curveMax = new pc.AnimationCurve( { keys_flow: i3471[2] } )
  i3470.curveMultiplier = i3471[3]
  i3470.constantMin = i3471[4]
  i3470.constantMax = i3471[5]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3472 = root || new pc.MinMaxGradient()
  var i3473 = data
  i3472.mode = i3473[0]
  i3472.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3473[1], i3472.gradientMin)
  i3472.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3473[2], i3472.gradientMax)
  i3472.colorMin = new pc.Color(i3473[3], i3473[4], i3473[5], i3473[6])
  i3472.colorMax = new pc.Color(i3473[7], i3473[8], i3473[9], i3473[10])
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3475 = data
  i3474.mode = i3475[0]
  var i3477 = i3475[1]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3477[i + 0]) );
  }
  i3474.colorKeys = i3476
  var i3479 = i3475[2]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3479[i + 0]) );
  }
  i3474.alphaKeys = i3478
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3480 = root || new pc.ParticleSystemColorBySpeed()
  var i3481 = data
  i3480.enabled = !!i3481[0]
  i3480.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3481[1], i3480.color)
  i3480.range = new pc.Vec2( i3481[2], i3481[3] )
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3485 = data
  i3484.color = new pc.Color(i3485[0], i3485[1], i3485[2], i3485[3])
  i3484.time = i3485[4]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3489 = data
  i3488.alpha = i3489[0]
  i3488.time = i3489[1]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3490 = root || new pc.ParticleSystemColorOverLifetime()
  var i3491 = data
  i3490.enabled = !!i3491[0]
  i3490.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3491[1], i3490.color)
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3492 = root || new pc.ParticleSystemEmitter()
  var i3493 = data
  i3492.enabled = !!i3493[0]
  i3492.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[1], i3492.rateOverTime)
  i3492.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3493[2], i3492.rateOverDistance)
  var i3495 = i3493[3]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3495[i + 0]) );
  }
  i3492.bursts = i3494
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3498 = root || new pc.ParticleSystemBurst()
  var i3499 = data
  i3498.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3499[0], i3498.count)
  i3498.cycleCount = i3499[1]
  i3498.minCount = i3499[2]
  i3498.maxCount = i3499[3]
  i3498.repeatInterval = i3499[4]
  i3498.time = i3499[5]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3500 = root || new pc.ParticleSystemRotationBySpeed()
  var i3501 = data
  i3500.enabled = !!i3501[0]
  i3500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3501[1], i3500.x)
  i3500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3501[2], i3500.y)
  i3500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3501[3], i3500.z)
  i3500.separateAxes = !!i3501[4]
  i3500.range = new pc.Vec2( i3501[5], i3501[6] )
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3502 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3503 = data
  i3502.enabled = !!i3503[0]
  i3502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3503[1], i3502.x)
  i3502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3503[2], i3502.y)
  i3502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3503[3], i3502.z)
  i3502.separateAxes = !!i3503[4]
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3504 = root || new pc.ParticleSystemShape()
  var i3505 = data
  i3504.enabled = !!i3505[0]
  i3504.shapeType = i3505[1]
  i3504.randomDirectionAmount = i3505[2]
  i3504.sphericalDirectionAmount = i3505[3]
  i3504.randomPositionAmount = i3505[4]
  i3504.alignToDirection = !!i3505[5]
  i3504.radius = i3505[6]
  i3504.radiusMode = i3505[7]
  i3504.radiusSpread = i3505[8]
  i3504.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3505[9], i3504.radiusSpeed)
  i3504.radiusThickness = i3505[10]
  i3504.angle = i3505[11]
  i3504.length = i3505[12]
  i3504.boxThickness = new pc.Vec3( i3505[13], i3505[14], i3505[15] )
  i3504.meshShapeType = i3505[16]
  request.r(i3505[17], i3505[18], 0, i3504, 'mesh')
  request.r(i3505[19], i3505[20], 0, i3504, 'meshRenderer')
  request.r(i3505[21], i3505[22], 0, i3504, 'skinnedMeshRenderer')
  i3504.useMeshMaterialIndex = !!i3505[23]
  i3504.meshMaterialIndex = i3505[24]
  i3504.useMeshColors = !!i3505[25]
  i3504.normalOffset = i3505[26]
  i3504.arc = i3505[27]
  i3504.arcMode = i3505[28]
  i3504.arcSpread = i3505[29]
  i3504.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3505[30], i3504.arcSpeed)
  i3504.donutRadius = i3505[31]
  i3504.position = new pc.Vec3( i3505[32], i3505[33], i3505[34] )
  i3504.rotation = new pc.Vec3( i3505[35], i3505[36], i3505[37] )
  i3504.scale = new pc.Vec3( i3505[38], i3505[39], i3505[40] )
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3506 = root || new pc.ParticleSystemSizeBySpeed()
  var i3507 = data
  i3506.enabled = !!i3507[0]
  i3506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3507[1], i3506.x)
  i3506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3507[2], i3506.y)
  i3506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3507[3], i3506.z)
  i3506.separateAxes = !!i3507[4]
  i3506.range = new pc.Vec2( i3507[5], i3507[6] )
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3508 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3509 = data
  i3508.enabled = !!i3509[0]
  i3508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3509[1], i3508.x)
  i3508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3509[2], i3508.y)
  i3508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3509[3], i3508.z)
  i3508.separateAxes = !!i3509[4]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3510 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3511 = data
  i3510.enabled = !!i3511[0]
  i3510.mode = i3511[1]
  i3510.animation = i3511[2]
  i3510.numTilesX = i3511[3]
  i3510.numTilesY = i3511[4]
  i3510.useRandomRow = !!i3511[5]
  i3510.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[6], i3510.frameOverTime)
  i3510.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[7], i3510.startFrame)
  i3510.cycleCount = i3511[8]
  i3510.rowIndex = i3511[9]
  i3510.flipU = i3511[10]
  i3510.flipV = i3511[11]
  i3510.spriteCount = i3511[12]
  var i3513 = i3511[13]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3510.sprites = i3512
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3516 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3517 = data
  i3516.enabled = !!i3517[0]
  i3516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[1], i3516.x)
  i3516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[2], i3516.y)
  i3516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[3], i3516.z)
  i3516.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[4], i3516.radial)
  i3516.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[5], i3516.speedModifier)
  i3516.space = i3517[6]
  i3516.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[7], i3516.orbitalX)
  i3516.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[8], i3516.orbitalY)
  i3516.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[9], i3516.orbitalZ)
  i3516.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[10], i3516.orbitalOffsetX)
  i3516.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[11], i3516.orbitalOffsetY)
  i3516.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3517[12], i3516.orbitalOffsetZ)
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3518 = root || new pc.ParticleSystemNoise()
  var i3519 = data
  i3518.enabled = !!i3519[0]
  i3518.separateAxes = !!i3519[1]
  i3518.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[2], i3518.strengthX)
  i3518.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[3], i3518.strengthY)
  i3518.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[4], i3518.strengthZ)
  i3518.frequency = i3519[5]
  i3518.damping = !!i3519[6]
  i3518.octaveCount = i3519[7]
  i3518.octaveMultiplier = i3519[8]
  i3518.octaveScale = i3519[9]
  i3518.quality = i3519[10]
  i3518.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[11], i3518.scrollSpeed)
  i3518.scrollSpeedMultiplier = i3519[12]
  i3518.remapEnabled = !!i3519[13]
  i3518.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[14], i3518.remapX)
  i3518.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[15], i3518.remapY)
  i3518.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[16], i3518.remapZ)
  i3518.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[17], i3518.positionAmount)
  i3518.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[18], i3518.rotationAmount)
  i3518.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3519[19], i3518.sizeAmount)
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3520 = root || new pc.ParticleSystemInheritVelocity()
  var i3521 = data
  i3520.enabled = !!i3521[0]
  i3520.mode = i3521[1]
  i3520.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3521[2], i3520.curve)
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3522 = root || new pc.ParticleSystemForceOverLifetime()
  var i3523 = data
  i3522.enabled = !!i3523[0]
  i3522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[1], i3522.x)
  i3522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[2], i3522.y)
  i3522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[3], i3522.z)
  i3522.space = i3523[4]
  i3522.randomized = !!i3523[5]
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3524 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3525 = data
  i3524.enabled = !!i3525[0]
  i3524.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[1], i3524.limit)
  i3524.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[2], i3524.limitX)
  i3524.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[3], i3524.limitY)
  i3524.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[4], i3524.limitZ)
  i3524.dampen = i3525[5]
  i3524.separateAxes = !!i3525[6]
  i3524.space = i3525[7]
  i3524.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[8], i3524.drag)
  i3524.multiplyDragByParticleSize = !!i3525[9]
  i3524.multiplyDragByParticleVelocity = !!i3525[10]
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3527 = data
  request.r(i3527[0], i3527[1], 0, i3526, 'mesh')
  i3526.meshCount = i3527[2]
  i3526.activeVertexStreamsCount = i3527[3]
  i3526.alignment = i3527[4]
  i3526.renderMode = i3527[5]
  i3526.sortMode = i3527[6]
  i3526.lengthScale = i3527[7]
  i3526.velocityScale = i3527[8]
  i3526.cameraVelocityScale = i3527[9]
  i3526.normalDirection = i3527[10]
  i3526.sortingFudge = i3527[11]
  i3526.minParticleSize = i3527[12]
  i3526.maxParticleSize = i3527[13]
  i3526.pivot = new pc.Vec3( i3527[14], i3527[15], i3527[16] )
  request.r(i3527[17], i3527[18], 0, i3526, 'trailMaterial')
  i3526.applyActiveColorSpace = !!i3527[19]
  i3526.enabled = !!i3527[20]
  request.r(i3527[21], i3527[22], 0, i3526, 'sharedMaterial')
  var i3529 = i3527[23]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 2) {
  request.r(i3529[i + 0], i3529[i + 1], 2, i3528, '')
  }
  i3526.sharedMaterials = i3528
  i3526.receiveShadows = !!i3527[24]
  i3526.shadowCastingMode = i3527[25]
  i3526.sortingLayerID = i3527[26]
  i3526.sortingOrder = i3527[27]
  i3526.lightmapIndex = i3527[28]
  i3526.lightmapSceneIndex = i3527[29]
  i3526.lightmapScaleOffset = new pc.Vec4( i3527[30], i3527[31], i3527[32], i3527[33] )
  i3526.lightProbeUsage = i3527[34]
  i3526.reflectionProbeUsage = i3527[35]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3531 = data
  i3530.ambientIntensity = i3531[0]
  i3530.reflectionIntensity = i3531[1]
  i3530.ambientMode = i3531[2]
  i3530.ambientLight = new pc.Color(i3531[3], i3531[4], i3531[5], i3531[6])
  i3530.ambientSkyColor = new pc.Color(i3531[7], i3531[8], i3531[9], i3531[10])
  i3530.ambientGroundColor = new pc.Color(i3531[11], i3531[12], i3531[13], i3531[14])
  i3530.ambientEquatorColor = new pc.Color(i3531[15], i3531[16], i3531[17], i3531[18])
  i3530.fogColor = new pc.Color(i3531[19], i3531[20], i3531[21], i3531[22])
  i3530.fogEndDistance = i3531[23]
  i3530.fogStartDistance = i3531[24]
  i3530.fogDensity = i3531[25]
  i3530.fog = !!i3531[26]
  request.r(i3531[27], i3531[28], 0, i3530, 'skybox')
  i3530.fogMode = i3531[29]
  var i3533 = i3531[30]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3533[i + 0]) );
  }
  i3530.lightmaps = i3532
  i3530.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3531[31], i3530.lightProbes)
  i3530.lightmapsMode = i3531[32]
  i3530.mixedBakeMode = i3531[33]
  i3530.environmentLightingMode = i3531[34]
  i3530.ambientProbe = new pc.SphericalHarmonicsL2(i3531[35])
  i3530.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3531[36])
  i3530.useReferenceAmbientProbe = !!i3531[37]
  request.r(i3531[38], i3531[39], 0, i3530, 'customReflection')
  request.r(i3531[40], i3531[41], 0, i3530, 'defaultReflection')
  i3530.defaultReflectionMode = i3531[42]
  i3530.defaultReflectionResolution = i3531[43]
  i3530.sunLightObjectId = i3531[44]
  i3530.pixelLightCount = i3531[45]
  i3530.defaultReflectionHDR = !!i3531[46]
  i3530.hasLightDataAsset = !!i3531[47]
  i3530.hasManualGenerate = !!i3531[48]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3537 = data
  request.r(i3537[0], i3537[1], 0, i3536, 'lightmapColor')
  request.r(i3537[2], i3537[3], 0, i3536, 'lightmapDirection')
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3538 = root || new UnityEngine.LightProbes()
  var i3539 = data
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3547 = data
  var i3549 = i3547[0]
  var i3548 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3549[i + 0]));
  }
  i3546.ShaderCompilationErrors = i3548
  i3546.name = i3547[1]
  i3546.guid = i3547[2]
  var i3551 = i3547[3]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( i3551[i + 0] );
  }
  i3546.shaderDefinedKeywords = i3550
  var i3553 = i3547[4]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3553[i + 0]) );
  }
  i3546.passes = i3552
  var i3555 = i3547[5]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3555[i + 0]) );
  }
  i3546.usePasses = i3554
  var i3557 = i3547[6]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3557[i + 0]) );
  }
  i3546.defaultParameterValues = i3556
  request.r(i3547[7], i3547[8], 0, i3546, 'unityFallbackShader')
  i3546.readDepth = !!i3547[9]
  i3546.hasDepthOnlyPass = !!i3547[10]
  i3546.isCreatedByShaderGraph = !!i3547[11]
  i3546.disableBatching = !!i3547[12]
  i3546.compiled = !!i3547[13]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3561 = data
  i3560.shaderName = i3561[0]
  i3560.errorMessage = i3561[1]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3564 = root || new pc.UnityShaderPass()
  var i3565 = data
  i3564.id = i3565[0]
  i3564.subShaderIndex = i3565[1]
  i3564.name = i3565[2]
  i3564.passType = i3565[3]
  i3564.grabPassTextureName = i3565[4]
  i3564.usePass = !!i3565[5]
  i3564.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[6], i3564.zTest)
  i3564.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[7], i3564.zWrite)
  i3564.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[8], i3564.culling)
  i3564.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3565[9], i3564.blending)
  i3564.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3565[10], i3564.alphaBlending)
  i3564.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[11], i3564.colorWriteMask)
  i3564.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[12], i3564.offsetUnits)
  i3564.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[13], i3564.offsetFactor)
  i3564.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[14], i3564.stencilRef)
  i3564.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[15], i3564.stencilReadMask)
  i3564.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3565[16], i3564.stencilWriteMask)
  i3564.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3565[17], i3564.stencilOp)
  i3564.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3565[18], i3564.stencilOpFront)
  i3564.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3565[19], i3564.stencilOpBack)
  var i3567 = i3565[20]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3567[i + 0]) );
  }
  i3564.tags = i3566
  var i3569 = i3565[21]
  var i3568 = []
  for(var i = 0; i < i3569.length; i += 1) {
    i3568.push( i3569[i + 0] );
  }
  i3564.passDefinedKeywords = i3568
  var i3571 = i3565[22]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3571[i + 0]) );
  }
  i3564.passDefinedKeywordGroups = i3570
  var i3573 = i3565[23]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3573[i + 0]) );
  }
  i3564.variants = i3572
  var i3575 = i3565[24]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3575[i + 0]) );
  }
  i3564.excludedVariants = i3574
  i3564.hasDepthReader = !!i3565[25]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3577 = data
  i3576.val = i3577[0]
  i3576.name = i3577[1]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3579 = data
  i3578.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[0], i3578.src)
  i3578.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[1], i3578.dst)
  i3578.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3579[2], i3578.op)
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3581 = data
  i3580.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[0], i3580.pass)
  i3580.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[1], i3580.fail)
  i3580.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[2], i3580.zFail)
  i3580.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3581[3], i3580.comp)
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3585 = data
  i3584.name = i3585[0]
  i3584.value = i3585[1]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3589 = data
  var i3591 = i3589[0]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( i3591[i + 0] );
  }
  i3588.keywords = i3590
  i3588.hasDiscard = !!i3589[1]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3595 = data
  i3594.passId = i3595[0]
  i3594.subShaderIndex = i3595[1]
  var i3597 = i3595[2]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( i3597[i + 0] );
  }
  i3594.keywords = i3596
  i3594.vertexProgram = i3595[3]
  i3594.fragmentProgram = i3595[4]
  i3594.exportedForWebGl2 = !!i3595[5]
  i3594.readDepth = !!i3595[6]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'shader')
  i3600.pass = i3601[2]
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3605 = data
  i3604.name = i3605[0]
  i3604.type = i3605[1]
  i3604.value = new pc.Vec4( i3605[2], i3605[3], i3605[4], i3605[5] )
  i3604.textureValue = i3605[6]
  i3604.shaderPropertyFlag = i3605[7]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3607 = data
  i3606.name = i3607[0]
  request.r(i3607[1], i3607[2], 0, i3606, 'texture')
  i3606.aabb = i3607[3]
  i3606.vertices = i3607[4]
  i3606.triangles = i3607[5]
  i3606.textureRect = UnityEngine.Rect.MinMaxRect(i3607[6], i3607[7], i3607[8], i3607[9])
  i3606.packedRect = UnityEngine.Rect.MinMaxRect(i3607[10], i3607[11], i3607[12], i3607[13])
  i3606.border = new pc.Vec4( i3607[14], i3607[15], i3607[16], i3607[17] )
  i3606.transparency = i3607[18]
  i3606.bounds = i3607[19]
  i3606.pixelsPerUnit = i3607[20]
  i3606.textureWidth = i3607[21]
  i3606.textureHeight = i3607[22]
  i3606.nativeSize = new pc.Vec2( i3607[23], i3607[24] )
  i3606.pivot = new pc.Vec2( i3607[25], i3607[26] )
  i3606.textureRectOffset = new pc.Vec2( i3607[27], i3607[28] )
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3609 = data
  i3608.name = i3609[0]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3611 = data
  i3610.name = i3611[0]
  i3610.wrapMode = i3611[1]
  i3610.isLooping = !!i3611[2]
  i3610.length = i3611[3]
  var i3613 = i3611[4]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3613[i + 0]) );
  }
  i3610.curves = i3612
  var i3615 = i3611[5]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3615[i + 0]) );
  }
  i3610.events = i3614
  i3610.halfPrecision = !!i3611[6]
  i3610._frameRate = i3611[7]
  i3610.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3611[8], i3610.localBounds)
  i3610.hasMuscleCurves = !!i3611[9]
  var i3617 = i3611[10]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( i3617[i + 0] );
  }
  i3610.clipMuscleConstant = i3616
  i3610.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3611[11], i3610.clipBindingConstant)
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3621 = data
  i3620.path = i3621[0]
  i3620.hash = i3621[1]
  i3620.componentType = i3621[2]
  i3620.property = i3621[3]
  i3620.keys = i3621[4]
  var i3623 = i3621[5]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3623[i + 0]) );
  }
  i3620.objectReferenceKeys = i3622
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3627 = data
  i3626.time = i3627[0]
  request.r(i3627[1], i3627[2], 0, i3626, 'value')
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3631 = data
  i3630.functionName = i3631[0]
  i3630.floatParameter = i3631[1]
  i3630.intParameter = i3631[2]
  i3630.stringParameter = i3631[3]
  request.r(i3631[4], i3631[5], 0, i3630, 'objectReferenceParameter')
  i3630.time = i3631[6]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3633 = data
  i3632.center = new pc.Vec3( i3633[0], i3633[1], i3633[2] )
  i3632.extends = new pc.Vec3( i3633[3], i3633[4], i3633[5] )
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3637 = data
  var i3639 = i3637[0]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( i3639[i + 0] );
  }
  i3636.genericBindings = i3638
  var i3641 = i3637[1]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( i3641[i + 0] );
  }
  i3636.pptrCurveMapping = i3640
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3643 = data
  i3642.name = i3643[0]
  i3642.ascent = i3643[1]
  i3642.originalLineHeight = i3643[2]
  i3642.fontSize = i3643[3]
  var i3645 = i3643[4]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3645[i + 0]) );
  }
  i3642.characterInfo = i3644
  request.r(i3643[5], i3643[6], 0, i3642, 'texture')
  i3642.originalFontSize = i3643[7]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3649 = data
  i3648.index = i3649[0]
  i3648.advance = i3649[1]
  i3648.bearing = i3649[2]
  i3648.glyphWidth = i3649[3]
  i3648.glyphHeight = i3649[4]
  i3648.minX = i3649[5]
  i3648.maxX = i3649[6]
  i3648.minY = i3649[7]
  i3648.maxY = i3649[8]
  i3648.uvBottomLeftX = i3649[9]
  i3648.uvBottomLeftY = i3649[10]
  i3648.uvBottomRightX = i3649[11]
  i3648.uvBottomRightY = i3649[12]
  i3648.uvTopLeftX = i3649[13]
  i3648.uvTopLeftY = i3649[14]
  i3648.uvTopRightX = i3649[15]
  i3648.uvTopRightY = i3649[16]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3651 = data
  i3650.name = i3651[0]
  var i3653 = i3651[1]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3653[i + 0]) );
  }
  i3650.layers = i3652
  var i3655 = i3651[2]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3655[i + 0]) );
  }
  i3650.parameters = i3654
  i3650.animationClips = i3651[3]
  i3650.avatarUnsupported = i3651[4]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3659 = data
  i3658.name = i3659[0]
  i3658.defaultWeight = i3659[1]
  i3658.blendingMode = i3659[2]
  i3658.avatarMask = i3659[3]
  i3658.syncedLayerIndex = i3659[4]
  i3658.syncedLayerAffectsTiming = !!i3659[5]
  i3658.syncedLayers = i3659[6]
  i3658.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3659[7], i3658.stateMachine)
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3661 = data
  i3660.id = i3661[0]
  i3660.name = i3661[1]
  i3660.path = i3661[2]
  var i3663 = i3661[3]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3663[i + 0]) );
  }
  i3660.states = i3662
  var i3665 = i3661[4]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3665[i + 0]) );
  }
  i3660.machines = i3664
  var i3667 = i3661[5]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3667[i + 0]) );
  }
  i3660.entryStateTransitions = i3666
  var i3669 = i3661[6]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3669[i + 0]) );
  }
  i3660.exitStateTransitions = i3668
  var i3671 = i3661[7]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3671[i + 0]) );
  }
  i3660.anyStateTransitions = i3670
  i3660.defaultStateId = i3661[8]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3675 = data
  i3674.id = i3675[0]
  i3674.name = i3675[1]
  i3674.cycleOffset = i3675[2]
  i3674.cycleOffsetParameter = i3675[3]
  i3674.cycleOffsetParameterActive = !!i3675[4]
  i3674.mirror = !!i3675[5]
  i3674.mirrorParameter = i3675[6]
  i3674.mirrorParameterActive = !!i3675[7]
  i3674.motionId = i3675[8]
  i3674.nameHash = i3675[9]
  i3674.fullPathHash = i3675[10]
  i3674.speed = i3675[11]
  i3674.speedParameter = i3675[12]
  i3674.speedParameterActive = !!i3675[13]
  i3674.tag = i3675[14]
  i3674.tagHash = i3675[15]
  i3674.writeDefaultValues = !!i3675[16]
  var i3677 = i3675[17]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 2) {
  request.r(i3677[i + 0], i3677[i + 1], 2, i3676, '')
  }
  i3674.behaviours = i3676
  var i3679 = i3675[18]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3679[i + 0]) );
  }
  i3674.transitions = i3678
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3685 = data
  i3684.fullPath = i3685[0]
  i3684.canTransitionToSelf = !!i3685[1]
  i3684.duration = i3685[2]
  i3684.exitTime = i3685[3]
  i3684.hasExitTime = !!i3685[4]
  i3684.hasFixedDuration = !!i3685[5]
  i3684.interruptionSource = i3685[6]
  i3684.offset = i3685[7]
  i3684.orderedInterruption = !!i3685[8]
  i3684.destinationStateId = i3685[9]
  i3684.isExit = !!i3685[10]
  i3684.mute = !!i3685[11]
  i3684.solo = !!i3685[12]
  var i3687 = i3685[13]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3687[i + 0]) );
  }
  i3684.conditions = i3686
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3693 = data
  i3692.destinationStateId = i3693[0]
  i3692.isExit = !!i3693[1]
  i3692.mute = !!i3693[2]
  i3692.solo = !!i3693[3]
  var i3695 = i3693[4]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3695[i + 0]) );
  }
  i3692.conditions = i3694
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3699 = data
  i3698.defaultBool = !!i3699[0]
  i3698.defaultFloat = i3699[1]
  i3698.defaultInt = i3699[2]
  i3698.name = i3699[3]
  i3698.nameHash = i3699[4]
  i3698.type = i3699[5]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3703 = data
  i3702.mode = i3703[0]
  i3702.parameter = i3703[1]
  i3702.threshold = i3703[2]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3705 = data
  i3704.name = i3705[0]
  i3704.bytes64 = i3705[1]
  i3704.data = i3705[2]
  return i3704
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3706 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3707 = data
  var i3709 = i3707[0]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 2) {
  request.r(i3709[i + 0], i3709[i + 1], 2, i3708, '')
  }
  i3706.atlasAssets = i3708
  i3706.scale = i3707[1]
  request.r(i3707[2], i3707[3], 0, i3706, 'skeletonJSON')
  i3706.isUpgradingBlendModeMaterials = !!i3707[4]
  i3706.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3707[5], i3706.blendModeMaterials)
  var i3711 = i3707[6]
  var i3710 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3711.length; i += 2) {
  request.r(i3711[i + 0], i3711[i + 1], 1, i3710, '')
  }
  i3706.skeletonDataModifiers = i3710
  var i3713 = i3707[7]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( i3713[i + 0] );
  }
  i3706.fromAnimation = i3712
  var i3715 = i3707[8]
  var i3714 = []
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.push( i3715[i + 0] );
  }
  i3706.toAnimation = i3714
  i3706.duration = i3707[9]
  i3706.defaultMix = i3707[10]
  request.r(i3707[11], i3707[12], 0, i3706, 'controller')
  return i3706
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3718 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3719 = data
  i3718.applyAdditiveMaterial = !!i3719[0]
  var i3721 = i3719[1]
  var i3720 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3721[i + 0]));
  }
  i3718.additiveMaterials = i3720
  var i3723 = i3719[2]
  var i3722 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3723[i + 0]));
  }
  i3718.multiplyMaterials = i3722
  var i3725 = i3719[3]
  var i3724 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3725[i + 0]));
  }
  i3718.screenMaterials = i3724
  i3718.requiresBlendModeMaterials = !!i3719[4]
  return i3718
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3728 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3729 = data
  i3728.pageName = i3729[0]
  request.r(i3729[1], i3729[2], 0, i3728, 'material')
  return i3728
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3732 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'atlasFile')
  var i3735 = i3733[2]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 2) {
  request.r(i3735[i + 0], i3735[i + 1], 2, i3734, '')
  }
  i3732.materials = i3734
  return i3732
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3736 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3737 = data
  i3736.normalStyle = i3737[0]
  i3736.normalSpacingOffset = i3737[1]
  i3736.boldStyle = i3737[2]
  i3736.boldSpacing = i3737[3]
  i3736.italicStyle = i3737[4]
  i3736.tabSize = i3737[5]
  request.r(i3737[6], i3737[7], 0, i3736, 'atlas')
  i3736.m_SourceFontFileGUID = i3737[8]
  i3736.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3737[9], i3736.m_CreationSettings)
  request.r(i3737[10], i3737[11], 0, i3736, 'm_SourceFontFile')
  i3736.m_SourceFontFilePath = i3737[12]
  i3736.m_AtlasPopulationMode = i3737[13]
  i3736.InternalDynamicOS = !!i3737[14]
  var i3739 = i3737[15]
  var i3738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.add(request.d('UnityEngine.TextCore.Glyph', i3739[i + 0]));
  }
  i3736.m_GlyphTable = i3738
  var i3741 = i3737[16]
  var i3740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.add(request.d('TMPro.TMP_Character', i3741[i + 0]));
  }
  i3736.m_CharacterTable = i3740
  var i3743 = i3737[17]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 2) {
  request.r(i3743[i + 0], i3743[i + 1], 2, i3742, '')
  }
  i3736.m_AtlasTextures = i3742
  i3736.m_AtlasTextureIndex = i3737[18]
  i3736.m_IsMultiAtlasTexturesEnabled = !!i3737[19]
  i3736.m_GetFontFeatures = !!i3737[20]
  i3736.m_ClearDynamicDataOnBuild = !!i3737[21]
  i3736.m_AtlasWidth = i3737[22]
  i3736.m_AtlasHeight = i3737[23]
  i3736.m_AtlasPadding = i3737[24]
  i3736.m_AtlasRenderMode = i3737[25]
  var i3745 = i3737[26]
  var i3744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.add(request.d('UnityEngine.TextCore.GlyphRect', i3745[i + 0]));
  }
  i3736.m_UsedGlyphRects = i3744
  var i3747 = i3737[27]
  var i3746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.add(request.d('UnityEngine.TextCore.GlyphRect', i3747[i + 0]));
  }
  i3736.m_FreeGlyphRects = i3746
  i3736.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3737[28], i3736.m_FontFeatureTable)
  i3736.m_ShouldReimportFontFeatures = !!i3737[29]
  var i3749 = i3737[30]
  var i3748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3749.length; i += 2) {
  request.r(i3749[i + 0], i3749[i + 1], 1, i3748, '')
  }
  i3736.m_FallbackFontAssetTable = i3748
  var i3751 = i3737[31]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('TMPro.TMP_FontWeightPair', i3751[i + 0]) );
  }
  i3736.m_FontWeightTable = i3750
  var i3753 = i3737[32]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( request.d('TMPro.TMP_FontWeightPair', i3753[i + 0]) );
  }
  i3736.fontWeights = i3752
  i3736.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3737[33], i3736.m_fontInfo)
  var i3755 = i3737[34]
  var i3754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.add(request.d('TMPro.TMP_Glyph', i3755[i + 0]));
  }
  i3736.m_glyphInfoList = i3754
  i3736.m_KerningTable = request.d('TMPro.KerningTable', i3737[35], i3736.m_KerningTable)
  var i3757 = i3737[36]
  var i3756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3757.length; i += 2) {
  request.r(i3757[i + 0], i3757[i + 1], 1, i3756, '')
  }
  i3736.fallbackFontAssets = i3756
  i3736.m_Version = i3737[37]
  i3736.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3737[38], i3736.m_FaceInfo)
  request.r(i3737[39], i3737[40], 0, i3736, 'm_Material')
  return i3736
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3758 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3759 = data
  i3758.sourceFontFileName = i3759[0]
  i3758.sourceFontFileGUID = i3759[1]
  i3758.faceIndex = i3759[2]
  i3758.pointSizeSamplingMode = i3759[3]
  i3758.pointSize = i3759[4]
  i3758.padding = i3759[5]
  i3758.paddingMode = i3759[6]
  i3758.packingMode = i3759[7]
  i3758.atlasWidth = i3759[8]
  i3758.atlasHeight = i3759[9]
  i3758.characterSetSelectionMode = i3759[10]
  i3758.characterSequence = i3759[11]
  i3758.referencedFontAssetGUID = i3759[12]
  i3758.referencedTextAssetGUID = i3759[13]
  i3758.fontStyle = i3759[14]
  i3758.fontStyleModifier = i3759[15]
  i3758.renderMode = i3759[16]
  i3758.includeFontFeatures = !!i3759[17]
  return i3758
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3762 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3763 = data
  i3762.m_Index = i3763[0]
  i3762.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3763[1], i3762.m_Metrics)
  i3762.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3763[2], i3762.m_GlyphRect)
  i3762.m_Scale = i3763[3]
  i3762.m_AtlasIndex = i3763[4]
  i3762.m_ClassDefinitionType = i3763[5]
  return i3762
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3765 = data
  i3764.m_Width = i3765[0]
  i3764.m_Height = i3765[1]
  i3764.m_HorizontalBearingX = i3765[2]
  i3764.m_HorizontalBearingY = i3765[3]
  i3764.m_HorizontalAdvance = i3765[4]
  return i3764
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3766 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3767 = data
  i3766.m_X = i3767[0]
  i3766.m_Y = i3767[1]
  i3766.m_Width = i3767[2]
  i3766.m_Height = i3767[3]
  return i3766
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3770 = root || request.c( 'TMPro.TMP_Character' )
  var i3771 = data
  i3770.m_ElementType = i3771[0]
  i3770.m_Unicode = i3771[1]
  i3770.m_GlyphIndex = i3771[2]
  i3770.m_Scale = i3771[3]
  return i3770
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3776 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3777 = data
  var i3779 = i3777[0]
  var i3778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.add(request.d('TMPro.MultipleSubstitutionRecord', i3779[i + 0]));
  }
  i3776.m_MultipleSubstitutionRecords = i3778
  var i3781 = i3777[1]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('TMPro.LigatureSubstitutionRecord', i3781[i + 0]));
  }
  i3776.m_LigatureSubstitutionRecords = i3780
  var i3783 = i3777[2]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3783[i + 0]));
  }
  i3776.m_GlyphPairAdjustmentRecords = i3782
  var i3785 = i3777[3]
  var i3784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3785[i + 0]));
  }
  i3776.m_MarkToBaseAdjustmentRecords = i3784
  var i3787 = i3777[4]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3787[i + 0]));
  }
  i3776.m_MarkToMarkAdjustmentRecords = i3786
  return i3776
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3790 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3791 = data
  i3790.m_TargetGlyphID = i3791[0]
  i3790.m_SubstituteGlyphIDs = i3791[1]
  return i3790
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3794 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3795 = data
  i3794.m_ComponentGlyphIDs = i3795[0]
  i3794.m_LigatureGlyphID = i3795[1]
  return i3794
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3799 = data
  i3798.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3799[0], i3798.m_FirstAdjustmentRecord)
  i3798.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3799[1], i3798.m_SecondAdjustmentRecord)
  i3798.m_FeatureLookupFlags = i3799[2]
  return i3798
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3800 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3801 = data
  i3800.m_GlyphIndex = i3801[0]
  i3800.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3801[1], i3800.m_GlyphValueRecord)
  return i3800
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3802 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3803 = data
  i3802.m_XPlacement = i3803[0]
  i3802.m_YPlacement = i3803[1]
  i3802.m_XAdvance = i3803[2]
  i3802.m_YAdvance = i3803[3]
  return i3802
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3806 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3807 = data
  i3806.m_BaseGlyphID = i3807[0]
  i3806.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3807[1], i3806.m_BaseGlyphAnchorPoint)
  i3806.m_MarkGlyphID = i3807[2]
  i3806.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3807[3], i3806.m_MarkPositionAdjustment)
  return i3806
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3810 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3811 = data
  i3810.m_BaseMarkGlyphID = i3811[0]
  i3810.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3811[1], i3810.m_BaseMarkGlyphAnchorPoint)
  i3810.m_CombiningMarkGlyphID = i3811[2]
  i3810.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3811[3], i3810.m_CombiningMarkPositionAdjustment)
  return i3810
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3816 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3817 = data
  request.r(i3817[0], i3817[1], 0, i3816, 'regularTypeface')
  request.r(i3817[2], i3817[3], 0, i3816, 'italicTypeface')
  return i3816
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3818 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3819 = data
  i3818.Name = i3819[0]
  i3818.PointSize = i3819[1]
  i3818.Scale = i3819[2]
  i3818.CharacterCount = i3819[3]
  i3818.LineHeight = i3819[4]
  i3818.Baseline = i3819[5]
  i3818.Ascender = i3819[6]
  i3818.CapHeight = i3819[7]
  i3818.Descender = i3819[8]
  i3818.CenterLine = i3819[9]
  i3818.SuperscriptOffset = i3819[10]
  i3818.SubscriptOffset = i3819[11]
  i3818.SubSize = i3819[12]
  i3818.Underline = i3819[13]
  i3818.UnderlineThickness = i3819[14]
  i3818.strikethrough = i3819[15]
  i3818.strikethroughThickness = i3819[16]
  i3818.TabWidth = i3819[17]
  i3818.Padding = i3819[18]
  i3818.AtlasWidth = i3819[19]
  i3818.AtlasHeight = i3819[20]
  return i3818
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3822 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3823 = data
  i3822.id = i3823[0]
  i3822.x = i3823[1]
  i3822.y = i3823[2]
  i3822.width = i3823[3]
  i3822.height = i3823[4]
  i3822.xOffset = i3823[5]
  i3822.yOffset = i3823[6]
  i3822.xAdvance = i3823[7]
  i3822.scale = i3823[8]
  return i3822
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3824 = root || request.c( 'TMPro.KerningTable' )
  var i3825 = data
  var i3827 = i3825[0]
  var i3826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.add(request.d('TMPro.KerningPair', i3827[i + 0]));
  }
  i3824.kerningPairs = i3826
  return i3824
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3830 = root || request.c( 'TMPro.KerningPair' )
  var i3831 = data
  i3830.xOffset = i3831[0]
  i3830.m_FirstGlyph = i3831[1]
  i3830.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3831[2], i3830.m_FirstGlyphAdjustments)
  i3830.m_SecondGlyph = i3831[3]
  i3830.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3831[4], i3830.m_SecondGlyphAdjustments)
  i3830.m_IgnoreSpacingAdjustments = !!i3831[5]
  return i3830
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3832 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3833 = data
  i3832.m_FaceIndex = i3833[0]
  i3832.m_FamilyName = i3833[1]
  i3832.m_StyleName = i3833[2]
  i3832.m_PointSize = i3833[3]
  i3832.m_Scale = i3833[4]
  i3832.m_UnitsPerEM = i3833[5]
  i3832.m_LineHeight = i3833[6]
  i3832.m_AscentLine = i3833[7]
  i3832.m_CapLine = i3833[8]
  i3832.m_MeanLine = i3833[9]
  i3832.m_Baseline = i3833[10]
  i3832.m_DescentLine = i3833[11]
  i3832.m_SuperscriptOffset = i3833[12]
  i3832.m_SuperscriptSize = i3833[13]
  i3832.m_SubscriptOffset = i3833[14]
  i3832.m_SubscriptSize = i3833[15]
  i3832.m_UnderlineOffset = i3833[16]
  i3832.m_UnderlineThickness = i3833[17]
  i3832.m_StrikethroughOffset = i3833[18]
  i3832.m_StrikethroughThickness = i3833[19]
  i3832.m_TabWidth = i3833[20]
  return i3832
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3835 = data
  i3834.useSafeMode = !!i3835[0]
  i3834.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3835[1], i3834.safeModeOptions)
  i3834.timeScale = i3835[2]
  i3834.unscaledTimeScale = i3835[3]
  i3834.useSmoothDeltaTime = !!i3835[4]
  i3834.maxSmoothUnscaledTime = i3835[5]
  i3834.rewindCallbackMode = i3835[6]
  i3834.showUnityEditorReport = !!i3835[7]
  i3834.logBehaviour = i3835[8]
  i3834.drawGizmos = !!i3835[9]
  i3834.defaultRecyclable = !!i3835[10]
  i3834.defaultAutoPlay = i3835[11]
  i3834.defaultUpdateType = i3835[12]
  i3834.defaultTimeScaleIndependent = !!i3835[13]
  i3834.defaultEaseType = i3835[14]
  i3834.defaultEaseOvershootOrAmplitude = i3835[15]
  i3834.defaultEasePeriod = i3835[16]
  i3834.defaultAutoKill = !!i3835[17]
  i3834.defaultLoopType = i3835[18]
  i3834.debugMode = !!i3835[19]
  i3834.debugStoreTargetId = !!i3835[20]
  i3834.showPreviewPanel = !!i3835[21]
  i3834.storeSettingsLocation = i3835[22]
  i3834.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3835[23], i3834.modules)
  i3834.createASMDEF = !!i3835[24]
  i3834.showPlayingTweens = !!i3835[25]
  i3834.showPausedTweens = !!i3835[26]
  return i3834
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3837 = data
  i3836.logBehaviour = i3837[0]
  i3836.nestedTweenFailureBehaviour = i3837[1]
  return i3836
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3839 = data
  i3838.showPanel = !!i3839[0]
  i3838.audioEnabled = !!i3839[1]
  i3838.physicsEnabled = !!i3839[2]
  i3838.physics2DEnabled = !!i3839[3]
  i3838.spriteEnabled = !!i3839[4]
  i3838.uiEnabled = !!i3839[5]
  i3838.uiToolkitEnabled = !!i3839[6]
  i3838.textMeshProEnabled = !!i3839[7]
  i3838.tk2DEnabled = !!i3839[8]
  i3838.deAudioEnabled = !!i3839[9]
  i3838.deUnityExtendedEnabled = !!i3839[10]
  i3838.epoOutlineEnabled = !!i3839[11]
  return i3838
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3840 = root || request.c( 'TMPro.TMP_Settings' )
  var i3841 = data
  i3840.assetVersion = i3841[0]
  i3840.m_TextWrappingMode = i3841[1]
  i3840.m_enableKerning = !!i3841[2]
  var i3843 = i3841[3]
  var i3842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.add(i3843[i + 0]);
  }
  i3840.m_ActiveFontFeatures = i3842
  i3840.m_enableExtraPadding = !!i3841[4]
  i3840.m_enableTintAllSprites = !!i3841[5]
  i3840.m_enableParseEscapeCharacters = !!i3841[6]
  i3840.m_EnableRaycastTarget = !!i3841[7]
  i3840.m_GetFontFeaturesAtRuntime = !!i3841[8]
  i3840.m_missingGlyphCharacter = i3841[9]
  i3840.m_ClearDynamicDataOnBuild = !!i3841[10]
  i3840.m_warningsDisabled = !!i3841[11]
  request.r(i3841[12], i3841[13], 0, i3840, 'm_defaultFontAsset')
  i3840.m_defaultFontAssetPath = i3841[14]
  i3840.m_defaultFontSize = i3841[15]
  i3840.m_defaultAutoSizeMinRatio = i3841[16]
  i3840.m_defaultAutoSizeMaxRatio = i3841[17]
  i3840.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3841[18], i3841[19] )
  i3840.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3841[20], i3841[21] )
  i3840.m_autoSizeTextContainer = !!i3841[22]
  i3840.m_IsTextObjectScaleStatic = !!i3841[23]
  var i3845 = i3841[24]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3845.length; i += 2) {
  request.r(i3845[i + 0], i3845[i + 1], 1, i3844, '')
  }
  i3840.m_fallbackFontAssets = i3844
  i3840.m_matchMaterialPreset = !!i3841[25]
  i3840.m_HideSubTextObjects = !!i3841[26]
  request.r(i3841[27], i3841[28], 0, i3840, 'm_defaultSpriteAsset')
  i3840.m_defaultSpriteAssetPath = i3841[29]
  i3840.m_enableEmojiSupport = !!i3841[30]
  i3840.m_MissingCharacterSpriteUnicode = i3841[31]
  var i3847 = i3841[32]
  var i3846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 1, i3846, '')
  }
  i3840.m_EmojiFallbackTextAssets = i3846
  i3840.m_defaultColorGradientPresetsPath = i3841[33]
  request.r(i3841[34], i3841[35], 0, i3840, 'm_defaultStyleSheet')
  i3840.m_StyleSheetsResourcePath = i3841[36]
  request.r(i3841[37], i3841[38], 0, i3840, 'm_leadingCharacters')
  request.r(i3841[39], i3841[40], 0, i3840, 'm_followingCharacters')
  i3840.m_UseModernHangulLineBreakingRules = !!i3841[41]
  return i3840
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'spriteSheet')
  var i3853 = i3851[2]
  var i3852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.add(request.d('TMPro.TMP_Sprite', i3853[i + 0]));
  }
  i3850.spriteInfoList = i3852
  var i3855 = i3851[3]
  var i3854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3855.length; i += 2) {
  request.r(i3855[i + 0], i3855[i + 1], 1, i3854, '')
  }
  i3850.fallbackSpriteAssets = i3854
  var i3857 = i3851[4]
  var i3856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.add(request.d('TMPro.TMP_SpriteCharacter', i3857[i + 0]));
  }
  i3850.m_SpriteCharacterTable = i3856
  var i3859 = i3851[5]
  var i3858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.add(request.d('TMPro.TMP_SpriteGlyph', i3859[i + 0]));
  }
  i3850.m_GlyphTable = i3858
  i3850.m_Version = i3851[6]
  i3850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3851[7], i3850.m_FaceInfo)
  request.r(i3851[8], i3851[9], 0, i3850, 'm_Material')
  return i3850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3863 = data
  i3862.name = i3863[0]
  i3862.hashCode = i3863[1]
  i3862.unicode = i3863[2]
  i3862.pivot = new pc.Vec2( i3863[3], i3863[4] )
  request.r(i3863[5], i3863[6], 0, i3862, 'sprite')
  i3862.id = i3863[7]
  i3862.x = i3863[8]
  i3862.y = i3863[9]
  i3862.width = i3863[10]
  i3862.height = i3863[11]
  i3862.xOffset = i3863[12]
  i3862.yOffset = i3863[13]
  i3862.xAdvance = i3863[14]
  i3862.scale = i3863[15]
  return i3862
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3868 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3869 = data
  i3868.m_Name = i3869[0]
  i3868.m_ElementType = i3869[1]
  i3868.m_Unicode = i3869[2]
  i3868.m_GlyphIndex = i3869[3]
  i3868.m_Scale = i3869[4]
  return i3868
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3872 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3873 = data
  request.r(i3873[0], i3873[1], 0, i3872, 'sprite')
  i3872.m_Index = i3873[2]
  i3872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3873[3], i3872.m_Metrics)
  i3872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3873[4], i3872.m_GlyphRect)
  i3872.m_Scale = i3873[5]
  i3872.m_AtlasIndex = i3873[6]
  i3872.m_ClassDefinitionType = i3873[7]
  return i3872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3875 = data
  var i3877 = i3875[0]
  var i3876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.add(request.d('TMPro.TMP_Style', i3877[i + 0]));
  }
  i3874.m_StyleList = i3876
  return i3874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3880 = root || request.c( 'TMPro.TMP_Style' )
  var i3881 = data
  i3880.m_Name = i3881[0]
  i3880.m_HashCode = i3881[1]
  i3880.m_OpeningDefinition = i3881[2]
  i3880.m_ClosingDefinition = i3881[3]
  i3880.m_OpeningTagArray = i3881[4]
  i3880.m_ClosingTagArray = i3881[5]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3883 = data
  var i3885 = i3883[0]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3885[i + 0]) );
  }
  i3882.files = i3884
  i3882.componentToPrefabIds = i3883[1]
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3889 = data
  i3888.path = i3889[0]
  request.r(i3889[1], i3889[2], 0, i3888, 'unityObject')
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3891 = data
  var i3893 = i3891[0]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3893[i + 0]) );
  }
  i3890.scriptsExecutionOrder = i3892
  var i3895 = i3891[1]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3895[i + 0]) );
  }
  i3890.sortingLayers = i3894
  var i3897 = i3891[2]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3897[i + 0]) );
  }
  i3890.cullingLayers = i3896
  i3890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3891[3], i3890.timeSettings)
  i3890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3891[4], i3890.physicsSettings)
  i3890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3891[5], i3890.physics2DSettings)
  i3890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3891[6], i3890.qualitySettings)
  i3890.enableRealtimeShadows = !!i3891[7]
  i3890.enableAutoInstancing = !!i3891[8]
  i3890.enableStaticBatching = !!i3891[9]
  i3890.enableDynamicBatching = !!i3891[10]
  i3890.lightmapEncodingQuality = i3891[11]
  i3890.desiredColorSpace = i3891[12]
  var i3899 = i3891[13]
  var i3898 = []
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.push( i3899[i + 0] );
  }
  i3890.allTags = i3898
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3903 = data
  i3902.name = i3903[0]
  i3902.value = i3903[1]
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3907 = data
  i3906.id = i3907[0]
  i3906.name = i3907[1]
  i3906.value = i3907[2]
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3911 = data
  i3910.id = i3911[0]
  i3910.name = i3911[1]
  return i3910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3913 = data
  i3912.fixedDeltaTime = i3913[0]
  i3912.maximumDeltaTime = i3913[1]
  i3912.timeScale = i3913[2]
  i3912.maximumParticleTimestep = i3913[3]
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3915 = data
  i3914.gravity = new pc.Vec3( i3915[0], i3915[1], i3915[2] )
  i3914.defaultSolverIterations = i3915[3]
  i3914.bounceThreshold = i3915[4]
  i3914.autoSyncTransforms = !!i3915[5]
  i3914.autoSimulation = !!i3915[6]
  var i3917 = i3915[7]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3917[i + 0]) );
  }
  i3914.collisionMatrix = i3916
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3921 = data
  i3920.enabled = !!i3921[0]
  i3920.layerId = i3921[1]
  i3920.otherLayerId = i3921[2]
  return i3920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3923 = data
  request.r(i3923[0], i3923[1], 0, i3922, 'material')
  i3922.gravity = new pc.Vec2( i3923[2], i3923[3] )
  i3922.positionIterations = i3923[4]
  i3922.velocityIterations = i3923[5]
  i3922.velocityThreshold = i3923[6]
  i3922.maxLinearCorrection = i3923[7]
  i3922.maxAngularCorrection = i3923[8]
  i3922.maxTranslationSpeed = i3923[9]
  i3922.maxRotationSpeed = i3923[10]
  i3922.baumgarteScale = i3923[11]
  i3922.baumgarteTOIScale = i3923[12]
  i3922.timeToSleep = i3923[13]
  i3922.linearSleepTolerance = i3923[14]
  i3922.angularSleepTolerance = i3923[15]
  i3922.defaultContactOffset = i3923[16]
  i3922.autoSimulation = !!i3923[17]
  i3922.queriesHitTriggers = !!i3923[18]
  i3922.queriesStartInColliders = !!i3923[19]
  i3922.callbacksOnDisable = !!i3923[20]
  i3922.reuseCollisionCallbacks = !!i3923[21]
  i3922.autoSyncTransforms = !!i3923[22]
  var i3925 = i3923[23]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3925[i + 0]) );
  }
  i3922.collisionMatrix = i3924
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3929 = data
  i3928.enabled = !!i3929[0]
  i3928.layerId = i3929[1]
  i3928.otherLayerId = i3929[2]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3931 = data
  var i3933 = i3931[0]
  var i3932 = []
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3933[i + 0]) );
  }
  i3930.qualityLevels = i3932
  var i3935 = i3931[1]
  var i3934 = []
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.push( i3935[i + 0] );
  }
  i3930.names = i3934
  i3930.shadows = i3931[2]
  i3930.anisotropicFiltering = i3931[3]
  i3930.antiAliasing = i3931[4]
  i3930.lodBias = i3931[5]
  i3930.shadowCascades = i3931[6]
  i3930.shadowDistance = i3931[7]
  i3930.shadowmaskMode = i3931[8]
  i3930.shadowProjection = i3931[9]
  i3930.shadowResolution = i3931[10]
  i3930.softParticles = !!i3931[11]
  i3930.softVegetation = !!i3931[12]
  i3930.activeColorSpace = i3931[13]
  i3930.desiredColorSpace = i3931[14]
  i3930.masterTextureLimit = i3931[15]
  i3930.maxQueuedFrames = i3931[16]
  i3930.particleRaycastBudget = i3931[17]
  i3930.pixelLightCount = i3931[18]
  i3930.realtimeReflectionProbes = !!i3931[19]
  i3930.shadowCascade2Split = i3931[20]
  i3930.shadowCascade4Split = new pc.Vec3( i3931[21], i3931[22], i3931[23] )
  i3930.streamingMipmapsActive = !!i3931[24]
  i3930.vSyncCount = i3931[25]
  i3930.asyncUploadBufferSize = i3931[26]
  i3930.asyncUploadTimeSlice = i3931[27]
  i3930.billboardsFaceCameraPosition = !!i3931[28]
  i3930.shadowNearPlaneOffset = i3931[29]
  i3930.streamingMipmapsMemoryBudget = i3931[30]
  i3930.maximumLODLevel = i3931[31]
  i3930.streamingMipmapsAddAllCameras = !!i3931[32]
  i3930.streamingMipmapsMaxLevelReduction = i3931[33]
  i3930.streamingMipmapsRenderersPerFrame = i3931[34]
  i3930.resolutionScalingFixedDPIFactor = i3931[35]
  i3930.streamingMipmapsMaxFileIORequests = i3931[36]
  i3930.currentQualityLevel = i3931[37]
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3941 = data
  i3940.weight = i3941[0]
  i3940.vertices = i3941[1]
  i3940.normals = i3941[2]
  i3940.tangents = i3941[3]
  return i3940
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3942 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3943 = data
  i3942.m_XCoordinate = i3943[0]
  i3942.m_YCoordinate = i3943[1]
  return i3942
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3944 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3945 = data
  i3944.m_XPositionAdjustment = i3945[0]
  i3944.m_YPositionAdjustment = i3945[1]
  return i3944
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3946 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3947 = data
  i3946.xPlacement = i3947[0]
  i3946.yPlacement = i3947[1]
  i3946.xAdvance = i3947[2]
  i3946.yAdvance = i3947[3]
  return i3946
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

Deserializers.buildID = "a20cafe3-58af-485a-bfb0-6f84d3693485";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


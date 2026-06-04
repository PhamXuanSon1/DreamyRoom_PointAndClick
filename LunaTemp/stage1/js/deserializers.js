var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointSpring' )
  var i481 = data
  i480.spring = i481[0]
  i480.damper = i481[1]
  i480.targetPosition = i481[2]
  return i480
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointMotor' )
  var i483 = data
  i482.m_TargetVelocity = i483[0]
  i482.m_Force = i483[1]
  i482.m_FreeSpin = i483[2]
  return i482
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointLimits' )
  var i485 = data
  i484.m_Min = i485[0]
  i484.m_Max = i485[1]
  i484.m_Bounciness = i485[2]
  i484.m_BounceMinVelocity = i485[3]
  i484.m_ContactDistance = i485[4]
  i484.minBounce = i485[5]
  i484.maxBounce = i485[6]
  return i484
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointDrive' )
  var i487 = data
  i486.m_PositionSpring = i487[0]
  i486.m_PositionDamper = i487[1]
  i486.m_MaximumForce = i487[2]
  i486.m_UseAcceleration = i487[3]
  return i486
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i489 = data
  i488.m_Spring = i489[0]
  i488.m_Damper = i489[1]
  return i488
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i491 = data
  i490.m_Limit = i491[0]
  i490.m_Bounciness = i491[1]
  i490.m_ContactDistance = i491[2]
  return i490
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i493 = data
  i492.m_ExtremumSlip = i493[0]
  i492.m_ExtremumValue = i493[1]
  i492.m_AsymptoteSlip = i493[2]
  i492.m_AsymptoteValue = i493[3]
  i492.m_Stiffness = i493[4]
  return i492
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i495 = data
  i494.m_LowerAngle = i495[0]
  i494.m_UpperAngle = i495[1]
  return i494
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i497 = data
  i496.m_MotorSpeed = i497[0]
  i496.m_MaximumMotorTorque = i497[1]
  return i496
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i499 = data
  i498.m_DampingRatio = i499[0]
  i498.m_Frequency = i499[1]
  i498.m_Angle = i499[2]
  return i498
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i501 = data
  i500.m_LowerTranslation = i501[0]
  i500.m_UpperTranslation = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i503 = data
  i502.position = new pc.Vec3( i503[0], i503[1], i503[2] )
  i502.scale = new pc.Vec3( i503[3], i503[4], i503[5] )
  i502.rotation = new pc.Quat(i503[6], i503[7], i503[8], i503[9])
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'animatorController')
  request.r(i505[2], i505[3], 0, i504, 'avatar')
  i504.updateMode = i505[4]
  i504.hasTransformHierarchy = !!i505[5]
  i504.applyRootMotion = !!i505[6]
  var i507 = i505[7]
  var i506 = []
  for(var i = 0; i < i507.length; i += 2) {
  request.r(i507[i + 0], i507[i + 1], 2, i506, '')
  }
  i504.humanBones = i506
  i504.enabled = !!i505[8]
  return i504
}

Deserializers["FailMaker"] = function (request, data, root) {
  var i510 = root || request.c( 'FailMaker' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'tf')
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i513 = data
  i512.color = new pc.Color(i513[0], i513[1], i513[2], i513[3])
  request.r(i513[4], i513[5], 0, i512, 'sprite')
  i512.flipX = !!i513[6]
  i512.flipY = !!i513[7]
  i512.drawMode = i513[8]
  i512.size = new pc.Vec2( i513[9], i513[10] )
  i512.tileMode = i513[11]
  i512.adaptiveModeThreshold = i513[12]
  i512.maskInteraction = i513[13]
  i512.spriteSortPoint = i513[14]
  i512.enabled = !!i513[15]
  request.r(i513[16], i513[17], 0, i512, 'sharedMaterial')
  var i515 = i513[18]
  var i514 = []
  for(var i = 0; i < i515.length; i += 2) {
  request.r(i515[i + 0], i515[i + 1], 2, i514, '')
  }
  i512.sharedMaterials = i514
  i512.receiveShadows = !!i513[19]
  i512.shadowCastingMode = i513[20]
  i512.sortingLayerID = i513[21]
  i512.sortingOrder = i513[22]
  i512.lightmapIndex = i513[23]
  i512.lightmapSceneIndex = i513[24]
  i512.lightmapScaleOffset = new pc.Vec4( i513[25], i513[26], i513[27], i513[28] )
  i512.lightProbeUsage = i513[29]
  i512.reflectionProbeUsage = i513[30]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i519 = data
  i518.name = i519[0]
  i518.tagId = i519[1]
  i518.enabled = !!i519[2]
  i518.isStatic = !!i519[3]
  i518.layer = i519[4]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i520 = root || new pc.UnityMaterial()
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'shader')
  i520.renderQueue = i521[3]
  i520.enableInstancing = !!i521[4]
  var i523 = i521[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i523[i + 0]) );
  }
  i520.floatParameters = i522
  var i525 = i521[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i525[i + 0]) );
  }
  i520.colorParameters = i524
  var i527 = i521[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i527[i + 0]) );
  }
  i520.vectorParameters = i526
  var i529 = i521[8]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i529[i + 0]) );
  }
  i520.textureParameters = i528
  var i531 = i521[9]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i531[i + 0]) );
  }
  i520.materialFlags = i530
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = new pc.Color(i539[1], i539[2], i539[3], i539[4])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = new pc.Vec4( i543[1], i543[2], i543[3], i543[4] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'value')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i551 = data
  i550.name = i551[0]
  i550.enabled = !!i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i553 = data
  i552.name = i553[0]
  i552.width = i553[1]
  i552.height = i553[2]
  i552.mipmapCount = i553[3]
  i552.anisoLevel = i553[4]
  i552.filterMode = i553[5]
  i552.hdr = !!i553[6]
  i552.format = i553[7]
  i552.wrapMode = i553[8]
  i552.alphaIsTransparency = !!i553[9]
  i552.alphaSource = i553[10]
  i552.graphicsFormat = i553[11]
  i552.sRGBTexture = !!i553[12]
  i552.desiredColorSpace = i553[13]
  i552.wrapU = i553[14]
  i552.wrapV = i553[15]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i555 = data
  i554.name = i555[0]
  i554.halfPrecision = !!i555[1]
  i554.useSimplification = !!i555[2]
  i554.useUInt32IndexFormat = !!i555[3]
  i554.vertexCount = i555[4]
  i554.aabb = i555[5]
  var i557 = i555[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( !!i557[i + 0] );
  }
  i554.streams = i556
  i554.vertices = i555[7]
  var i559 = i555[8]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i559[i + 0]) );
  }
  i554.subMeshes = i558
  var i561 = i555[9]
  var i560 = []
  for(var i = 0; i < i561.length; i += 16) {
    i560.push( new pc.Mat4().setData(i561[i + 0], i561[i + 1], i561[i + 2], i561[i + 3],  i561[i + 4], i561[i + 5], i561[i + 6], i561[i + 7],  i561[i + 8], i561[i + 9], i561[i + 10], i561[i + 11],  i561[i + 12], i561[i + 13], i561[i + 14], i561[i + 15]) );
  }
  i554.bindposes = i560
  var i563 = i555[10]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i563[i + 0]) );
  }
  i554.blendShapes = i562
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i569 = data
  i568.triangles = i569[0]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i575 = data
  i574.name = i575[0]
  var i577 = i575[1]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i577[i + 0]) );
  }
  i574.frames = i576
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i579 = data
  i578.name = i579[0]
  i578.index = i579[1]
  i578.startup = !!i579[2]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i581 = data
  i580.aspect = i581[0]
  i580.orthographic = !!i581[1]
  i580.orthographicSize = i581[2]
  i580.backgroundColor = new pc.Color(i581[3], i581[4], i581[5], i581[6])
  i580.nearClipPlane = i581[7]
  i580.farClipPlane = i581[8]
  i580.fieldOfView = i581[9]
  i580.depth = i581[10]
  i580.clearFlags = i581[11]
  i580.cullingMask = i581[12]
  i580.rect = i581[13]
  request.r(i581[14], i581[15], 0, i580, 'targetTexture')
  i580.usePhysicalProperties = !!i581[16]
  i580.focalLength = i581[17]
  i580.sensorSize = new pc.Vec2( i581[18], i581[19] )
  i580.lensShift = new pc.Vec2( i581[20], i581[21] )
  i580.gateFit = i581[22]
  i580.commandBufferCount = i581[23]
  i580.cameraType = i581[24]
  i580.enabled = !!i581[25]
  return i580
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i583 = data
  i582.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i583[0] )
  i582.m_MaxRayIntersections = i583[1]
  return i582
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_FirstSelected')
  i584.m_sendNavigationEvents = !!i585[2]
  i584.m_DragThreshold = i585[3]
  return i584
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i587 = data
  i586.m_HorizontalAxis = i587[0]
  i586.m_VerticalAxis = i587[1]
  i586.m_SubmitButton = i587[2]
  i586.m_CancelButton = i587[3]
  i586.m_InputActionsPerSecond = i587[4]
  i586.m_RepeatDelay = i587[5]
  i586.m_ForceModuleActive = !!i587[6]
  i586.m_SendPointerHoverToParent = !!i587[7]
  return i586
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i588 = root || request.c( 'Ply_Pool' )
  var i589 = data
  var i591 = i589[0]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Ply_Pool+PoolAmount', i591[i + 0]) );
  }
  i588.poolAmounts = i590
  return i588
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i594 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i595 = data
  i594.type = i595[0]
  i594.amount = i595[1]
  request.r(i595[2], i595[3], 0, i594, 'gameUnit')
  return i594
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i596 = root || request.c( 'Ply_SoundManager' )
  var i597 = data
  i596.audioClips = request.d('FxAudio', i597[0], i596.audioClips)
  request.r(i597[1], i597[2], 0, i596, 'sound')
  return i596
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i598 = root || request.c( 'FxAudio' )
  var i599 = data
  i598.ClickBox = request.d('SoundData', i599[0], i598.ClickBox)
  return i598
}

Deserializers["SoundData"] = function (request, data, root) {
  var i600 = root || request.c( 'SoundData' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'clip')
  i600.repeatCount = i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'clip')
  request.r(i603[2], i603[3], 0, i602, 'outputAudioMixerGroup')
  i602.playOnAwake = !!i603[4]
  i602.loop = !!i603[5]
  i602.time = i603[6]
  i602.volume = i603[7]
  i602.pitch = i603[8]
  i602.enabled = !!i603[9]
  return i602
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i604 = root || request.c( 'ItemManager' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.allSpots = i606
  request.r(i605[1], i605[2], 0, i604, 'progressText')
  i604.totalSpots = i605[3]
  return i604
}

Deserializers["InputManager"] = function (request, data, root) {
  var i610 = root || request.c( 'InputManager' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'mainCamera')
  request.r(i611[2], i611[3], 0, i610, 'itemManager')
  request.r(i611[4], i611[5], 0, i610, 'failMarkerPrefab')
  i610.poolSize = i611[6]
  i610.failMarkerZOffset = i611[7]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i613 = data
  i612.center = new pc.Vec3( i613[0], i613[1], i613[2] )
  i612.size = new pc.Vec3( i613[3], i613[4], i613[5] )
  i612.enabled = !!i613[6]
  i612.isTrigger = !!i613[7]
  request.r(i613[8], i613[9], 0, i612, 'material')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'additionalVertexStreams')
  i614.enabled = !!i615[2]
  request.r(i615[3], i615[4], 0, i614, 'sharedMaterial')
  var i617 = i615[5]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.sharedMaterials = i616
  i614.receiveShadows = !!i615[6]
  i614.shadowCastingMode = i615[7]
  i614.sortingLayerID = i615[8]
  i614.sortingOrder = i615[9]
  i614.lightmapIndex = i615[10]
  i614.lightmapSceneIndex = i615[11]
  i614.lightmapScaleOffset = new pc.Vec4( i615[12], i615[13], i615[14], i615[15] )
  i614.lightProbeUsage = i615[16]
  i614.reflectionProbeUsage = i615[17]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'sharedMesh')
  return i618
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i620 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i621 = data
  i620.loop = !!i621[0]
  i620.timeScale = i621[1]
  request.r(i621[2], i621[3], 0, i620, 'skeletonDataAsset')
  i620.initialSkinName = i621[4]
  i620.fixPrefabOverrideViaMeshFilter = i621[5]
  i620.initialFlipX = !!i621[6]
  i620.initialFlipY = !!i621[7]
  i620.updateWhenInvisible = i621[8]
  i620.zSpacing = i621[9]
  i620.useClipping = !!i621[10]
  i620.immutableTriangles = !!i621[11]
  i620.pmaVertexColors = !!i621[12]
  i620.clearStateOnDisable = !!i621[13]
  i620.tintBlack = !!i621[14]
  i620.singleSubmesh = !!i621[15]
  i620.fixDrawOrder = !!i621[16]
  i620.addNormals = !!i621[17]
  i620.calculateTangents = !!i621[18]
  i620.maskInteraction = i621[19]
  i620.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i621[20], i620.maskMaterials)
  i620.disableRenderingOnOverride = !!i621[21]
  i620._animationName = i621[22]
  var i623 = i621[23]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i620.separatorSlotNames = i622
  return i620
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i624 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i625 = data
  var i627 = i625[0]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.materialsMaskDisabled = i626
  var i629 = i625[1]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i624.materialsInsideMask = i628
  var i631 = i625[2]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i624.materialsOutsideMask = i630
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i635 = data
  i634.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i635[0], i634.main)
  i634.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i635[1], i634.colorBySpeed)
  i634.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i635[2], i634.colorOverLifetime)
  i634.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i635[3], i634.emission)
  i634.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i635[4], i634.rotationBySpeed)
  i634.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i635[5], i634.rotationOverLifetime)
  i634.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i635[6], i634.shape)
  i634.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i635[7], i634.sizeBySpeed)
  i634.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i635[8], i634.sizeOverLifetime)
  i634.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i635[9], i634.textureSheetAnimation)
  i634.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i635[10], i634.velocityOverLifetime)
  i634.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i635[11], i634.noise)
  i634.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i635[12], i634.inheritVelocity)
  i634.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i635[13], i634.forceOverLifetime)
  i634.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i635[14], i634.limitVelocityOverLifetime)
  i634.useAutoRandomSeed = !!i635[15]
  i634.randomSeed = i635[16]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemMain()
  var i637 = data
  i636.duration = i637[0]
  i636.loop = !!i637[1]
  i636.prewarm = !!i637[2]
  i636.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.startDelay)
  i636.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[4], i636.startLifetime)
  i636.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[5], i636.startSpeed)
  i636.startSize3D = !!i637[6]
  i636.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[7], i636.startSizeX)
  i636.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[8], i636.startSizeY)
  i636.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.startSizeZ)
  i636.startRotation3D = !!i637[10]
  i636.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[11], i636.startRotationX)
  i636.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[12], i636.startRotationY)
  i636.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[13], i636.startRotationZ)
  i636.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[14], i636.startColor)
  i636.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[15], i636.gravityModifier)
  i636.simulationSpace = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'customSimulationSpace')
  i636.simulationSpeed = i637[19]
  i636.useUnscaledTime = !!i637[20]
  i636.scalingMode = i637[21]
  i636.playOnAwake = !!i637[22]
  i636.maxParticles = i637[23]
  i636.emitterVelocityMode = i637[24]
  i636.stopAction = i637[25]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxCurve()
  var i639 = data
  i638.mode = i639[0]
  i638.curveMin = new pc.AnimationCurve( { keys_flow: i639[1] } )
  i638.curveMax = new pc.AnimationCurve( { keys_flow: i639[2] } )
  i638.curveMultiplier = i639[3]
  i638.constantMin = i639[4]
  i638.constantMax = i639[5]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxGradient()
  var i641 = data
  i640.mode = i641[0]
  i640.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[1], i640.gradientMin)
  i640.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[2], i640.gradientMax)
  i640.colorMin = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.colorMax = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i643 = data
  i642.mode = i643[0]
  var i645 = i643[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i645[i + 0]) );
  }
  i642.colorKeys = i644
  var i647 = i643[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i647[i + 0]) );
  }
  i642.alphaKeys = i646
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemColorBySpeed()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i649[1], i648.color)
  i648.range = new pc.Vec2( i649[2], i649[3] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i653 = data
  i652.color = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.time = i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i657 = data
  i656.alpha = i657[0]
  i656.time = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemColorOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[1], i658.color)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemEmitter()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.rateOverTime)
  i660.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.rateOverDistance)
  var i663 = i661[3]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i663[i + 0]) );
  }
  i660.bursts = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemBurst()
  var i667 = data
  i666.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[0], i666.count)
  i666.cycleCount = i667[1]
  i666.minCount = i667[2]
  i666.maxCount = i667[3]
  i666.repeatInterval = i667[4]
  i666.time = i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationBySpeed()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  i668.range = new pc.Vec2( i669[5], i669[6] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationOverLifetime()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemShape()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.shapeType = i673[1]
  i672.randomDirectionAmount = i673[2]
  i672.sphericalDirectionAmount = i673[3]
  i672.randomPositionAmount = i673[4]
  i672.alignToDirection = !!i673[5]
  i672.radius = i673[6]
  i672.radiusMode = i673[7]
  i672.radiusSpread = i673[8]
  i672.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[9], i672.radiusSpeed)
  i672.radiusThickness = i673[10]
  i672.angle = i673[11]
  i672.length = i673[12]
  i672.boxThickness = new pc.Vec3( i673[13], i673[14], i673[15] )
  i672.meshShapeType = i673[16]
  request.r(i673[17], i673[18], 0, i672, 'mesh')
  request.r(i673[19], i673[20], 0, i672, 'meshRenderer')
  request.r(i673[21], i673[22], 0, i672, 'skinnedMeshRenderer')
  i672.useMeshMaterialIndex = !!i673[23]
  i672.meshMaterialIndex = i673[24]
  i672.useMeshColors = !!i673[25]
  i672.normalOffset = i673[26]
  i672.arc = i673[27]
  i672.arcMode = i673[28]
  i672.arcSpread = i673[29]
  i672.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[30], i672.arcSpeed)
  i672.donutRadius = i673[31]
  i672.position = new pc.Vec3( i673[32], i673[33], i673[34] )
  i672.rotation = new pc.Vec3( i673[35], i673[36], i673[37] )
  i672.scale = new pc.Vec3( i673[38], i673[39], i673[40] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeBySpeed()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  i674.range = new pc.Vec2( i675[5], i675[6] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.mode = i679[1]
  i678.animation = i679[2]
  i678.numTilesX = i679[3]
  i678.numTilesY = i679[4]
  i678.useRandomRow = !!i679[5]
  i678.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[6], i678.frameOverTime)
  i678.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[7], i678.startFrame)
  i678.cycleCount = i679[8]
  i678.rowIndex = i679[9]
  i678.flipU = i679[10]
  i678.flipV = i679[11]
  i678.spriteCount = i679[12]
  var i681 = i679[13]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.sprites = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.radial)
  i684.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[5], i684.speedModifier)
  i684.space = i685[6]
  i684.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[7], i684.orbitalX)
  i684.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[8], i684.orbitalY)
  i684.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[9], i684.orbitalZ)
  i684.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[10], i684.orbitalOffsetX)
  i684.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.orbitalOffsetY)
  i684.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[12], i684.orbitalOffsetZ)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemNoise()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.separateAxes = !!i687[1]
  i686.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.strengthX)
  i686.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.strengthY)
  i686.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.strengthZ)
  i686.frequency = i687[5]
  i686.damping = !!i687[6]
  i686.octaveCount = i687[7]
  i686.octaveMultiplier = i687[8]
  i686.octaveScale = i687[9]
  i686.quality = i687[10]
  i686.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.scrollSpeed)
  i686.scrollSpeedMultiplier = i687[12]
  i686.remapEnabled = !!i687[13]
  i686.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[14], i686.remapX)
  i686.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.remapY)
  i686.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[16], i686.remapZ)
  i686.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[17], i686.positionAmount)
  i686.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[18], i686.rotationAmount)
  i686.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[19], i686.sizeAmount)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemInheritVelocity()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.mode = i689[1]
  i688.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.curve)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemForceOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.space = i691[4]
  i690.randomized = !!i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.limit)
  i692.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.limitX)
  i692.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.limitY)
  i692.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.limitZ)
  i692.dampen = i693[5]
  i692.separateAxes = !!i693[6]
  i692.space = i693[7]
  i692.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[8], i692.drag)
  i692.multiplyDragByParticleSize = !!i693[9]
  i692.multiplyDragByParticleVelocity = !!i693[10]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'mesh')
  i694.meshCount = i695[2]
  i694.activeVertexStreamsCount = i695[3]
  i694.alignment = i695[4]
  i694.renderMode = i695[5]
  i694.sortMode = i695[6]
  i694.lengthScale = i695[7]
  i694.velocityScale = i695[8]
  i694.cameraVelocityScale = i695[9]
  i694.normalDirection = i695[10]
  i694.sortingFudge = i695[11]
  i694.minParticleSize = i695[12]
  i694.maxParticleSize = i695[13]
  i694.pivot = new pc.Vec3( i695[14], i695[15], i695[16] )
  request.r(i695[17], i695[18], 0, i694, 'trailMaterial')
  i694.applyActiveColorSpace = !!i695[19]
  i694.enabled = !!i695[20]
  request.r(i695[21], i695[22], 0, i694, 'sharedMaterial')
  var i697 = i695[23]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.sharedMaterials = i696
  i694.receiveShadows = !!i695[24]
  i694.shadowCastingMode = i695[25]
  i694.sortingLayerID = i695[26]
  i694.sortingOrder = i695[27]
  i694.lightmapIndex = i695[28]
  i694.lightmapSceneIndex = i695[29]
  i694.lightmapScaleOffset = new pc.Vec4( i695[30], i695[31], i695[32], i695[33] )
  i694.lightProbeUsage = i695[34]
  i694.reflectionProbeUsage = i695[35]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i699 = data
  i698.ambientIntensity = i699[0]
  i698.reflectionIntensity = i699[1]
  i698.ambientMode = i699[2]
  i698.ambientLight = new pc.Color(i699[3], i699[4], i699[5], i699[6])
  i698.ambientSkyColor = new pc.Color(i699[7], i699[8], i699[9], i699[10])
  i698.ambientGroundColor = new pc.Color(i699[11], i699[12], i699[13], i699[14])
  i698.ambientEquatorColor = new pc.Color(i699[15], i699[16], i699[17], i699[18])
  i698.fogColor = new pc.Color(i699[19], i699[20], i699[21], i699[22])
  i698.fogEndDistance = i699[23]
  i698.fogStartDistance = i699[24]
  i698.fogDensity = i699[25]
  i698.fog = !!i699[26]
  request.r(i699[27], i699[28], 0, i698, 'skybox')
  i698.fogMode = i699[29]
  var i701 = i699[30]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i701[i + 0]) );
  }
  i698.lightmaps = i700
  i698.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i699[31], i698.lightProbes)
  i698.lightmapsMode = i699[32]
  i698.mixedBakeMode = i699[33]
  i698.environmentLightingMode = i699[34]
  i698.ambientProbe = new pc.SphericalHarmonicsL2(i699[35])
  i698.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i699[36])
  i698.useReferenceAmbientProbe = !!i699[37]
  request.r(i699[38], i699[39], 0, i698, 'customReflection')
  request.r(i699[40], i699[41], 0, i698, 'defaultReflection')
  i698.defaultReflectionMode = i699[42]
  i698.defaultReflectionResolution = i699[43]
  i698.sunLightObjectId = i699[44]
  i698.pixelLightCount = i699[45]
  i698.defaultReflectionHDR = !!i699[46]
  i698.hasLightDataAsset = !!i699[47]
  i698.hasManualGenerate = !!i699[48]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'lightmapColor')
  request.r(i705[2], i705[3], 0, i704, 'lightmapDirection')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i706 = root || new UnityEngine.LightProbes()
  var i707 = data
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i717[i + 0]));
  }
  i714.ShaderCompilationErrors = i716
  i714.name = i715[1]
  i714.guid = i715[2]
  var i719 = i715[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.shaderDefinedKeywords = i718
  var i721 = i715[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i721[i + 0]) );
  }
  i714.passes = i720
  var i723 = i715[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i723[i + 0]) );
  }
  i714.usePasses = i722
  var i725 = i715[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i725[i + 0]) );
  }
  i714.defaultParameterValues = i724
  request.r(i715[7], i715[8], 0, i714, 'unityFallbackShader')
  i714.readDepth = !!i715[9]
  i714.hasDepthOnlyPass = !!i715[10]
  i714.isCreatedByShaderGraph = !!i715[11]
  i714.disableBatching = !!i715[12]
  i714.compiled = !!i715[13]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i729 = data
  i728.shaderName = i729[0]
  i728.errorMessage = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i732 = root || new pc.UnityShaderPass()
  var i733 = data
  i732.id = i733[0]
  i732.subShaderIndex = i733[1]
  i732.name = i733[2]
  i732.passType = i733[3]
  i732.grabPassTextureName = i733[4]
  i732.usePass = !!i733[5]
  i732.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[6], i732.zTest)
  i732.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[7], i732.zWrite)
  i732.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[8], i732.culling)
  i732.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[9], i732.blending)
  i732.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[10], i732.alphaBlending)
  i732.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[11], i732.colorWriteMask)
  i732.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[12], i732.offsetUnits)
  i732.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[13], i732.offsetFactor)
  i732.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[14], i732.stencilRef)
  i732.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[15], i732.stencilReadMask)
  i732.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[16], i732.stencilWriteMask)
  i732.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[17], i732.stencilOp)
  i732.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[18], i732.stencilOpFront)
  i732.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[19], i732.stencilOpBack)
  var i735 = i733[20]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i735[i + 0]) );
  }
  i732.tags = i734
  var i737 = i733[21]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.passDefinedKeywords = i736
  var i739 = i733[22]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i739[i + 0]) );
  }
  i732.passDefinedKeywordGroups = i738
  var i741 = i733[23]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i741[i + 0]) );
  }
  i732.variants = i740
  var i743 = i733[24]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i732.excludedVariants = i742
  i732.hasDepthReader = !!i733[25]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i745 = data
  i744.val = i745[0]
  i744.name = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i747 = data
  i746.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[0], i746.src)
  i746.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[1], i746.dst)
  i746.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[2], i746.op)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i749 = data
  i748.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.pass)
  i748.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.fail)
  i748.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.zFail)
  i748.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[3], i748.comp)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.keywords = i758
  i756.hasDiscard = !!i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i763 = data
  i762.passId = i763[0]
  i762.subShaderIndex = i763[1]
  var i765 = i763[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i762.keywords = i764
  i762.vertexProgram = i763[3]
  i762.fragmentProgram = i763[4]
  i762.exportedForWebGl2 = !!i763[5]
  i762.readDepth = !!i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'shader')
  i768.pass = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i773 = data
  i772.name = i773[0]
  i772.type = i773[1]
  i772.value = new pc.Vec4( i773[2], i773[3], i773[4], i773[5] )
  i772.textureValue = i773[6]
  i772.shaderPropertyFlag = i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'texture')
  i774.aabb = i775[3]
  i774.vertices = i775[4]
  i774.triangles = i775[5]
  i774.textureRect = UnityEngine.Rect.MinMaxRect(i775[6], i775[7], i775[8], i775[9])
  i774.packedRect = UnityEngine.Rect.MinMaxRect(i775[10], i775[11], i775[12], i775[13])
  i774.border = new pc.Vec4( i775[14], i775[15], i775[16], i775[17] )
  i774.transparency = i775[18]
  i774.bounds = i775[19]
  i774.pixelsPerUnit = i775[20]
  i774.textureWidth = i775[21]
  i774.textureHeight = i775[22]
  i774.nativeSize = new pc.Vec2( i775[23], i775[24] )
  i774.pivot = new pc.Vec2( i775[25], i775[26] )
  i774.textureRectOffset = new pc.Vec2( i775[27], i775[28] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i777 = data
  i776.name = i777[0]
  i776.wrapMode = i777[1]
  i776.isLooping = !!i777[2]
  i776.length = i777[3]
  var i779 = i777[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i779[i + 0]) );
  }
  i776.curves = i778
  var i781 = i777[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i781[i + 0]) );
  }
  i776.events = i780
  i776.halfPrecision = !!i777[6]
  i776._frameRate = i777[7]
  i776.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i777[8], i776.localBounds)
  i776.hasMuscleCurves = !!i777[9]
  var i783 = i777[10]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i776.clipMuscleConstant = i782
  i776.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i777[11], i776.clipBindingConstant)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i787 = data
  i786.path = i787[0]
  i786.hash = i787[1]
  i786.componentType = i787[2]
  i786.property = i787[3]
  i786.keys = i787[4]
  var i789 = i787[5]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i789[i + 0]) );
  }
  i786.objectReferenceKeys = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i793 = data
  i792.time = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'value')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i797 = data
  i796.functionName = i797[0]
  i796.floatParameter = i797[1]
  i796.intParameter = i797[2]
  i796.stringParameter = i797[3]
  request.r(i797[4], i797[5], 0, i796, 'objectReferenceParameter')
  i796.time = i797[6]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i799 = data
  i798.center = new pc.Vec3( i799[0], i799[1], i799[2] )
  i798.extends = new pc.Vec3( i799[3], i799[4], i799[5] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i802.genericBindings = i804
  var i807 = i803[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i802.pptrCurveMapping = i806
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i809 = data
  i808.name = i809[0]
  var i811 = i809[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i811[i + 0]) );
  }
  i808.layers = i810
  var i813 = i809[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i813[i + 0]) );
  }
  i808.parameters = i812
  i808.animationClips = i809[3]
  i808.avatarUnsupported = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i817 = data
  i816.name = i817[0]
  i816.defaultWeight = i817[1]
  i816.blendingMode = i817[2]
  i816.avatarMask = i817[3]
  i816.syncedLayerIndex = i817[4]
  i816.syncedLayerAffectsTiming = !!i817[5]
  i816.syncedLayers = i817[6]
  i816.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i817[7], i816.stateMachine)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i819 = data
  i818.id = i819[0]
  i818.name = i819[1]
  i818.path = i819[2]
  var i821 = i819[3]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i821[i + 0]) );
  }
  i818.states = i820
  var i823 = i819[4]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i823[i + 0]) );
  }
  i818.machines = i822
  var i825 = i819[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i825[i + 0]) );
  }
  i818.entryStateTransitions = i824
  var i827 = i819[6]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i827[i + 0]) );
  }
  i818.exitStateTransitions = i826
  var i829 = i819[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i829[i + 0]) );
  }
  i818.anyStateTransitions = i828
  i818.defaultStateId = i819[8]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i833 = data
  i832.id = i833[0]
  i832.name = i833[1]
  i832.cycleOffset = i833[2]
  i832.cycleOffsetParameter = i833[3]
  i832.cycleOffsetParameterActive = !!i833[4]
  i832.mirror = !!i833[5]
  i832.mirrorParameter = i833[6]
  i832.mirrorParameterActive = !!i833[7]
  i832.motionId = i833[8]
  i832.nameHash = i833[9]
  i832.fullPathHash = i833[10]
  i832.speed = i833[11]
  i832.speedParameter = i833[12]
  i832.speedParameterActive = !!i833[13]
  i832.tag = i833[14]
  i832.tagHash = i833[15]
  i832.writeDefaultValues = !!i833[16]
  var i835 = i833[17]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i832.behaviours = i834
  var i837 = i833[18]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i837[i + 0]) );
  }
  i832.transitions = i836
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i843 = data
  i842.fullPath = i843[0]
  i842.canTransitionToSelf = !!i843[1]
  i842.duration = i843[2]
  i842.exitTime = i843[3]
  i842.hasExitTime = !!i843[4]
  i842.hasFixedDuration = !!i843[5]
  i842.interruptionSource = i843[6]
  i842.offset = i843[7]
  i842.orderedInterruption = !!i843[8]
  i842.destinationStateId = i843[9]
  i842.isExit = !!i843[10]
  i842.mute = !!i843[11]
  i842.solo = !!i843[12]
  var i845 = i843[13]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i845[i + 0]) );
  }
  i842.conditions = i844
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i851 = data
  i850.destinationStateId = i851[0]
  i850.isExit = !!i851[1]
  i850.mute = !!i851[2]
  i850.solo = !!i851[3]
  var i853 = i851[4]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i853[i + 0]) );
  }
  i850.conditions = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i857 = data
  i856.defaultBool = !!i857[0]
  i856.defaultFloat = i857[1]
  i856.defaultInt = i857[2]
  i856.name = i857[3]
  i856.nameHash = i857[4]
  i856.type = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i861 = data
  i860.mode = i861[0]
  i860.parameter = i861[1]
  i860.threshold = i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i863 = data
  i862.name = i863[0]
  i862.bytes64 = i863[1]
  i862.data = i863[2]
  return i862
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i864 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.atlasAssets = i866
  i864.scale = i865[1]
  request.r(i865[2], i865[3], 0, i864, 'skeletonJSON')
  i864.isUpgradingBlendModeMaterials = !!i865[4]
  i864.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i865[5], i864.blendModeMaterials)
  var i869 = i865[6]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i864.skeletonDataModifiers = i868
  var i871 = i865[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i864.fromAnimation = i870
  var i873 = i865[8]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i864.toAnimation = i872
  i864.duration = i865[9]
  i864.defaultMix = i865[10]
  request.r(i865[11], i865[12], 0, i864, 'controller')
  return i864
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i876 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i877 = data
  i876.applyAdditiveMaterial = !!i877[0]
  var i879 = i877[1]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i879[i + 0]));
  }
  i876.additiveMaterials = i878
  var i881 = i877[2]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i881[i + 0]));
  }
  i876.multiplyMaterials = i880
  var i883 = i877[3]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i883[i + 0]));
  }
  i876.screenMaterials = i882
  i876.requiresBlendModeMaterials = !!i877[4]
  return i876
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i886 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i887 = data
  i886.pageName = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'material')
  return i886
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i890 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'atlasFile')
  var i893 = i891[2]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.materials = i892
  return i890
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i895 = data
  i894.useSafeMode = !!i895[0]
  i894.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i895[1], i894.safeModeOptions)
  i894.timeScale = i895[2]
  i894.unscaledTimeScale = i895[3]
  i894.useSmoothDeltaTime = !!i895[4]
  i894.maxSmoothUnscaledTime = i895[5]
  i894.rewindCallbackMode = i895[6]
  i894.showUnityEditorReport = !!i895[7]
  i894.logBehaviour = i895[8]
  i894.drawGizmos = !!i895[9]
  i894.defaultRecyclable = !!i895[10]
  i894.defaultAutoPlay = i895[11]
  i894.defaultUpdateType = i895[12]
  i894.defaultTimeScaleIndependent = !!i895[13]
  i894.defaultEaseType = i895[14]
  i894.defaultEaseOvershootOrAmplitude = i895[15]
  i894.defaultEasePeriod = i895[16]
  i894.defaultAutoKill = !!i895[17]
  i894.defaultLoopType = i895[18]
  i894.debugMode = !!i895[19]
  i894.debugStoreTargetId = !!i895[20]
  i894.showPreviewPanel = !!i895[21]
  i894.storeSettingsLocation = i895[22]
  i894.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i895[23], i894.modules)
  i894.createASMDEF = !!i895[24]
  i894.showPlayingTweens = !!i895[25]
  i894.showPausedTweens = !!i895[26]
  return i894
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i897 = data
  i896.logBehaviour = i897[0]
  i896.nestedTweenFailureBehaviour = i897[1]
  return i896
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i899 = data
  i898.showPanel = !!i899[0]
  i898.audioEnabled = !!i899[1]
  i898.physicsEnabled = !!i899[2]
  i898.physics2DEnabled = !!i899[3]
  i898.spriteEnabled = !!i899[4]
  i898.uiEnabled = !!i899[5]
  i898.uiToolkitEnabled = !!i899[6]
  i898.textMeshProEnabled = !!i899[7]
  i898.tk2DEnabled = !!i899[8]
  i898.deAudioEnabled = !!i899[9]
  i898.deUnityExtendedEnabled = !!i899[10]
  i898.epoOutlineEnabled = !!i899[11]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i903[i + 0]) );
  }
  i900.files = i902
  i900.componentToPrefabIds = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i907 = data
  i906.path = i907[0]
  request.r(i907[1], i907[2], 0, i906, 'unityObject')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i911[i + 0]) );
  }
  i908.scriptsExecutionOrder = i910
  var i913 = i909[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i913[i + 0]) );
  }
  i908.sortingLayers = i912
  var i915 = i909[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i915[i + 0]) );
  }
  i908.cullingLayers = i914
  i908.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i909[3], i908.timeSettings)
  i908.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i909[4], i908.physicsSettings)
  i908.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i909[5], i908.physics2DSettings)
  i908.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i909[6], i908.qualitySettings)
  i908.enableRealtimeShadows = !!i909[7]
  i908.enableAutoInstancing = !!i909[8]
  i908.enableStaticBatching = !!i909[9]
  i908.enableDynamicBatching = !!i909[10]
  i908.lightmapEncodingQuality = i909[11]
  i908.desiredColorSpace = i909[12]
  var i917 = i909[13]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i908.allTags = i916
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i921 = data
  i920.name = i921[0]
  i920.value = i921[1]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i925 = data
  i924.id = i925[0]
  i924.name = i925[1]
  i924.value = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i929 = data
  i928.id = i929[0]
  i928.name = i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i931 = data
  i930.fixedDeltaTime = i931[0]
  i930.maximumDeltaTime = i931[1]
  i930.timeScale = i931[2]
  i930.maximumParticleTimestep = i931[3]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i933 = data
  i932.gravity = new pc.Vec3( i933[0], i933[1], i933[2] )
  i932.defaultSolverIterations = i933[3]
  i932.bounceThreshold = i933[4]
  i932.autoSyncTransforms = !!i933[5]
  i932.autoSimulation = !!i933[6]
  var i935 = i933[7]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i935[i + 0]) );
  }
  i932.collisionMatrix = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i939 = data
  i938.enabled = !!i939[0]
  i938.layerId = i939[1]
  i938.otherLayerId = i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'material')
  i940.gravity = new pc.Vec2( i941[2], i941[3] )
  i940.positionIterations = i941[4]
  i940.velocityIterations = i941[5]
  i940.velocityThreshold = i941[6]
  i940.maxLinearCorrection = i941[7]
  i940.maxAngularCorrection = i941[8]
  i940.maxTranslationSpeed = i941[9]
  i940.maxRotationSpeed = i941[10]
  i940.baumgarteScale = i941[11]
  i940.baumgarteTOIScale = i941[12]
  i940.timeToSleep = i941[13]
  i940.linearSleepTolerance = i941[14]
  i940.angularSleepTolerance = i941[15]
  i940.defaultContactOffset = i941[16]
  i940.autoSimulation = !!i941[17]
  i940.queriesHitTriggers = !!i941[18]
  i940.queriesStartInColliders = !!i941[19]
  i940.callbacksOnDisable = !!i941[20]
  i940.reuseCollisionCallbacks = !!i941[21]
  i940.autoSyncTransforms = !!i941[22]
  var i943 = i941[23]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i943[i + 0]) );
  }
  i940.collisionMatrix = i942
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i947 = data
  i946.enabled = !!i947[0]
  i946.layerId = i947[1]
  i946.otherLayerId = i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i951[i + 0]) );
  }
  i948.qualityLevels = i950
  var i953 = i949[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.names = i952
  i948.shadows = i949[2]
  i948.anisotropicFiltering = i949[3]
  i948.antiAliasing = i949[4]
  i948.lodBias = i949[5]
  i948.shadowCascades = i949[6]
  i948.shadowDistance = i949[7]
  i948.shadowmaskMode = i949[8]
  i948.shadowProjection = i949[9]
  i948.shadowResolution = i949[10]
  i948.softParticles = !!i949[11]
  i948.softVegetation = !!i949[12]
  i948.activeColorSpace = i949[13]
  i948.desiredColorSpace = i949[14]
  i948.masterTextureLimit = i949[15]
  i948.maxQueuedFrames = i949[16]
  i948.particleRaycastBudget = i949[17]
  i948.pixelLightCount = i949[18]
  i948.realtimeReflectionProbes = !!i949[19]
  i948.shadowCascade2Split = i949[20]
  i948.shadowCascade4Split = new pc.Vec3( i949[21], i949[22], i949[23] )
  i948.streamingMipmapsActive = !!i949[24]
  i948.vSyncCount = i949[25]
  i948.asyncUploadBufferSize = i949[26]
  i948.asyncUploadTimeSlice = i949[27]
  i948.billboardsFaceCameraPosition = !!i949[28]
  i948.shadowNearPlaneOffset = i949[29]
  i948.streamingMipmapsMemoryBudget = i949[30]
  i948.maximumLODLevel = i949[31]
  i948.streamingMipmapsAddAllCameras = !!i949[32]
  i948.streamingMipmapsMaxLevelReduction = i949[33]
  i948.streamingMipmapsRenderersPerFrame = i949[34]
  i948.resolutionScalingFixedDPIFactor = i949[35]
  i948.streamingMipmapsMaxFileIORequests = i949[36]
  i948.currentQualityLevel = i949[37]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i959 = data
  i958.weight = i959[0]
  i958.vertices = i959[1]
  i958.normals = i959[2]
  i958.tangents = i959[3]
  return i958
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[10],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[10],"64":[22],"65":[66],"67":[66],"68":[69],"70":[69],"71":[72,69],"25":[22],"73":[72,69],"74":[1,22],"75":[22],"76":[22,23],"77":[43],"78":[50],"79":[80],"81":[82],"83":[5],"84":[10],"85":[86],"87":[14],"88":[68],"89":[69],"90":[22,69],"91":[69,72],"92":[69],"93":[72,69],"94":[22],"95":[72,69],"96":[69],"97":[98],"99":[98],"100":[98],"101":[102],"103":[69],"104":[69],"105":[68],"106":[72,69],"107":[69],"108":[68],"109":[69],"110":[69],"111":[69],"112":[69],"113":[69],"114":[69],"115":[69],"116":[69],"117":[69],"118":[72,69],"119":[69],"120":[69],"121":[69],"122":[69],"123":[72,69],"124":[69],"125":[14],"126":[14],"15":[14],"127":[14],"13":[10],"128":[10]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","FailMaker","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Ply_Pool","Ply_SoundManager","UnityEngine.AudioSource","ItemManager","InputManager","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.CanvasRenderer","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom_PointAndClick";

Deserializers.lunaInitializationTime = "06/04/2026 03:10:57";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "22d19832-4993-406b-85a4-81a0432a6aed";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


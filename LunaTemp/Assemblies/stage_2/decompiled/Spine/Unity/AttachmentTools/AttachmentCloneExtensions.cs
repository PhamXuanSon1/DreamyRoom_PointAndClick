using UnityEngine;

namespace Spine.Unity.AttachmentTools
{
	public static class AttachmentCloneExtensions
	{
		public static Attachment GetRemappedClone(this Attachment o, Sprite sprite, Material sourceMaterial, bool premultiplyAlpha = true, bool cloneMeshAsLinked = true, bool useOriginalRegionSize = false, bool pivotShiftsMeshUVCoords = true, bool useOriginalRegionScale = false)
		{
			AtlasRegion atlasRegion = (premultiplyAlpha ? sprite.ToAtlasRegionPMAClone(sourceMaterial) : sprite.ToAtlasRegion(new Material(sourceMaterial)
			{
				mainTexture = sprite.texture
			}));
			if (!pivotShiftsMeshUVCoords && o is MeshAttachment)
			{
				atlasRegion.offsetX = 0f;
				atlasRegion.offsetY = 0f;
			}
			float scale = 1f / sprite.pixelsPerUnit;
			if (useOriginalRegionScale && o is RegionAttachment regionAttachment)
			{
				scale = regionAttachment.Width / regionAttachment.RegionOriginalWidth;
			}
			return o.GetRemappedClone(atlasRegion, cloneMeshAsLinked, useOriginalRegionSize, scale);
		}

		public static Attachment GetRemappedClone(this Attachment o, AtlasRegion atlasRegion, bool cloneMeshAsLinked = true, bool useOriginalRegionSize = false, float scale = 0.01f)
		{
			if (o is RegionAttachment regionAttachment)
			{
				RegionAttachment newAttachment = (RegionAttachment)regionAttachment.Copy();
				newAttachment.SetRegion(atlasRegion, false);
				if (!useOriginalRegionSize)
				{
					newAttachment.Width = (float)atlasRegion.width * scale;
					newAttachment.Height = (float)atlasRegion.height * scale;
				}
				newAttachment.UpdateOffset();
				return newAttachment;
			}
			if (o is MeshAttachment meshAttachment)
			{
				MeshAttachment newAttachment2 = (cloneMeshAsLinked ? meshAttachment.NewLinkedMesh() : ((MeshAttachment)meshAttachment.Copy()));
				newAttachment2.SetRegion(atlasRegion);
				return newAttachment2;
			}
			return o.Copy();
		}
	}
}

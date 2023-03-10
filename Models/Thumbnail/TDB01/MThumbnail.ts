import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB01MThumbnail model class.
 */
export class MThumbnail {
	static modelName = 'MThumbnail';

	static Cols = {
		imageUrl: 'imageUrl',
		backgroundItemType: 'backgroundItemType',
		prevThumbnailID: 'prevThumbnailID',
		attachedCount: 'attachedCount',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): MThumbnail {
		const ret = new MThumbnail();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
		ret.backgroundItemType = typeof json.backgroundItemType === 'string' ? json.backgroundItemType : '';
		ret.prevThumbnailID = typeof json.prevThumbnailID === 'string' ? json.prevThumbnailID : undefined;
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : undefined;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	imageUrl: string;

	backgroundItemType: string;

	prevThumbnailID?: string;

	attachedCount?: number;

	createdAt: Date;

	updatedAt: Date;
}

import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB01MThumbnail model class.
 */
export class MThumbnail {
	static modelName = 'MThumbnail';

	static Cols = {
		imageUrl: 'imageUrl',
		prevThumbnailID: 'prevThumbnailID',
		attachedCount: 'attachedCount',
		dummyTextMap: 'dummyTextMap',
		dummyStoreUrlMap: 'dummyStoreUrlMap',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): MThumbnail {
		const ret = new MThumbnail();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
		ret.prevThumbnailID = typeof json.prevThumbnailID === 'string' ? json.prevThumbnailID : undefined;
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
		ret.dummyTextMap = json.dummyTextMap instanceof Object ? json.dummyTextMap : {};
		ret.dummyStoreUrlMap = json.dummyStoreUrlMap instanceof Object ? json.dummyStoreUrlMap : {};
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	imageUrl: string;

	prevThumbnailID?: string;

	attachedCount: number;

	dummyTextMap: { [key: string]: string };

	dummyStoreUrlMap: { [key: string]: string };

	createdAt: Date;

	updatedAt: Date;
}

import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB01MThumbnail model class.
 */
export class MThumbnail {
	static modelName = 'MThumbnail';

	static Cols = {
		imageUrl: 'imageUrl',
		backgroundItemType: 'backgroundItemType',
		copiedCount: 'copiedCount',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): MThumbnail {
		const ret = new MThumbnail();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
		ret.backgroundItemType = typeof json.backgroundItemType === 'string' ? json.backgroundItemType : '';
		ret.copiedCount = typeof json.copiedCount === 'number' ? json.copiedCount : 0;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	imageUrl: string;

	backgroundItemType: string;

	copiedCount: number;

	createdAt: Date;

	updatedAt: Date;
}

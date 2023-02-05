import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB01MThumbnail model class.
 */
export class MThumbnail {
	static modelName = 'MThumbnail';

	static Cols = {
		imageUrl: 'imageUrl',
		backgroundItemType: 'backgroundItemType',
		copied_count: 'copied_count',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): MThumbnail {
		const ret = new MThumbnail();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
		ret.backgroundItemType = typeof json.backgroundItemType === 'string' ? json.backgroundItemType : '';
		ret.copied_count = typeof json.copied_count === 'number' ? json.copied_count : 0;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	imageUrl: string;

	backgroundItemType: string;

	copied_count: number;

	createdAt: Date;

	updatedAt: Date;
}

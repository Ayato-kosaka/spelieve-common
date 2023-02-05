/**
 * Export TDB01MThumbnail model class.
 */
export class MThumbnail {
	static modelName = 'MThumbnail';

	static Cols = {
		backgroundItemType: 'backgroundItemType',
	};

	static fromJSON(json: any): MThumbnail {
		const ret = new MThumbnail();
		ret.backgroundItemType = typeof json.backgroundItemType === 'string' ? json.backgroundItemType : '';
		return ret;
	}

	backgroundItemType: string;
}

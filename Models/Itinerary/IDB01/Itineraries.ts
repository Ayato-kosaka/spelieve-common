import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB01Itineraries model class.
 */
export class Itineraries {
	static modelName = 'Itineraries';

	static Cols = {
		imageUrl: 'imageUrl',
		startDate: 'startDate',
		caption: 'caption',
		thumbnailID: 'thumbnailID',
		textList: 'textList',
		isUpdatable: 'isUpdatable',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Itineraries {
		const ret = new Itineraries();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
		ret.caption = typeof json.caption === 'string' ? json.caption : '';
		ret.thumbnailID = typeof json.thumbnailID === 'string' ? json.thumbnailID : undefined;
		ret.textList = json.textList instanceof Array ? json.textList : [];
		ret.isUpdatable = typeof json.isUpdatable === 'boolean' ? json.isUpdatable : false;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	imageUrl?: string;

	startDate: Date;

	caption: string;

	thumbnailID?: string;

	textList: Array<string>;

	isUpdatable: boolean;

	createdAt: Date;

	updatedAt: Date;
}

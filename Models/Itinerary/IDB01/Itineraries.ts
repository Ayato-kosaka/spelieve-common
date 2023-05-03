import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB01Itineraries model class.
 */
export class Itineraries {
	static modelID = 'IDB01';
	static modelName = 'Itineraries';

	static Cols = {
		imageUrl: 'imageUrl',
		startDate: 'startDate',
		caption: 'caption',
		thumbnailID: 'thumbnailID',
		textMap: 'textMap',
		storeUrlMap: 'storeUrlMap',
		isImmutable: 'isImmutable',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Itineraries {
		const ret = new Itineraries();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
		ret.caption = typeof json.caption === 'string' ? json.caption : '';
		ret.thumbnailID = typeof json.thumbnailID === 'string' ? json.thumbnailID : undefined;
		ret.textMap = json.textMap instanceof Object ? json.textMap : {};
		ret.storeUrlMap = json.storeUrlMap instanceof Object ? json.storeUrlMap : {};
		ret.isImmutable = typeof json.isImmutable === 'boolean' ? json.isImmutable : false;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	imageUrl?: string;

	startDate: Date;

	caption: string;

	thumbnailID?: string;

	textMap: { [key: string]: string };

	storeUrlMap: { [key: string]: string };

	isImmutable: boolean;

	createdAt: Date;

	updatedAt: Date;
}

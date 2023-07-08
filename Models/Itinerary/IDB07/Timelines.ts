import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB07Timelines model class.
 */
export class Timelines {
	static modelID = 'IDB07';
	static modelName = 'Timelines';

	static Cols = {
		parentTimelineID: 'parentTimelineID',
		imageUrl: 'imageUrl',
		startDate: 'startDate',
		caption: 'caption',
		thumbnailID: 'thumbnailID',
		textMap: 'textMap',
		storeUrlMap: 'storeUrlMap',
		isPosted: 'isPosted',
		representativePlanID: 'representativePlanID',
		representativeStartDateTime: 'representativeStartDateTime',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Timelines {
		const ret = new Timelines();
		ret.parentTimelineID = typeof json.parentTimelineID === 'string' ? json.parentTimelineID : undefined;
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
		ret.caption = typeof json.caption === 'string' ? json.caption : '';
		ret.thumbnailID = typeof json.thumbnailID === 'string' ? json.thumbnailID : undefined;
		ret.textMap = json.textMap instanceof Object ? json.textMap : {};
		ret.storeUrlMap = json.storeUrlMap instanceof Object ? json.storeUrlMap : {};
		ret.isPosted = typeof json.isPosted === 'boolean' ? json.isPosted : false;
		ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
		ret.representativeStartDateTime =
			json.representativeStartDateTime instanceof Date ? json.representativeStartDateTime : DateUtils.initialDate();
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	parentTimelineID?: string;

	imageUrl?: string;

	startDate: Date;

	caption: string;

	thumbnailID?: string;

	textMap: { [key: string]: string };

	storeUrlMap: { [key: string]: string };

	isPosted: boolean;

	representativePlanID: string;

	representativeStartDateTime: Date;

	createdAt: Date;

	updatedAt: Date;
}

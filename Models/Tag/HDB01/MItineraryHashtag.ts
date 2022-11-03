import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export HDB01MItineraryHashtag model class.
 */
export class MItineraryHashtag {
	static modelName = 'MItineraryHashtag';

	static Cols = {
		attachedCount: 'attachedCount',
		createdAt: 'createdAt',
	};

	static fromJSON(json: any): MItineraryHashtag {
		const ret = new MItineraryHashtag();
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		return ret;
	}

	attachedCount: number;

	createdAt: Date;
}

import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export HDB02MPlanTags model class.
 */
export class MPlanTags {
	static modelID = 'HDB02';
	static modelName = 'MPlanTags';

	static Cols = {
		tag: 'tag',
		attached_count: 'attached_count',
		stayTime: 'stayTime',
		created_at: 'created_at',
	};

	static fromJSON(json: any): MPlanTags {
		const ret = new MPlanTags();
		ret.tag = typeof json.tag === 'string' ? json.tag : '';
		ret.attached_count = typeof json.attached_count === 'number' ? json.attached_count : 0;
		ret.stayTime = json.stayTime instanceof Date ? json.stayTime : DateUtils.initialDate();
		ret.created_at = json.created_at instanceof Date ? json.created_at : DateUtils.initialDate();
		return ret;
	}

	tag: string;

	attached_count: number;

	stayTime: Date;

	created_at: Date;
}

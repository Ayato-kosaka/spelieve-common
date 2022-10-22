import * as DateUtils from 'Utils/DateUtils';

/**
 * Export HDB02MPlanTag model class.
 */
export class MPlanTag {
	static modelName = 'MPlanTag';

	static Cols = {
		attachedCount: 'attachedCount',
		stayTime: 'stayTime',
	};

	static fromJSON(json: any): MPlanTag {
		const ret = new MPlanTag();
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
		ret.stayTime = json.stayTime instanceof Date ? json.stayTime : DateUtils.initialDate();
		return ret;
	}

	attachedCount: number;

	stayTime: Date;
}

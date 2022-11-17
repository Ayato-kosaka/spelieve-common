import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export HDB02MPlanTag model class.
 */
export class MPlanTag {
	static modelName = 'MPlanTag';

	static Cols = {
		name: 'name',
		attachedCount: 'attachedCount',
		stayTime: 'stayTime',
		createdAt: 'createdAt',
	};

	static fromJSON(json: any): MPlanTag {
		const ret = new MPlanTag();
		ret.name = typeof json.name === 'string' ? json.name : '';
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
		ret.stayTime = json.stayTime instanceof Date ? json.stayTime : DateUtils.initialDate();
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		return ret;
	}

	name: string;

	attachedCount: number;

	stayTime: Date;

	createdAt: Date;
}

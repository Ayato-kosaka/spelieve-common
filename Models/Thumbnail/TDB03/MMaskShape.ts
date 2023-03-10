import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB03MMaskShape model class.
 */
export class MMaskShape {
	static modelName = 'MMaskShape';

	static Cols = {
		storageUrl: 'storageUrl',
		attachedCount: 'attachedCount',
		createdAt: 'createdAt',
	};

	static fromJSON(json: any): MMaskShape {
		const ret = new MMaskShape();
		ret.storageUrl = typeof json.storageUrl === 'string' ? json.storageUrl : '';
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : undefined;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		return ret;
	}

	storageUrl: string;

	attachedCount?: number;

	createdAt: Date;
}

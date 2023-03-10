import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB03MMaskShape model class.
 */
export class MMaskShape {
	static modelName = 'MMaskShape';

	static Cols = {
		storageUrl: 'storageUrl',
		attached_count: 'attached_count',
		createdAt: 'createdAt',
	};

	static fromJSON(json: any): MMaskShape {
		const ret = new MMaskShape();
		ret.storageUrl = typeof json.storageUrl === 'string' ? json.storageUrl : '';
		ret.attached_count = typeof json.attached_count === 'number' ? json.attached_count : undefined;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		return ret;
	}

	storageUrl: string;

	attached_count?: number;

	createdAt: Date;
}

import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB03MMaskShape model class.
 */
export class MMaskShape {
	static modelID = 'TDB03';
	static modelName = 'MMaskShape';

	static Cols = {
		storageUrl: 'storageUrl',
		attachedCount: 'attachedCount',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
		ver: 'ver',
	};

	static fromJSON(json: any): MMaskShape {
		const ret = new MMaskShape();
		ret.storageUrl = typeof json.storageUrl === 'string' ? json.storageUrl : '';
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : undefined;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		ret.ver = typeof json.ver === 'number' ? json.ver : 0;
		return ret;
	}

	storageUrl: string;

	attachedCount?: number;

	createdAt: Date;

	updatedAt: Date;

	ver: number;
}

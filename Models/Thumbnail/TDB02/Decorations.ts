import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB02Decorations model class.
 */
export class Decorations {
	static modelName = 'Decorations';

	static Cols = {
		decorationType: 'decorationType',
		translateX: 'translateX',
		translateY: 'translateY',
		rotateZ: 'rotateZ',
		scale: 'scale',
		order: 'order',
		color: 'color',
		key: 'key',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Decorations {
		const ret = new Decorations();
		ret.decorationType = typeof json.decorationType === 'string' ? json.decorationType : '';
		ret.translateX = typeof json.translateX === 'number' ? json.translateX : 0;
		ret.translateY = typeof json.translateY === 'number' ? json.translateY : 0;
		ret.rotateZ = typeof json.rotateZ === 'number' ? json.rotateZ : 0;
		ret.scale = typeof json.scale === 'number' ? json.scale : 0;
		ret.order = typeof json.order === 'number' ? json.order : 0;
		ret.color = typeof json.color === 'string' ? json.color : '';
		ret.key = typeof json.key === 'string' ? json.key : undefined;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	decorationType: string;

	translateX: number;

	translateY: number;

	rotateZ: number;

	scale: number;

	order: number;

	color: string;

	key?: string;

	createdAt: Date;

	updatedAt: Date;
}

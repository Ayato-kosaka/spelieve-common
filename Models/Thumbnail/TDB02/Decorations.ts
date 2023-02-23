import * as SpelieveInterface from '../../../Interfaces';
import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB02Decorations model class.
 */
export class Decorations {
	static modelName = 'Decorations';

	static Cols = {
		decorationType: 'decorationType',
		gesture: 'gesture',
		maskGesture: 'maskGesture',
		maskUri: 'maskUri',
		order: 'order',
		color: 'color',
		key: 'key',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Decorations {
		const ret = new Decorations();
		ret.decorationType = typeof json.decorationType === 'string' ? json.decorationType : '';
		ret.gesture = json.gesture instanceof Object ? json.gesture : {};
		ret.maskGesture = json.maskGesture instanceof Object ? json.maskGesture : {};
		ret.maskUri = typeof json.maskUri === 'string' ? json.maskUri : '';
		ret.order = typeof json.order === 'number' ? json.order : 0;
		ret.color = typeof json.color === 'string' ? json.color : '';
		ret.key = typeof json.key === 'string' ? json.key : undefined;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	decorationType: string;

	gesture: SpelieveInterface.DecorationsGestureInterface;

	maskGesture: SpelieveInterface.DecorationsGestureInterface;

	maskUri: string;

	order: number;

	color: string;

	key?: string;

	createdAt: Date;

	updatedAt: Date;
}

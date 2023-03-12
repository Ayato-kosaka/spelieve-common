import * as SpelieveInterface from '../../../Interfaces';
import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export TDB02Decorations model class.
 */
export class Decorations {
	static modelName = 'Decorations';

	static Cols = {
		decorationType: 'decorationType',
		transform: 'transform',
		maskTransform: 'maskTransform',
		maskUri: 'maskUri',
		order: 'order',
		color: 'color',
		key: 'key',
		borderColor: 'borderColor',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Decorations {
		const ret = new Decorations();
		ret.decorationType = typeof json.decorationType === 'string' ? json.decorationType : '';
		ret.transform = json.transform instanceof Object ? json.transform : {};
		ret.maskTransform = json.maskTransform instanceof Object ? json.maskTransform : {};
		ret.maskUri = typeof json.maskUri === 'string' ? json.maskUri : undefined;
		ret.order = typeof json.order === 'number' ? json.order : 0;
		ret.color = typeof json.color === 'string' ? json.color : '';
		ret.key = typeof json.key === 'string' ? json.key : undefined;
		ret.borderColor = typeof json.borderColor === 'string' ? json.borderColor : '';
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	decorationType: string;

	transform: SpelieveInterface.DecorationsTransformInterface;

	maskTransform: SpelieveInterface.DecorationsTransformInterface;

	maskUri?: string;

	order: number;

	color: string;

	key?: string;

	borderColor: string;

	createdAt: Date;

	updatedAt: Date;
}

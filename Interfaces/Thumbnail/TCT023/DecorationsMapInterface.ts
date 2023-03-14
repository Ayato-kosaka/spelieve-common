import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of DecorationsMap object.
 */
export interface DecorationsMapInterface {
	decorationType: string;
	transform: SpelieveInterface.DecorationsTransformInterface;
	maskTransform: SpelieveInterface.DecorationsTransformInterface;
	maskUri?: string;
	order: number;
	color: string;
	key?: string;
	borderColor: string;
	fontFamily?: string;
	createdAt: Date;
	updatedAt: Date;
}

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of DecorationsMap object.
 */
export interface DecorationsMapInterface {
	decorationType: string;
	gesture: SpelieveInterface.DecorationsGestureInterface;
	maskGesture: SpelieveInterface.DecorationsGestureInterface;
	maskUri?: string;
	order: number;
	color: string;
	key?: string;
	createdAt: Date;
	updatedAt: Date;
}

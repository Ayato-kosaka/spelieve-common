import { DocumentReference } from '@firebase/firestore';

/**
 * Export interface of PlansMap object.
 */
export interface PlansMapInterface {
	placeReference?: DocumentReference;
	placeSpan: Date;
	placeStartTime: Date;
	placeEndTime: Date;
	tags?: Array<string>;
	imageUrl: string;
	memo?: string;
	transportationMode?: string;
	transportationDepartureTime?: Date;
	transportationArrivalTime?: Date;
	transportationSpan: Date;
}

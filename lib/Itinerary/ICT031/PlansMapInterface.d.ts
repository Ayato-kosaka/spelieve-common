import { DocumentReference } from '@firebase/firestore-types';
export interface ICT031PlansMapInterface {
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

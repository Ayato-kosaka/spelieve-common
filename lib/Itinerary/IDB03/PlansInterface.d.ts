import { Timestamp, DocumentReference } from '@firebase/firestore-types';
export interface IDB03PlansInterface {
    placeReference?: DocumentReference;
    placeSpan: Timestamp;
    placeStartTime: Timestamp;
    placeEndTime: Timestamp;
    tags?: Array<string>;
    imageUrl: string;
    memo?: string;
    transportationMode?: string;
    transportationDepartureTime?: Timestamp;
    transportationArrivalTime?: Timestamp;
    transportationSpan: Timestamp;
}

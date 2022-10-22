import { Timestamp, DocumentReference } from "@firebase/firestore";
export declare class Plans {
    static modelName: string;
    static Cols: {
        placeReference: string;
        placeSpan: string;
        placeStartTime: string;
        placeEndTime: string;
        tags: string;
        imageUrl: string;
        memo: string;
        transportationMode: string;
        transportationDepartureTime: string;
        transportationArrivalTime: string;
        transportationSpan: string;
    };
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

import { DocumentReference } from '@firebase/firestore';
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
    static fromJSON(json: any): Plans;
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

export declare class Plans {
    static modelName: string;
    static Cols: {
        place_id: string;
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
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Plans;
    place_id: string;
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
    createdAt: Date;
    updatedAt: Date;
}

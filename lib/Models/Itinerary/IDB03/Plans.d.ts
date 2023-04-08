export declare class Plans {
    static modelID: string;
    static modelName: string;
    static Cols: {
        place_id: string;
        title: string;
        placeSpan: string;
        placeStartTime: string;
        placeEndTime: string;
        imageUrl: string;
        memo: string;
        transportationMode: string;
        transportationDepartureTime: string;
        transportationArrivalTime: string;
        transportationSpan: string;
        avoid: string;
        transitModes: string;
        transitRoutingPreference: string;
        thumbnailID: string;
        textMap: string;
        storeUrlMap: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Plans;
    place_id?: string;
    title: string;
    placeSpan: Date;
    placeStartTime: Date;
    placeEndTime: Date;
    imageUrl?: string;
    memo?: string;
    transportationMode?: string;
    transportationDepartureTime?: Date;
    transportationArrivalTime?: Date;
    transportationSpan: Date;
    avoid: Array<string>;
    transitModes: Array<string>;
    transitRoutingPreference: string;
    thumbnailID?: string;
    textMap: {
        [key: string]: string;
    };
    storeUrlMap: {
        [key: string]: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

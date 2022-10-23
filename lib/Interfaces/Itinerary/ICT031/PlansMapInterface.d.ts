export interface PlansMapInterface {
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
}

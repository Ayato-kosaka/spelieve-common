export interface PlansMapInterface {
    place_id?: string;
    title: string;
    placeSpan: Date;
    placeStartTime: Date;
    placeEndTime: Date;
    tags: Array<string>;
    imageUrl?: string;
    memo?: string;
    transportationMode?: string;
    transportationDepartureTime?: Date;
    transportationArrivalTime?: Date;
    transportationSpan: Date;
    avoidFerries: boolean;
    avoidHighways: boolean;
    avoidTolls: boolean;
    transitModes: Array<string>;
    transitRoutePreference: string;
    createdAt: Date;
    updatedAt: Date;
}

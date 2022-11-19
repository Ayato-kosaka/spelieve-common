/// <reference types="googlemaps" />
export interface PlansMapInterface {
    transportationMode?: google.maps.TravelMode;
    transitModes: google.maps.TransitMode[];
    transitRoutePreference: google.maps.TransitRoutePreference;
    place_id?: string;
    title: string;
    placeSpan: Date;
    placeStartTime: Date;
    placeEndTime: Date;
    tags: Array<string>;
    imageUrl?: string;
    memo?: string;
    transportationDepartureTime?: Date;
    transportationArrivalTime?: Date;
    transportationSpan: Date;
    avoidFerries: boolean;
    avoidHighways: boolean;
    avoidTolls: boolean;
    createdAt: Date;
    updatedAt: Date;
}

import GoogleMaps from '@googlemaps/google-maps-services-js';
export interface PlansMapInterface {
    transportationMode?: GoogleMaps.TravelMode;
    transitModes: GoogleMaps.TransitMode[];
    transitRoutingPreference: GoogleMaps.TransitRoutingPreference;
    avoid: GoogleMaps.TravelRestriction[];
    place_id?: string;
    title: string;
    placeSpan: Date;
    placeStartTime: Date;
    placeEndTime: Date;
    imageUrl?: string;
    memo?: string;
    transportationDepartureTime?: Date;
    transportationArrivalTime?: Date;
    transportationSpan: Date;
    thumbnailID?: string;
    textMap: {
        [key: string]: string;
    };
    storeUrlMap: {
        [key: string]: string;
    };
    createdAt: Date;
    updatedAt: Date;
    ver: number;
}

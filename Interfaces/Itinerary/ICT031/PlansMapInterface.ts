import GoogleMaps from '@googlemaps/google-maps-services-js';

/**
 * Export interface of PlansMap object.
 */
export interface PlansMapInterface {
	transportationMode?: GoogleMaps.TravelMode;
	transitModes: GoogleMaps.TransitMode;
	transitRoutingPreference: GoogleMaps.TransitRoutingPreference;
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

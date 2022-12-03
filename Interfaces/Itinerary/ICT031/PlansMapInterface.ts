import GoogleMaps from '@googlemaps/google-maps-services-js';

/**
 * Export interface of PlansMap object.
 */
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
	tags: Array<string>;
	imageUrl?: string;
	memo?: string;
	transportationDepartureTime?: Date;
	transportationArrivalTime?: Date;
	transportationSpan: Date;
	aviod: Array<string>;
	createdAt: Date;
	updatedAt: Date;
}

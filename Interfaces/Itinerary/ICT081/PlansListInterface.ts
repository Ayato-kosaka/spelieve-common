/**
 * Export interface of PlansList object.
 */
export interface PlansListInterface {
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
	textMap: { [key: string]: string };
	storeUrlMap: { [key: string]: string };
	order: number;
	createdAt: Date;
	updatedAt: Date;
}

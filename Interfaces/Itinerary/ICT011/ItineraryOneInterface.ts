/**
 * Export interface of ItineraryOne object.
 */
export interface ItineraryOneInterface {
	imageUrl?: string;
	startDate: Date;
	caption: string;
	thumbnailID?: string;
	textMap: { [key: string]: string };
	storeUrlMap: { [key: string]: string };
	isUpdatable: boolean;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * Export interface of ItineraryOne object.
 */
export interface ItineraryOneInterface {
	title: string;
	subTitle?: string;
	imageUrl?: string;
	startDate?: Date;
	endDate?: Date;
	tags?: Array<string>;
	caption: string;
}

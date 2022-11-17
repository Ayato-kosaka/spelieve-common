import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlaceOne object.
 */
export interface MPlaceOneInterface {
	place: string | Array<[string, string]>;
	place_id: string;
	language: string;
	name: string;
	imageUrl: string;
	geometry: SpelieveInterface.MPlaceGeoPointInterface;
	mapUrl?: string;
	website?: string;
	formatted_address: string;
	country: string;
	administrativeAreaLevel1?: string;
	administrativeAreaLevel2?: string;
	locality?: string;
	sublocalityLevel1?: string;
	sublocalityLevel2?: string;
	sublocalityLevel3?: string;
	sublocalityLevel4?: string;
	premise?: string;
	formatted_phone_number?: string;
	openingHours?: SpelieveInterface.MPlaceOpeningHoursInterface[];
	rating?: number;
	popularTags: Array<string>;
	averageStayTime?: Date;
	photoUrls: Array<string>;
	createdAt: Date;
	updatedAt: Date;
}

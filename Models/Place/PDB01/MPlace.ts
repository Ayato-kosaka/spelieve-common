import { GeoPoint } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';
import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export PDB01MPlace model class.
 */
export class MPlace {
	static modelName = 'MPlace';

	static Cols = {
		place_id: 'place_id',
		language: 'language',
		name: 'name',
		imageUrl: 'imageUrl',
		geometry: 'geometry',
		mapUrl: 'mapUrl',
		website: 'website',
		formatted_address: 'formatted_address',
		country: 'country',
		administrativeAreaLevel1: 'administrativeAreaLevel1',
		administrativeAreaLevel2: 'administrativeAreaLevel2',
		locality: 'locality',
		sublocalityLevel1: 'sublocalityLevel1',
		sublocalityLevel2: 'sublocalityLevel2',
		sublocalityLevel3: 'sublocalityLevel3',
		sublocalityLevel4: 'sublocalityLevel4',
		premise: 'premise',
		formatted_phone_number: 'formatted_phone_number',
		openingHours: 'openingHours',
		rating: 'rating',
		popularTags: 'popularTags',
		averageStayTime: 'averageStayTime',
		photoUrls: 'photoUrls',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): MPlace {
		const ret = new MPlace();
		ret.place_id = typeof json.place_id === 'string' ? json.place_id : '';
		ret.language = typeof json.language === 'string' ? json.language : '';
		ret.name = typeof json.name === 'string' ? json.name : '';
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
		ret.geometry = json.geometry instanceof GeoPoint ? json.geometry : new GeoPoint(0, 0);
		ret.mapUrl = typeof json.mapUrl === 'string' ? json.mapUrl : undefined;
		ret.website = typeof json.website === 'string' ? json.website : undefined;
		ret.formatted_address = typeof json.formatted_address === 'string' ? json.formatted_address : '';
		ret.country = typeof json.country === 'string' ? json.country : '';
		ret.administrativeAreaLevel1 =
			typeof json.administrativeAreaLevel1 === 'string' ? json.administrativeAreaLevel1 : undefined;
		ret.administrativeAreaLevel2 =
			typeof json.administrativeAreaLevel2 === 'string' ? json.administrativeAreaLevel2 : undefined;
		ret.locality = typeof json.locality === 'string' ? json.locality : undefined;
		ret.sublocalityLevel1 = typeof json.sublocalityLevel1 === 'string' ? json.sublocalityLevel1 : undefined;
		ret.sublocalityLevel2 = typeof json.sublocalityLevel2 === 'string' ? json.sublocalityLevel2 : undefined;
		ret.sublocalityLevel3 = typeof json.sublocalityLevel3 === 'string' ? json.sublocalityLevel3 : undefined;
		ret.sublocalityLevel4 = typeof json.sublocalityLevel4 === 'string' ? json.sublocalityLevel4 : undefined;
		ret.premise = typeof json.premise === 'string' ? json.premise : undefined;
		ret.formatted_phone_number =
			typeof json.formatted_phone_number === 'string' ? json.formatted_phone_number : undefined;
		ret.openingHours = json.openingHours instanceof Array ? json.openingHours : undefined;
		ret.rating = typeof json.rating === 'number' ? json.rating : undefined;
		ret.popularTags = json.popularTags instanceof Array ? json.popularTags : [];
		ret.averageStayTime = json.averageStayTime instanceof Date ? json.averageStayTime : undefined;
		ret.photoUrls = json.photoUrls instanceof Array ? json.photoUrls : [];
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	place_id: string;

	language: string;

	name: string;

	imageUrl: string;

	geometry: GeoPoint;

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

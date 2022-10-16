import { GeoPoint } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interfaces';
export interface MPlacesListInterface {
    place_id: string;
    language: string;
    name: string;
    imageUrl: string;
    geometry: GeoPoint;
    mapUrl: string;
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
    formatted_phone_number: string;
    openingHours: SpelieveInterface.MPlaceOpeningHoursInterface[];
    rating: number;
    popularTags: Array<string>;
    averageStayTime?: Date;
    createdAt: Date;
    updatedAt: Date;
    photoUrls: Array<string>;
}

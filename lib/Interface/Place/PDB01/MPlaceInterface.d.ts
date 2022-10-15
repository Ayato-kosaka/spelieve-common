import { GeoPoint, Timestamp } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interface';
export interface PDB01MPlaceInterface {
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
    openingHours: SpelieveInterface.PDB01MPlaceOpeningHoursInterface[];
    rating: number;
    popularTags: Array<string>;
    averageStayTime?: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    photoUrls: Array<string>;
}

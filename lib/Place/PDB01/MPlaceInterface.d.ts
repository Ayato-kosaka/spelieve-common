import { GeoPoint, Timestamp } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interface';
export interface PDB01MPlaceInterface {
    place_id: string;
    language: string;
    name: string;
    imageUrl: string;
    instagramAPIID?: string;
    geometry: GeoPoint;
    geohash: string;
    mapUrl: string;
    website?: string;
    address: string;
    phoneNumber: string;
    openingHours: SpelieveInterface.PDB01MPlaceOpeningHoursInterface[];
    rating: number;
    popularTags: Array<string>;
    averageStayTime?: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

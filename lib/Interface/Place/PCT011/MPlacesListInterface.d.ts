import { GeoPoint } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interface';
export interface PCT011MPlacesListInterface {
    place_id: string;
    language: string;
    name: string;
    imageUrl: string;
    geometry: GeoPoint;
    mapUrl: string;
    website?: string;
    address: string;
    phoneNumber: string;
    openingHours: SpelieveInterface.PDB01MPlaceOpeningHoursInterface[];
    rating: number;
    popularTags: Array<string>;
    averageStayTime?: Date;
    createdAt: Date;
    updatedAt: Date;
}

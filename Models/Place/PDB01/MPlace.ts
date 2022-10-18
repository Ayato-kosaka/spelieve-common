import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export PDB01MPlace model class.
 */
export class MPlace {

  static modelName = 'MPlace';

  static Cols  = {
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

  averageStayTime?: Timestamp;

  photoUrls: Array<string>;

  createdAt: Timestamp;

  updatedAt: Timestamp;

}

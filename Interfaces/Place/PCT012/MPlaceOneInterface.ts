import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlaceOne object.
 */
export interface MPlaceOneInterface {
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
    formatted_phone_number?: string;
    openingHours?: SpelieveInterface.MPlaceOpeningHoursInterface[];
    rating?: number;
    popularTags: Array<string>;
    averageStayTime?: Date;
    photoUrls: Array<string>;
    createdAt: Date;
    updatedAt: Date;
} 

import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT012MPlaceOne object.
 */
export interface PCT012MPlaceOneInterface {
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
    averageStayTime?: Date;
    createdAt: Date;
    updatedAt: Date;
} 

import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React { ReactNode } from '@types/react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT012MPlaceOne object.
 */
export interface PCT012MPlaceOneInterface {
    name: string;
    imageUrl: string;
    instagramAPIID?: string;
    geometry: GeoPoint;
    geohash: string;
    mapUrl: string;
    website?: string;
    address: string;
    phoneNumber: string;
    openingHours: SpelieveInterface.PDB01MPlaceOpeningHoursInterface;
    rating: number;
    popularTags?: Array<string>;
    averageStayTime?: Date;
    createdAt: Date;
    updatedAt: Date;
} 

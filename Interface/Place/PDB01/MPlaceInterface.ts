import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React { ReactNode } from '@types/react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PDB01MPlace object.
 */
export interface PDB01MPlaceInterface {
    name: string;
    imageUrl: string;
    instagramAPIID?: string;
    geometry: GeoPoint;
    geohash: string;
    mapUrl: string;
    website: string;
    address: string;
    phoneNumber: string;
    openingHours: SpelieveInterface.PDB01MPlaceOpeningHoursInterface;
    rating: number;
    popularTags?: Array<string>;
    averageStayTime?: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp;
} 

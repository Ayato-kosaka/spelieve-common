import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryOne object.
 */
export interface ItineraryOneInterface {
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate?: Date;
    endDate?: Date;
    tags?: Array<string>;
    caption: string;
} 

import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of IDB01Itineraries object.
 */
export interface IDB01ItinerariesInterface {
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate?: Timestamp;
    endDate?: Timestamp;
    tags?: Array<string>;
    caption: string;
} 

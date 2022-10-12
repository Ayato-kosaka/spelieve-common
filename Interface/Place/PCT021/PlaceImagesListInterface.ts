import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT021PlaceImagesList object.
 */
export interface PCT021PlaceImagesListInterface {
    imageUrl: string;
    originalUrl: string;
} 

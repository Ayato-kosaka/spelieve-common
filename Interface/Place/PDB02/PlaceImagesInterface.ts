import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PDB02PlaceImages object.
 */
export interface PDB02PlaceImagesInterface {
    imageUrl: string;
    originalUrl: string;
} 

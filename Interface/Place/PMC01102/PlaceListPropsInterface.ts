import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PMC01102PlaceListProps object.
 */
export interface PMC01102PlaceListPropsInterface {
    onPlaceSelected: (data: GooglePlaceData) => void;
} 

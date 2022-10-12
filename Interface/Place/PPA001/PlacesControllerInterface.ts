import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PPA001PlacesController object.
 */
export interface PPA001PlacesControllerInterface {
    onAutoCompleteClicked: (data: GooglePlaceData) => void;
    onPlaceSelected: () => void;
} 

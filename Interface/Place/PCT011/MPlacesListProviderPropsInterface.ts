import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT011MPlacesListProviderProps object.
 */
export interface PCT011MPlacesListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    initialCountry: string;
    initialAdministrativeAreaLevel1: string;
    initialAdministrativeAreaLevel2: string;
    initialLocality: string;
} 

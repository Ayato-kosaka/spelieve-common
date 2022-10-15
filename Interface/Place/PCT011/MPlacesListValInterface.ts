import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT011MPlacesListVal object.
 */
export interface PCT011MPlacesListValInterface {
    placesList: Array<SpelieveInterface.PCT011MPlacesListInterface>;
    setCountry: (country: string) => void;
    setAdministrativeAreaLevel1: (administrativeAreaLevel1: string) => void;
    setAdministrativeAreaLevel2: (administrativeAreaLevel2: string) => void;
    setLocality: (locality: string) => void;
} 

import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlacesListVal object.
 */
export interface MPlacesListValInterface {
    placesList: Array<SpelieveInterface.MPlacesListInterface>;
    setCountry: (country: string) => void;
    setAdministrativeAreaLevel1: (administrativeAreaLevel1: string) => void;
    setAdministrativeAreaLevel2: (administrativeAreaLevel2: string) => void;
    setLocality: (locality: string) => void;
} 

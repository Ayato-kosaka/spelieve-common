import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlacesListProviderProps object.
 */
export interface MPlacesListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    initialCountry: string;
    initialAdministrativeAreaLevel1: string;
    initialAdministrativeAreaLevel2: string;
    initialLocality: string;
} 

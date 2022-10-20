import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlacesProps object.
 */
export interface PlacesPropsInterface {
    country: string;
    administrativeAreaLevel1?: string;
    administrativeAreaLevel2?: string;
    locality?: string;
} 

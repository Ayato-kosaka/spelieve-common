import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PPA001PlacesProps object.
 */
export interface PPA001PlacesPropsInterface {
    country: string;
    administrativeAreaLevel1?: string;
    administrativeAreaLevel2?: string;
    locality?: string;
} 

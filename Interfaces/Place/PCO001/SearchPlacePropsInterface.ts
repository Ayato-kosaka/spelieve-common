import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of SearchPlaceProps object.
 */
export interface SearchPlacePropsInterface {
    onAutoCompleteClicked: (data: GooglePlaceData, details: GooglePlaceDetail) => void;
    hideDistinct?: boolean;
} 

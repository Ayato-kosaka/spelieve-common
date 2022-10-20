import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of UpsertPlaceDataBody object.
 */
export interface UpsertPlaceDataBodyInterface {
    place_id: string;
    language: string;
} 

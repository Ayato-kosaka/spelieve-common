import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PBL002UpsertPlaceDataBody object.
 */
export interface PBL002UpsertPlaceDataBodyInterface {
    place_id: string;
    language: string;
} 
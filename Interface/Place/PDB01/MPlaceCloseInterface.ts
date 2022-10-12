import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PDB01MPlaceClose object.
 */
export interface PDB01MPlaceCloseInterface {
    day: number;
    time: string;
} 

import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PDB01MPlaceOpeningHours object.
 */
export interface PDB01MPlaceOpeningHoursInterface {
    close: SpelieveInterface.PDB01MPlaceCloseInterface;
    open: SpelieveInterface.PDB01MPlaceOpenInterface;
} 

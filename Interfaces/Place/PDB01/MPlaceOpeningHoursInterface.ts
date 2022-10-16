import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlaceOpeningHours object.
 */
export interface MPlaceOpeningHoursInterface {
    close: SpelieveInterface.MPlaceCloseInterface;
    open: SpelieveInterface.MPlaceOpenInterface;
} 

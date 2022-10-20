import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlansMap object.
 */
export interface PlansMapInterface {
    placeReference?: DocumentReference;
    placeSpan: Date;
    placeStartTime: Date;
    placeEndTime: Date;
    tags?: Array<string>;
    imageUrl: string;
    memo?: string;
    transportationMode?: string;
    transportationDepartureTime?: Date;
    transportationArrivalTime?: Date;
    transportationSpan: Date;
} 

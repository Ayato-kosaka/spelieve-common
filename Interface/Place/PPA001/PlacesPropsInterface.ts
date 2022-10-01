import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React { ReactNode } from '@types/react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PPA001PlacesProps object.
 */
export interface PPA001PlacesPropsInterface {
    geopoint: GeoPoint;
    maxDistance: number;
} 

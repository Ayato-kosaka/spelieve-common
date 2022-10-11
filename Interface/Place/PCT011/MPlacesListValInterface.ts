import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from '@types/react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT011MPlacesListVal object.
 */
export interface PCT011MPlacesListValInterface {
    placesList: Array<SpelieveInterface.PCT011MPlacesListInterface>;
    setGeopoint: (geopoint: GeoPoint) => void;
    setMaxDistance: (maxDistance: number) => void;
} 

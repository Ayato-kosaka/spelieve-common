import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT011MPlacesListProviderProps object.
 */
export interface PCT011MPlacesListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    initialGeopoint: GeoPoint;
    initialMaxDistance: number;
} 
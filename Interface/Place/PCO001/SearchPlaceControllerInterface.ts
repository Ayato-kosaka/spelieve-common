import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCO001SearchPlaceController object.
 */
export interface PCO001SearchPlaceControllerInterface {
    searchText: string;
    autoCompletes: Array<string>;
    onSearchTextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 
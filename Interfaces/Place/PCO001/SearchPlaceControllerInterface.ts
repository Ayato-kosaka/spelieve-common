import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of SearchPlaceController object.
 */
export interface SearchPlaceControllerInterface {
    searchText: string;
    autoCompletes: Array<string>;
    onSearchTextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

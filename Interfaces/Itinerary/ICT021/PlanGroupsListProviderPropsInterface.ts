import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupsListProviderProps object.
 */
export interface PlanGroupsListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
} 

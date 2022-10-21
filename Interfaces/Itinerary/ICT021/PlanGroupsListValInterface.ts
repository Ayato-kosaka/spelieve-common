import { GeoPoint, Timestamp, DocumentReference, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupsListVal object.
 */
export interface PlanGroupsListValInterface {
    planGroupsQSnap: QuerySnapshot<SpelieveInterface.PlanGroupsListInterface>;
    planGroupsCRef: (representativeStartTime?: Date) => Promise<void>;
} 

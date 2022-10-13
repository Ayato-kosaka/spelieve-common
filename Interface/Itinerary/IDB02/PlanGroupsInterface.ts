import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of IDB02PlanGroups object.
 */
export interface IDB02PlanGroupsInterface {
    plans: Array<string>;
    representativePlanID: string;
    representativeStartTime: Timestamp;
} 

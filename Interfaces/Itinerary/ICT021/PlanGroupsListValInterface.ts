import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupsListVal object.
 */
export interface PlanGroupsListValInterface {
    planGroupsList: SpelieveInterface.PlanGroupsListInterface[];
    create: (representativeStartTime?: Date) => Promise<void>;
    insertPlan: (index: number, plansIndex?: number, planId?: string) => Promise<void>;
} 

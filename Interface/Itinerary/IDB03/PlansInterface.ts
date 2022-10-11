import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from '@types/react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of IDB03Plans object.
 */
export interface IDB03PlansInterface {
    placeReference?: DocumentReference;
    placeSpan: Timestamp;
    placeStartTime: Timestamp;
    placeEndTime: Timestamp;
    tags?: Array<string>;
    imageUrl: string;
    memo?: string;
    transportationMode?: string;
    transportationDepartureTime?: Timestamp;
    transportationArrivalTime?: Timestamp;
    transportationSpan: Timestamp;
} 

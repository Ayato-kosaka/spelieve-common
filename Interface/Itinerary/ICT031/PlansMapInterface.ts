import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of ICT031PlansMap object.
 */
export interface ICT031PlansMapInterface {
    placeReference?: DocumentReference;
    placeSpan: Date;
    placeStartTime: Date;
    placeEndTime: Date;
    tags?: Array<string>;
    imageUrl: string;
    memo?: string;
    transportationMode?: string;
    transportationDepartureTime?: Date;
    transportationArrivalTime?: Date;
    transportationSpan: Date;
} 
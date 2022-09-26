import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of ICT021PlanGroupsList object.
 */
export interface ICT021PlanGroupsListInterface {
    plans: Array<string>;
    representativePlanID: string;
    representativeStartTime: Date;
} 
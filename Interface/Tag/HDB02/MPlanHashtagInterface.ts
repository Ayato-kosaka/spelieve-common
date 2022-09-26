import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of HDB02MPlanHashtag object.
 */
export interface HDB02MPlanHashtagInterface {
    attachedCount: number;
    stayTime: Timestamp;
} 
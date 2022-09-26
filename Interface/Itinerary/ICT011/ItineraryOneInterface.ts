import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of ICT011ItineraryOne object.
 */
export interface ICT011ItineraryOneInterface {
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate?: Date;
    endDate?: Date;
    tags?: Array<string>;
    caption: string;
} 
import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCT021PlaceImagesList object.
 */
export interface PCT021PlaceImagesListInterface {
    imageUrl: string;
    originalUrl: string;
} 
import { GeoPoint, Timestamp, DocumentReference } from "firebase/firestore";
import { React , ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PPA002PlaceController object.
 */
export interface PPA002PlaceControllerInterface {
    onCreateItineraryClicked: () => void;
    onShowMoreDetailClicked: () => void;
    onShowMoreReviewClicked: () => void;
    onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onShowMoreImageClicked: () => void;
} 
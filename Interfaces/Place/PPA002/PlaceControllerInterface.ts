import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlaceController object.
 */
export interface PlaceControllerInterface {
    onCreateItineraryClicked: () => void;
    onShowMoreDetailClicked: () => void;
    onShowMoreReviewClicked: () => void;
    onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onShowMoreImageClicked: () => void;
} 

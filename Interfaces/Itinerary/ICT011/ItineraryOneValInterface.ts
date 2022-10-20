import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryOneVal object.
 */
export interface ItineraryOneValInterface {
    itinerary: SpelieveInterface.ItineraryOneInterface;
    reference: DocumentReference;
} 

import { DocumentReference } from '@firebase/firestore';
import { ReactNode } from 'react';

/**
 * Export interface of MPlaceOneProviderProps object.
 */
export interface MPlaceOneProviderPropsInterface {
	parentDocRef?: DocumentReference;
	place_id: string;
	language: string;
	children: ReactNode;
}

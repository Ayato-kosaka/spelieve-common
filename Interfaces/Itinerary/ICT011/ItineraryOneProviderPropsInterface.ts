import { DocumentReference } from '@firebase/firestore';
import { ReactNode } from 'react';

/**
 * Export interface of ItineraryOneProviderProps object.
 */
export interface ItineraryOneProviderPropsInterface {
	parentDocRef?: DocumentReference;
	children: ReactNode;
	id: string;
}

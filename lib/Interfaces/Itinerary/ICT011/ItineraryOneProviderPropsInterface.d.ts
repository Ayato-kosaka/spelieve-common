import { DocumentReference } from '@firebase/firestore';
import { ReactNode } from 'react';
export interface ItineraryOneProviderPropsInterface {
    docRef: DocumentReference;
    children: ReactNode;
}

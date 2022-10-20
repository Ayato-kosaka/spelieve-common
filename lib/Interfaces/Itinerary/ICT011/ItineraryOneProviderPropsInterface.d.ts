import { DocumentReference } from '@firebase/firestore-types';
import { ReactNode } from 'react';
export interface ItineraryOneProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    id: string;
}

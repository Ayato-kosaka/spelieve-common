import { DocumentReference } from '@firebase/firestore';
import { ReactNode } from 'react';
export interface ItineraryOneProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    id: string;
}

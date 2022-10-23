import { DocumentReference } from '@firebase/firestore';
import { ReactNode } from 'react';
export interface MPlaceOneProviderPropsInterface {
    parentDocRef?: DocumentReference;
    place_id: string;
    language: string;
    children: ReactNode;
}

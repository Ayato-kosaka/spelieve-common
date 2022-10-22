import { DocumentReference } from '@firebase/firestore';
import { ReactNode } from 'react';
export interface PlansMapProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
}

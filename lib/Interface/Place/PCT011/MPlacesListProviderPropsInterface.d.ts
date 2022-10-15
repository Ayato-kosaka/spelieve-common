import { DocumentReference } from '@firebase/firestore-types';
import { ReactNode } from 'react';
export interface PCT011MPlacesListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    initialCountry: string;
    initialAdministrativeAreaLevel1: string;
    initialAdministrativeAreaLevel2: string;
    initialLocality: string;
}

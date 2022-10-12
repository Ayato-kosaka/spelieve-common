import { GeoPoint, DocumentReference } from '@firebase/firestore-types';
import { ReactNode } from 'react';
export interface PCT011MPlacesListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    initialGeopoint: GeoPoint;
    initialMaxDistance: number;
}

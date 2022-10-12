import { GeoPoint } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interface';
export interface PCT011MPlacesListValInterface {
    placesList: Array<SpelieveInterface.PCT011MPlacesListInterface>;
    setGeopoint: (geopoint: GeoPoint) => void;
    setMaxDistance: (maxDistance: number) => void;
}

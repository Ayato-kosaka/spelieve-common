import { QueryDocumentSnapshot, CollectionReference } from '@firebase/firestore';
import GoogleMaps from '@googlemaps/google-maps-services-js';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlansMapValInterface {
    plansDocSnapMap: {
        [id: string]: QueryDocumentSnapshot<SpelieveInterface.PlansMapInterface>;
    };
    plansCRef?: CollectionReference<SpelieveInterface.PlansMapInterface>;
    isPlansLoading: boolean;
    travelModeConverter: {
        [key in GoogleMaps.TravelMode]: SpelieveInterface.PlansMapEnumConverterContentInterface;
    };
    transitModeConverter: {
        [key in GoogleMaps.TransitMode]: SpelieveInterface.PlansMapEnumConverterContentInterface;
    };
}

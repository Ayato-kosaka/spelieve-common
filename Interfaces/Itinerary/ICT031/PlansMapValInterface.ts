import { QueryDocumentSnapshot, CollectionReference } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlansMapVal object.
 */
export interface PlansMapValInterface {
	plansDocSnapMap: { [id: string]: QueryDocumentSnapshot<SpelieveInterface.PlansMapInterface> };
	plansCRef?: CollectionReference<SpelieveInterface.PlansMapInterface>;
	isPlansLoading: boolean;
	travelModeConverter: { [key in google.maps.TravelMode]: SpelieveInterface.PlansMapEnumConverterContentInterface };
	transitModeConverter: { [key in google.maps.TransitMode]: SpelieveInterface.PlansMapEnumConverterContentInterface };
}

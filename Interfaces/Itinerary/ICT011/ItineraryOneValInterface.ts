import { DocumentSnapshot } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryOneVal object.
 */
export interface ItineraryOneValInterface {
	itineraryDocSnap: DocumentSnapshot<SpelieveInterface.ItineraryOneInterface>;
}

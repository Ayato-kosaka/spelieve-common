import { DocumentReference } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';
export interface ItineraryOneValInterface {
    itinerary: SpelieveInterface.ItineraryOneInterface;
    reference: DocumentReference;
}

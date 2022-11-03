import { DocumentSnapshot } from '@firebase/firestore';
import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryOneVal object.
 */
export interface ItineraryOneValInterface {
	itineraryDocSnap?: DocumentSnapshot<SpelieveInterface.ItineraryOneInterface>;
	setItineraryID: React.Dispatch<React.SetStateAction<string>>;
}

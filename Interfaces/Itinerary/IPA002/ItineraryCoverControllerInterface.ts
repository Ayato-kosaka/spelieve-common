import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryCoverController object.
 */
export interface ItineraryCoverControllerInterface {
	pageItinerary: SpelieveInterface.ItineraryOneInterface | undefined;
	setPageItinerary: React.Dispatch<React.SetStateAction<SpelieveInterface.ItineraryOneInterface | undefined>>;
	updateItinerary: () => void;
}

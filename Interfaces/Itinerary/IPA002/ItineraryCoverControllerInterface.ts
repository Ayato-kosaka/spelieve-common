import React from 'react';
import { TextInputChangeEventData } from 'react-native';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryCoverController object.
 */
export interface ItineraryCoverControllerInterface {
	pageItinerary: SpelieveInterface.ItineraryOneInterface | undefined;
	updateItinerary: () => void;
	handleOnChange: (
		column: keyof SpelieveInterface.ItineraryOneInterface,
	) => ({ nativeEvent }: { nativeEvent: TextInputChangeEventData }) => void;
	deleteTag: (index: number) => void;
	shouldNavigate: boolean;
	isLoading: boolean;
	setPageItinerary: React.Dispatch<React.SetStateAction<SpelieveInterface.ItineraryOneInterface | undefined>>;
}

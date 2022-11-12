import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlacesListVal object.
 */
export interface MPlacesListValInterface {
	placesList: Array<SpelieveInterface.MPlacesListInterface>;
	setAddress: React.Dispatch<React.SetStateAction<SpelieveInterface.MPlacesListAddressInterface>>;
	retrieveMore: () => void;
}

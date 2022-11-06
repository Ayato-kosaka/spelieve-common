import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of MPlaceOneVal object.
 */
export interface MPlaceOneValInterface {
	place: SpelieveInterface.MPlaceOneInterface;
	setPlaceId: React.Dispatch<React.SetStateAction<string>>;
}

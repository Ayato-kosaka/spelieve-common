import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of EditDirectionsModeController object.
 */
export interface EditDirectionsModeControllerInterface {
	directionsMode: Pick<
		SpelieveInterface.PlansMapInterface,
		'transportationMode' | 'transitModes' | 'transitRoutePreference' | 'avoidHighways' | 'avoidTolls' | 'avoidFerries'
	>;
	setDirectionsMode: React.Dispatch<
		React.SetStateAction<
			Pick<
				SpelieveInterface.PlansMapInterface,
				| 'transportationMode'
				| 'transitModes'
				| 'transitRoutePreference'
				| 'avoidHighways'
				| 'avoidTolls'
				| 'avoidFerries'
			>
		>
	>;
	onClose: () => void;
}

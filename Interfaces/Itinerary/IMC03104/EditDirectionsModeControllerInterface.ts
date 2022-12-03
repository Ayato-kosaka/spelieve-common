import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of EditDirectionsModeController object.
 */
export interface EditDirectionsModeControllerInterface {
	directionsMode: Pick<
		SpelieveInterface.PlansMapInterface,
		'transportationMode' | 'transitModes' | 'transitRoutingPreference' | 'avoidHighways' | 'avoidTolls' | 'avoidFerries'
	>;
	setDirectionsMode: React.Dispatch<
		React.SetStateAction<
			Pick<
				SpelieveInterface.PlansMapInterface,
				| 'transportationMode'
				| 'transitModes'
				| 'transitRoutingPreference'
				| 'avoidHighways'
				| 'avoidTolls'
				| 'avoidFerries'
			>
		>
	>;
	onClose: () => void;
}

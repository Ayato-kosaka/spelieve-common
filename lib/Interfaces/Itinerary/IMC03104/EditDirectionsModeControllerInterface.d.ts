import React from 'react';
import * as SpelieveInterface from '../../../Interfaces';
export interface EditDirectionsModeControllerInterface {
    directionsMode: Pick<SpelieveInterface.PlansMapInterface, 'transportationMode' | 'transitModes' | 'transitRoutingPreference' | 'avoidHighways' | 'avoidTolls' | 'avoidFerries'>;
    setDirectionsMode: React.Dispatch<React.SetStateAction<Pick<SpelieveInterface.PlansMapInterface, 'transportationMode' | 'transitModes' | 'transitRoutingPreference' | 'avoidHighways' | 'avoidTolls' | 'avoidFerries'>>>;
    onClose: () => void;
}

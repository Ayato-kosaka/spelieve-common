import React from 'react';
import * as SpelieveInterface from '../../../Interfaces';
export interface EditDirectionsModeControllerInterface {
    directionsMode: Pick<SpelieveInterface.PlansMapInterface, 'transportationMode' | 'transitModes' | 'transitRoutingPreference' | 'avoid'>;
    setDirectionsMode: React.Dispatch<React.SetStateAction<Pick<SpelieveInterface.PlansMapInterface, 'transportationMode' | 'transitModes' | 'transitRoutingPreference' | 'avoid'>>>;
    onClose: () => void;
}

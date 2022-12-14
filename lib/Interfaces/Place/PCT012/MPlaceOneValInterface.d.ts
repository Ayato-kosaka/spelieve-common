import React from 'react';
import * as SpelieveInterface from '../../../Interfaces';
export interface MPlaceOneValInterface {
    place: SpelieveInterface.MPlaceOneInterface | undefined;
    setPlaceID: React.Dispatch<React.SetStateAction<string | undefined>>;
    isLoading: boolean;
}

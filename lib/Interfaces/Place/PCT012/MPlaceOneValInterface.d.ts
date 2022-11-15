import React from 'react';
import * as SpelieveInterface from '../../../Interfaces';
export interface MPlaceOneValInterface {
    place: SpelieveInterface.MPlaceOneInterface | null;
    setPlaceId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

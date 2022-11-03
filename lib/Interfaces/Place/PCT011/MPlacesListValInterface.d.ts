import React from 'react';
import * as SpelieveInterface from '../../../Interfaces';
export interface MPlacesListValInterface {
    placesList: Array<SpelieveInterface.MPlacesListInterface>;
    setAdress: React.Dispatch<React.SetStateAction<SpelieveInterface.MPlacesListAddressInterface>>;
}

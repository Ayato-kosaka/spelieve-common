import React from 'react';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlaceControllerInterface {
    onCreateItineraryClicked: (placeName: string) => void;
    onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
    displayOpeningHours: (openingHours: SpelieveInterface.MPlaceOpeningHoursInterface[] | undefined) => string | Array<[string, string]>;
}

import React from 'react';
export interface PlaceControllerInterface {
    onCreateItineraryClicked: (placeName: string) => void;
    onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

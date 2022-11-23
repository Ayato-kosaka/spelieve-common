import React from 'react';
export interface PlaceControllerInterface {
    onCreateItineraryClicked: () => void;
    onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

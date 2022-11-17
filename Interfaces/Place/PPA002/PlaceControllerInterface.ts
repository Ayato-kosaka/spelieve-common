import React from 'react';

/**
 * Export interface of PlaceController object.
 */
export interface PlaceControllerInterface {
	onCreateItineraryClicked: (placeName: string) => void;
	onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

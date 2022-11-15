import React from 'react';
export interface PlaceControllerInterface {
    onCreateItineraryClicked: (placeName: string) => void;
    onShowMoreDetailClicked: () => void;
    onShowMoreReviewClicked: () => void;
    onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onShowMoreImageClicked: () => void;
}

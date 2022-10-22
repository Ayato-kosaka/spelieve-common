import React from "react";

/**
 * Export interface of PlaceController object.
 */
export interface PlaceControllerInterface {
  onCreateItineraryClicked: () => void;
  onShowMoreDetailClicked: () => void;
  onShowMoreReviewClicked: () => void;
  onImageClicked: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onShowMoreImageClicked: () => void;
}

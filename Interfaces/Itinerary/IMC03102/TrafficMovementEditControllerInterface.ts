import React from 'react';

/**
 * Export interface of TrafficMovementEditController object.
 */
export interface TrafficMovementEditControllerInterface {
	addPlan: () => Promise<void>;
	bottomSheetVisible: boolean;
	setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

import React from 'react';

/**
 * Export interface of EditDirectionsModeProps object.
 */
export interface EditDirectionsModePropsInterface {
	planID: string;
	bottomSheetVisible: boolean;
	setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

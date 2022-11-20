import React from 'react';
export interface TrafficMovementEditControllerInterface {
    addPlan: () => Promise<void>;
    bottomSheetVisible: boolean;
    setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

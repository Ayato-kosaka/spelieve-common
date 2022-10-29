import { ReactNode } from 'react';

/**
 * Export interface of ModalState object.
 */
export interface ModalStateInterface {
	visible: boolean;
	hideLocationY: number;
	modalContent: ReactNode;
}

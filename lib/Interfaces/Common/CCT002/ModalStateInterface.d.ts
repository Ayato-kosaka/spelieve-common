import { ReactNode } from 'react';
export interface ModalStateInterface {
    visible: boolean;
    hideLocationY: number;
    modalContent: ReactNode;
}

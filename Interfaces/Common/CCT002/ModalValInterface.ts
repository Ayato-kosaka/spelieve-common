import React from 'react';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ModalVal object.
 */
export interface ModalValInterface {
	setModalVal: React.Dispatch<React.SetStateAction<SpelieveInterface.ModalStateInterface>>;
}

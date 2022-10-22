import React from 'react';

/**
 * Export interface of SearchPlaceController object.
 */
export interface SearchPlaceControllerInterface {
	searchText: string;
	autoCompletes: Array<string>;
	onSearchTextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

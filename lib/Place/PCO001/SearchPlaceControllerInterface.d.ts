import React from 'react';
export interface PCO001SearchPlaceControllerInterface {
    searchText: string;
    autoCompletes: Array<string>;
    onSearchTextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

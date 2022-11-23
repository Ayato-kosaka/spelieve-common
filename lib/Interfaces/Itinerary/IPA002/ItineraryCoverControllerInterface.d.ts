import React from 'react';
import ReactNative from 'react-native';
import * as SpelieveInterface from '../../../Interfaces';
export interface ItineraryCoverControllerInterface {
    pageItinerary: SpelieveInterface.ItineraryOneInterface | undefined;
    updateItinerary: () => void;
    handleOnChange: (column: keyof SpelieveInterface.ItineraryOneInterface) => ({ nativeEvent }: {
        nativeEvent: ReactNative.TextInputChangeEventData;
    }) => void;
    deleteTag: (index: number) => void;
    shouldNavigate: boolean;
    isLoading: boolean;
    setPageItinerary: React.Dispatch<React.SetStateAction<SpelieveInterface.ItineraryOneInterface | undefined>>;
}

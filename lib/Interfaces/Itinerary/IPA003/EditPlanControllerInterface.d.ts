import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import ReactNative from 'react-native';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';
export interface EditPlanControllerInterface {
    pagePlan: SpelieveInterface.PlansMapInterface;
    isRepresentativePlan: boolean;
    isNeedToShowActivityIndicator: boolean;
    isNeedToNavigateToItineraryEdit: boolean;
    navigateToItineraryEdit: () => void;
    updatePlan: () => void;
    deleteTag: (index: number) => void;
    updateRepresentativeStartDateTime: (event: DateTimePickerEvent, date?: Date | undefined) => void;
    setPlanToRepresentativePlan: () => void;
    onAutoCompleteClicked: (data: GooglePlaceData) => void;
    onChangeMemo: ({ nativeEvent }: {
        nativeEvent: ReactNative.TextInputChangeEventData;
    }) => void;
}

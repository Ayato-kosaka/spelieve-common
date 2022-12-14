import GoogleMaps from '@googlemaps/google-maps-services-js';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import ReactNative from 'react-native';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of EditPlanController object.
 */
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
	onChangeSearchPlace: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputChangeEventData>) => void;
	onAutoCompleteClicked: (data: GoogleMaps.PlaceAutocompleteResult) => void;
	onChangeMemo: ({ nativeEvent }: { nativeEvent: ReactNative.TextInputChangeEventData }) => void;
}

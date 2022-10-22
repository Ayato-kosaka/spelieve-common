import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';

/**
 * Export interface of PlacesController object.
 */
export interface PlacesControllerInterface {
	onAutoCompleteClicked: (data: GooglePlaceData, details: GooglePlaceDetail) => void;
	onPlaceSelected: () => void;
}

import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';

/**
 * Export interface of SearchPlaceProps object.
 */
export interface SearchPlacePropsInterface {
	onAutoCompleteClicked: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void;
	hideDistinct?: boolean;
}

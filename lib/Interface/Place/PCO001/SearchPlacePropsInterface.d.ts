import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
export interface PCO001SearchPlacePropsInterface {
    onAutoCompleteClicked: (data: GooglePlaceData, details: GooglePlaceDetail) => void;
    hideDistinct?: boolean;
}

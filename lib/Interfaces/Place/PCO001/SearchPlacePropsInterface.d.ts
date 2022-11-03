import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
export interface SearchPlacePropsInterface {
    onAutoCompleteClicked: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void;
    hideDistinct: boolean;
}

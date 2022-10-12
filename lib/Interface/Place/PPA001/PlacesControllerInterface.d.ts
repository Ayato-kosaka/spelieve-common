import { GooglePlaceData } from 'react-native-google-places-autocomplete';
export interface PPA001PlacesControllerInterface {
    onAutoCompleteClicked: () => void;
    onPlaceSelected: (data: GooglePlaceData) => void;
}

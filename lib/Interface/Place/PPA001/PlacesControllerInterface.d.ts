import { GooglePlaceData } from 'react-native-google-places-autocomplete';
export interface PPA001PlacesControllerInterface {
    onAutoCompleteClicked: (data: GooglePlaceData) => void;
    onPlaceSelected: () => void;
}

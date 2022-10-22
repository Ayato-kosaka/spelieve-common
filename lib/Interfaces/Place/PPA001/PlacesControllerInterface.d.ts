import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";
export interface PlacesControllerInterface {
    onAutoCompleteClicked: (data: GooglePlaceData, details: GooglePlaceDetail) => void;
    onPlaceSelected: () => void;
}

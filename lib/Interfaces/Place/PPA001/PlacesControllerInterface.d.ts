import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
export interface PlacesControllerInterface {
    onAutoCompleteClicked: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void;
    onPlaceSelected: (place_id: string) => void;
    isLoading: boolean;
}

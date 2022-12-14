import ReactNative from 'react-native';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
export interface SearchPlacePropsInterface {
    onAutocompleteClicked: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void;
    hideCities: boolean;
    fetchDetails: boolean;
    value?: string;
    onChange?: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputChangeEventData>) => void;
    style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
}

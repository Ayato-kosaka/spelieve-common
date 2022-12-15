import ReactNative from 'react-native';

/**
 * Export interface of PlacesListProps object.
 */
export interface PlacesListPropsInterface {
	onPlaceSelected: (place_id: string) => void;
	style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
}

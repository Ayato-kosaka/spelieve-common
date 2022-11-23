import ReactNative from 'react-native';

/**
 * Export interface of DurationPickerController object.
 */
export interface DurationPickerControllerInterface {
	textInputValue: string;
	onFocus: () => void;
	onKeyPress: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputKeyPressEventData>) => void;
	textInputOnBlur: () => Promise<void>;
}

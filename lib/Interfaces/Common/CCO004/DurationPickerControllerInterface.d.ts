import ReactNative from 'react-native';
export interface DurationPickerControllerInterface {
    textInputValue: string;
    onFocus: () => void;
    onKeyPress: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputKeyPressEventData>) => void;
    textInputOnBlur: () => Promise<void>;
}

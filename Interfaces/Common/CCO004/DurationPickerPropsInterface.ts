/**
 * Export interface of DurationPickerProps object.
 */
export interface DurationPickerPropsInterface {
	value: Date;
	onBlur: (newVal: Date) => Promise<void> | void;
}

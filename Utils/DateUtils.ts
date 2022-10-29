export const initialDate = (): Date => new Date(1970, 0, 1, 0, 0, 0);
export const milliSecondsADay: number = 24 * 60 * 60 * 1000;
export const formatDateToTime = (date: Date, hourUnit = ':', minUnit = '') => {
	const [hour, min] = [date.getHours(), date.getMinutes()].map((x) => String(x).padStart(!minUnit ? 2 : 1, '0'));
	if (date.getHours() == 0 && minUnit !== '') {
		return min + minUnit;
	} else {
		return hour + hourUnit + (parseInt(min) != 0 || !minUnit ? min : '');
	}
};
export const formatToHHMM = (date: Date): string => {
	return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

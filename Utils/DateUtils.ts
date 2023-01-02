export const initialDate = (): Date => new Date(1970, 0, 1, 0, 0, 0);
export const milliSecondsADay: number = 24 * 60 * 60 * 1000;
export const formatToHHMM = (date: Date): string => {
	return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};
export const formatToHHMM = (hour: string, min: string): string => {
	if (hour === '0') {
		return `${min}Min`;
	}
	return `${hour}Hrs${min}`;
};

export const addition = (base: Date, addition: Date, types: ('Month' | 'Date' | 'Hours' | 'Minutes' | 'Seconds')[]) => {
	const ret = new Date(base.getTime());
	if (types.includes('Month')) {
		ret.setMonth(base.getMonth() + addition.getMonth());
	}
	if (types.includes('Date')) {
		ret.setDate(base.getDate() + addition.getDate());
	}
	if (types.includes('Hours')) {
		ret.setHours(base.getHours() + addition.getHours());
	}
	if (types.includes('Minutes')) {
		ret.setMinutes(base.getMinutes() + addition.getMinutes());
	}
	if (types.includes('Seconds')) {
		ret.setSeconds(base.getSeconds() + addition.getSeconds());
	}
	return ret;
};

export const subtraction = (
	base: Date,
	subtraction: Date,
	types: ('Month' | 'Date' | 'Hours' | 'Minutes' | 'Seconds')[],
) => {
	const ret = new Date(base.getTime());
	if (types.includes('Month')) {
		ret.setMonth(base.getMonth() - subtraction.getMonth());
	}
	if (types.includes('Date')) {
		ret.setDate(base.getDate() - subtraction.getDate());
	}
	if (types.includes('Hours')) {
		ret.setHours(base.getHours() - subtraction.getHours());
	}
	if (types.includes('Minutes')) {
		ret.setMinutes(base.getMinutes() - subtraction.getMinutes());
	}
	if (types.includes('Seconds')) {
		ret.setSeconds(base.getSeconds() - subtraction.getSeconds());
	}
	return ret;
};

export declare const initialDate: () => Date;
export declare const milliSecondsADay: number;
export declare const formatDateToTime: (date: Date, hourUnit?: string, minUnit?: string) => string;
export declare const formatToHHMM: (date: Date) => string;
export declare const add: (base: Date, addition: Date, types: ('Month' | 'Date' | 'Hours' | 'Minutes' | 'Seconds')[]) => Date;

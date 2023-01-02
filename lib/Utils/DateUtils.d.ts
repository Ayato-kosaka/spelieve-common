export declare const initialDate: () => Date;
export declare const milliSecondsADay: number;
export declare const formatToHHMM: (date: Date) => string;
export declare const formatToHrsMin: (hour: string, min: string) => string;
export declare const addition: (base: Date, addition: Date, types: ('Month' | 'Date' | 'Hours' | 'Minutes' | 'Seconds')[]) => Date;
export declare const subtraction: (base: Date, subtraction: Date, types: ('Month' | 'Date' | 'Hours' | 'Minutes' | 'Seconds')[]) => Date;

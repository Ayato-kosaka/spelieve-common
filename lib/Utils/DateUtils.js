"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = exports.addition = exports.formatToHrsMin = exports.formatToHHMM = exports.milliSecondsADay = exports.initialDate = void 0;
const initialDate = () => new Date(1970, 0, 1, 0, 0, 0);
exports.initialDate = initialDate;
exports.milliSecondsADay = 24 * 60 * 60 * 1000;
const formatToHHMM = (date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};
exports.formatToHHMM = formatToHHMM;
const formatToHrsMin = (hour, min) => {
    if (hour === '0') {
        return `${min}Min`;
    }
    return `${hour}Hrs${min}`;
};
exports.formatToHrsMin = formatToHrsMin;
const addition = (base, addition, types) => {
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
exports.addition = addition;
const subtraction = (base, subtraction, types) => {
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
exports.subtraction = subtraction;
//# sourceMappingURL=DateUtils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.formatToHHMM = exports.formatDateToTime = exports.milliSecondsADay = exports.initialDate = void 0;
const initialDate = () => new Date(1970, 0, 1, 0, 0, 0);
exports.initialDate = initialDate;
exports.milliSecondsADay = 24 * 60 * 60 * 1000;
const formatDateToTime = (date, hourUnit = ':', minUnit = '') => {
    const [hour, min] = [date.getHours(), date.getMinutes()].map((x) => String(x).padStart(!minUnit ? 2 : 1, '0'));
    if (date.getHours() == 0 && minUnit !== '') {
        return min + minUnit;
    }
    else {
        return hour + hourUnit + (parseInt(min) != 0 || !minUnit ? min : '');
    }
};
exports.formatDateToTime = formatDateToTime;
const formatToHHMM = (date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};
exports.formatToHHMM = formatToHHMM;
const add = (base, addition, types) => {
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
exports.add = add;
//# sourceMappingURL=DateUtils.js.map
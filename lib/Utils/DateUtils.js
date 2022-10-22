"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToTime = exports.milliSecondsADay = exports.initialDate = void 0;
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
//# sourceMappingURL=DateUtils.js.map
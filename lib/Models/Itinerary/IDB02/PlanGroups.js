"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanGroups = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class PlanGroups {
    static fromJSON(json) {
        const ret = new PlanGroups();
        ret.plans = json.plans instanceof Array ? json.plans : [];
        ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
        ret.dayNumber = typeof json.dayNumber === 'number' ? json.dayNumber : 0;
        ret.time = json.time instanceof Date ? json.time : DateUtils.initialDate();
        ret.representativeStartDateTime =
            json.representativeStartDateTime instanceof Date ? json.representativeStartDateTime : DateUtils.initialDate();
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.PlanGroups = PlanGroups;
PlanGroups.modelName = 'PlanGroups';
PlanGroups.Cols = {
    plans: 'plans',
    representativePlanID: 'representativePlanID',
    dayNumber: 'dayNumber',
    time: 'time',
    representativeStartDateTime: 'representativeStartDateTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=PlanGroups.js.map
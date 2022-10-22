"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanGroups = void 0;
const DateUtils = require("Utils/DateUtils");
class PlanGroups {
    static fromJSON(json) {
        const ret = new PlanGroups();
        ret.plans = json.plans instanceof Array ? json.plans : [];
        ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
        ret.representativeStartTime =
            json.representativeStartTime instanceof Date ? json.representativeStartTime : DateUtils.initialDate();
        return ret;
    }
}
exports.PlanGroups = PlanGroups;
PlanGroups.modelName = 'PlanGroups';
PlanGroups.Cols = {
    plans: 'plans',
    representativePlanID: 'representativePlanID',
    representativeStartTime: 'representativeStartTime',
};
//# sourceMappingURL=PlanGroups.js.map
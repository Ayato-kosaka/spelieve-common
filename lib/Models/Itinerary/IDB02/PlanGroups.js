"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanGroups = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class PlanGroups {
    static fromJSON(json) {
        const ret = new PlanGroups();
        ret.plans = json.plans instanceof Array ? json.plans : [];
        ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
        ret.representativeStartDateTime =
            json.representativeStartDateTime instanceof Date ? json.representativeStartDateTime : DateUtils.initialDate();
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        ret.ver = typeof json.ver === 'number' ? json.ver : 0;
        return ret;
    }
}
exports.PlanGroups = PlanGroups;
PlanGroups.modelID = 'IDB02';
PlanGroups.modelName = 'PlanGroups';
PlanGroups.Cols = {
    plans: 'plans',
    representativePlanID: 'representativePlanID',
    representativeStartDateTime: 'representativeStartDateTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ver: 'ver',
};
//# sourceMappingURL=PlanGroups.js.map
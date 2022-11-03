"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPlanTag = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MPlanTag {
    static fromJSON(json) {
        const ret = new MPlanTag();
        ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
        ret.stayTime = json.stayTime instanceof Date ? json.stayTime : DateUtils.initialDate();
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MPlanTag = MPlanTag;
MPlanTag.modelName = 'MPlanTag';
MPlanTag.Cols = {
    attachedCount: 'attachedCount',
    stayTime: 'stayTime',
    createdAt: 'createdAt',
};
//# sourceMappingURL=MPlanTag.js.map
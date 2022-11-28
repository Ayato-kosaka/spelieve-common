"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPlanTags = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MPlanTags {
    static fromJSON(json) {
        const ret = new MPlanTags();
        ret.tag = typeof json.tag === 'string' ? json.tag : '';
        ret.attached_count = typeof json.attached_count === 'number' ? json.attached_count : 0;
        ret.stayTime = json.stayTime instanceof Date ? json.stayTime : DateUtils.initialDate();
        ret.created_at = json.created_at instanceof Date ? json.created_at : DateUtils.initialDate();
        return ret;
    }
}
exports.MPlanTags = MPlanTags;
MPlanTags.modelName = 'MPlanTags';
MPlanTags.Cols = {
    tag: 'tag',
    attached_count: 'attached_count',
    stayTime: 'stayTime',
    created_at: 'created_at',
};
//# sourceMappingURL=MPlanTags.js.map
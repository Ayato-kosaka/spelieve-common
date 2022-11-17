"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MItineraryHashtag = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MItineraryHashtag {
    static fromJSON(json) {
        const ret = new MItineraryHashtag();
        ret.name = typeof json.name === 'string' ? json.name : '';
        ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MItineraryHashtag = MItineraryHashtag;
MItineraryHashtag.modelName = 'MItineraryHashtag';
MItineraryHashtag.Cols = {
    name: 'name',
    attachedCount: 'attachedCount',
    createdAt: 'createdAt',
};
//# sourceMappingURL=MItineraryHashtag.js.map
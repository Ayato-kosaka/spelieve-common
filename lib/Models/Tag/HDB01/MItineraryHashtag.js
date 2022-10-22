"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MItineraryHashtag = void 0;
class MItineraryHashtag {
    static fromJSON(json) {
        const ret = new MItineraryHashtag();
        ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
        return ret;
    }
}
exports.MItineraryHashtag = MItineraryHashtag;
MItineraryHashtag.modelName = 'MItineraryHashtag';
MItineraryHashtag.Cols = {
    attachedCount: 'attachedCount',
};
//# sourceMappingURL=MItineraryHashtag.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timelines = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class Timelines {
    static fromJSON(json) {
        const ret = new Timelines();
        ret.parentTimelineID = typeof json.parentTimelineID === 'string' ? json.parentTimelineID : undefined;
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
        ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
        ret.caption = typeof json.caption === 'string' ? json.caption : '';
        ret.thumbnailID = typeof json.thumbnailID === 'string' ? json.thumbnailID : undefined;
        ret.textMap = json.textMap instanceof Object ? json.textMap : {};
        ret.storeUrlMap = json.storeUrlMap instanceof Object ? json.storeUrlMap : {};
        ret.isPosted = typeof json.isPosted === 'boolean' ? json.isPosted : false;
        ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
        ret.representativeStartDateTime =
            json.representativeStartDateTime instanceof Date ? json.representativeStartDateTime : DateUtils.initialDate();
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.Timelines = Timelines;
Timelines.modelID = 'IDB07';
Timelines.modelName = 'Timelines';
Timelines.Cols = {
    parentTimelineID: 'parentTimelineID',
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    caption: 'caption',
    thumbnailID: 'thumbnailID',
    textMap: 'textMap',
    storeUrlMap: 'storeUrlMap',
    isPosted: 'isPosted',
    representativePlanID: 'representativePlanID',
    representativeStartDateTime: 'representativeStartDateTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=Timelines.js.map
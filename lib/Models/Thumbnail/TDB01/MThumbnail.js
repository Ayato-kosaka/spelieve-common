"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MThumbnail = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MThumbnail {
    static fromJSON(json) {
        const ret = new MThumbnail();
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
        ret.aspectRatio = typeof json.aspectRatio === 'number' ? json.aspectRatio : 0;
        ret.prevThumbnailID = typeof json.prevThumbnailID === 'string' ? json.prevThumbnailID : undefined;
        ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
        ret.dummyTextMap = json.dummyTextMap instanceof Object ? json.dummyTextMap : {};
        ret.dummyStoreUrlMap = json.dummyStoreUrlMap instanceof Object ? json.dummyStoreUrlMap : {};
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MThumbnail = MThumbnail;
MThumbnail.modelName = 'MThumbnail';
MThumbnail.Cols = {
    imageUrl: 'imageUrl',
    aspectRatio: 'aspectRatio',
    prevThumbnailID: 'prevThumbnailID',
    attachedCount: 'attachedCount',
    dummyTextMap: 'dummyTextMap',
    dummyStoreUrlMap: 'dummyStoreUrlMap',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=MThumbnail.js.map
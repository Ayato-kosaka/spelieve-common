"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MThumbnail = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MThumbnail {
    static fromJSON(json) {
        const ret = new MThumbnail();
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
        ret.prevThumbnailID = typeof json.prevThumbnailID === 'string' ? json.prevThumbnailID : undefined;
        ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : undefined;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MThumbnail = MThumbnail;
MThumbnail.modelName = 'MThumbnail';
MThumbnail.Cols = {
    imageUrl: 'imageUrl',
    prevThumbnailID: 'prevThumbnailID',
    attachedCount: 'attachedCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=MThumbnail.js.map
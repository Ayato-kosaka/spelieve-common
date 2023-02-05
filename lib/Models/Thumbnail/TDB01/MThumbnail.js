"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MThumbnail = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MThumbnail {
    static fromJSON(json) {
        const ret = new MThumbnail();
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
        ret.backgroundItemType = typeof json.backgroundItemType === 'string' ? json.backgroundItemType : '';
        ret.copied_count = typeof json.copied_count === 'number' ? json.copied_count : 0;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MThumbnail = MThumbnail;
MThumbnail.modelName = 'MThumbnail';
MThumbnail.Cols = {
    imageUrl: 'imageUrl',
    backgroundItemType: 'backgroundItemType',
    copied_count: 'copied_count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=MThumbnail.js.map
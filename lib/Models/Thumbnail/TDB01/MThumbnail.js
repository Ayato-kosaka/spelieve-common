"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MThumbnail = void 0;
class MThumbnail {
    static fromJSON(json) {
        const ret = new MThumbnail();
        ret.backgroundItemType = typeof json.backgroundItemType === 'string' ? json.backgroundItemType : '';
        return ret;
    }
}
exports.MThumbnail = MThumbnail;
MThumbnail.modelName = 'MThumbnail';
MThumbnail.Cols = {
    backgroundItemType: 'backgroundItemType',
};
//# sourceMappingURL=MThumbnail.js.map
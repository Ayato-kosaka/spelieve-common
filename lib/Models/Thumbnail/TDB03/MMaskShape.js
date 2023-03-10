"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MMaskShape = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MMaskShape {
    static fromJSON(json) {
        const ret = new MMaskShape();
        ret.storageUrl = typeof json.storageUrl === 'string' ? json.storageUrl : '';
        ret.attached_count = typeof json.attached_count === 'number' ? json.attached_count : undefined;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MMaskShape = MMaskShape;
MMaskShape.modelName = 'MMaskShape';
MMaskShape.Cols = {
    storageUrl: 'storageUrl',
    attached_count: 'attached_count',
    createdAt: 'createdAt',
};
//# sourceMappingURL=MMaskShape.js.map
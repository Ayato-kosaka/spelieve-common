"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MMaskShape = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class MMaskShape {
    static fromJSON(json) {
        const ret = new MMaskShape();
        ret.storageUrl = typeof json.storageUrl === 'string' ? json.storageUrl : '';
        ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : undefined;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.MMaskShape = MMaskShape;
MMaskShape.modelID = 'TDB03';
MMaskShape.modelName = 'MMaskShape';
MMaskShape.Cols = {
    storageUrl: 'storageUrl',
    attachedCount: 'attachedCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=MMaskShape.js.map
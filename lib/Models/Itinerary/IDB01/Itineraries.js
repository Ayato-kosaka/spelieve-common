"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itineraries = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class Itineraries {
    static fromJSON(json) {
        const ret = new Itineraries();
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
        ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
        ret.caption = typeof json.caption === 'string' ? json.caption : '';
        ret.thumbnailID = typeof json.thumbnailID === 'string' ? json.thumbnailID : undefined;
        ret.textMap = json.textMap instanceof Object ? json.textMap : {};
        ret.storeUrlMap = json.storeUrlMap instanceof Object ? json.storeUrlMap : {};
        ret.isUpdatable = typeof json.isUpdatable === 'boolean' ? json.isUpdatable : false;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        ret.ver = typeof json.ver === 'number' ? json.ver : 0;
        return ret;
    }
}
exports.Itineraries = Itineraries;
Itineraries.modelID = 'IDB01';
Itineraries.modelName = 'Itineraries';
Itineraries.Cols = {
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    caption: 'caption',
    thumbnailID: 'thumbnailID',
    textMap: 'textMap',
    storeUrlMap: 'storeUrlMap',
    isUpdatable: 'isUpdatable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ver: 'ver',
};
//# sourceMappingURL=Itineraries.js.map
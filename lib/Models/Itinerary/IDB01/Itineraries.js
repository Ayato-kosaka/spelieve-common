"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itineraries = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class Itineraries {
    static fromJSON(json) {
        const ret = new Itineraries();
        ret.title = typeof json.title === 'string' ? json.title : '';
        ret.subTitle = typeof json.subTitle === 'string' ? json.subTitle : undefined;
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
        ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
        ret.tags = json.tags instanceof Array ? json.tags : [];
        ret.caption = typeof json.caption === 'string' ? json.caption : '';
        ret.isUpdatable = typeof json.isUpdatable === 'boolean' ? json.isUpdatable : false;
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.Itineraries = Itineraries;
Itineraries.modelName = 'Itineraries';
Itineraries.Cols = {
    title: 'title',
    subTitle: 'subTitle',
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    tags: 'tags',
    caption: 'caption',
    isUpdatable: 'isUpdatable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=Itineraries.js.map
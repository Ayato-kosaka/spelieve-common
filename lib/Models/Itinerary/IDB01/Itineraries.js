"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itineraries = void 0;
class Itineraries {
    static fromJSON(json) {
        const ret = new Itineraries();
        ret.title = typeof json.title === 'string' ? json.title : '';
        ret.subTitle = typeof json.subTitle === 'string' ? json.subTitle : undefined;
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
        ret.startDate = json.startDate instanceof Date ? json.startDate : undefined;
        ret.endDate = json.endDate instanceof Date ? json.endDate : undefined;
        ret.tags = json.tags instanceof Array ? json.tags : undefined;
        ret.caption = typeof json.caption === 'string' ? json.caption : '';
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
    endDate: 'endDate',
    tags: 'tags',
    caption: 'caption',
};
//# sourceMappingURL=Itineraries.js.map
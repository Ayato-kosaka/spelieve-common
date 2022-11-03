"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class Plans {
    static fromJSON(json) {
        const ret = new Plans();
        ret.place_id = typeof json.place_id === 'string' ? json.place_id : '';
        ret.title = typeof json.title === 'string' ? json.title : '';
        ret.placeSpan = json.placeSpan instanceof Date ? json.placeSpan : DateUtils.initialDate();
        ret.placeStartTime = json.placeStartTime instanceof Date ? json.placeStartTime : DateUtils.initialDate();
        ret.placeEndTime = json.placeEndTime instanceof Date ? json.placeEndTime : DateUtils.initialDate();
        ret.tags = json.tags instanceof Array ? json.tags : [];
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
        ret.memo = typeof json.memo === 'string' ? json.memo : undefined;
        ret.transportationMode = typeof json.transportationMode === 'string' ? json.transportationMode : undefined;
        ret.transportationDepartureTime =
            json.transportationDepartureTime instanceof Date ? json.transportationDepartureTime : undefined;
        ret.transportationArrivalTime =
            json.transportationArrivalTime instanceof Date ? json.transportationArrivalTime : undefined;
        ret.transportationSpan =
            json.transportationSpan instanceof Date ? json.transportationSpan : DateUtils.initialDate();
        ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
        ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
        return ret;
    }
}
exports.Plans = Plans;
Plans.modelName = 'Plans';
Plans.Cols = {
    place_id: 'place_id',
    title: 'title',
    placeSpan: 'placeSpan',
    placeStartTime: 'placeStartTime',
    placeEndTime: 'placeEndTime',
    tags: 'tags',
    imageUrl: 'imageUrl',
    memo: 'memo',
    transportationMode: 'transportationMode',
    transportationDepartureTime: 'transportationDepartureTime',
    transportationArrivalTime: 'transportationArrivalTime',
    transportationSpan: 'transportationSpan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
//# sourceMappingURL=Plans.js.map
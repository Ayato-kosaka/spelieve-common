"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = void 0;
const firestore_1 = require("@firebase/firestore");
const DateUtils = require("../../../Utils/DateUtils");
class Plans {
    static fromJSON(json) {
        const ret = new Plans();
        ret.placeReference = json.placeReference instanceof firestore_1.DocumentReference ? json.placeReference : undefined;
        ret.placeSpan = json.placeSpan instanceof Date ? json.placeSpan : DateUtils.initialDate();
        ret.placeStartTime = json.placeStartTime instanceof Date ? json.placeStartTime : DateUtils.initialDate();
        ret.placeEndTime = json.placeEndTime instanceof Date ? json.placeEndTime : DateUtils.initialDate();
        ret.tags = json.tags instanceof Array ? json.tags : undefined;
        ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : '';
        ret.memo = typeof json.memo === 'string' ? json.memo : undefined;
        ret.transportationMode = typeof json.transportationMode === 'string' ? json.transportationMode : undefined;
        ret.transportationDepartureTime =
            json.transportationDepartureTime instanceof Date ? json.transportationDepartureTime : undefined;
        ret.transportationArrivalTime =
            json.transportationArrivalTime instanceof Date ? json.transportationArrivalTime : undefined;
        ret.transportationSpan =
            json.transportationSpan instanceof Date ? json.transportationSpan : DateUtils.initialDate();
        return ret;
    }
}
exports.Plans = Plans;
Plans.modelName = 'Plans';
Plans.Cols = {
    placeReference: 'placeReference',
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
};
//# sourceMappingURL=Plans.js.map
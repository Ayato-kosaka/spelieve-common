"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plans_1 = require("spelieve-common-v2.0/lib/Models/Itinerary/IDB03/Plans");
const Plans_2 = require("spelieve-common-v2.1/lib/Models/Itinerary/IDB03/Plans");
exports.default = (json) => {
    const ver = json.ver;
    if (ver >= 2.1) {
        return Plans_2.Plans.fromJSON(json);
    }
    else {
        const old = Plans_1.Plans.fromJSON(json);
        const textMap = {};
        if (old.title)
            Object.assign(textMap, { [Plans_1.Plans.Cols.title]: old.title });
        if (old.tags)
            Object.assign(textMap, old.tags.reduce((prev, val, index) => Object.assign(prev, { ['label_' + index.toString()]: val }), {}));
        const storeUrlMap = {};
        if (old.imageUrl)
            Object.assign(storeUrlMap, {
                [Plans_1.Plans.Cols.imageUrl]: old.imageUrl,
            });
        const thumbnailID = 'v2_0';
        const { place_id, title, placeSpan, placeStartTime, placeEndTime, imageUrl, memo, transportationMode, transportationDepartureTime, transportationArrivalTime, transportationSpan, avoid, transitModes, transitRoutingPreference, createdAt, updatedAt, } = old;
        return {
            place_id,
            title,
            placeSpan,
            placeStartTime,
            placeEndTime,
            imageUrl,
            memo,
            transportationMode,
            transportationDepartureTime,
            transportationArrivalTime,
            transportationSpan,
            avoid,
            transitModes,
            transitRoutingPreference,
            thumbnailID,
            textMap,
            storeUrlMap,
            createdAt,
            updatedAt,
            ver: 2.1,
        };
    }
};
//# sourceMappingURL=IDB03.js.map
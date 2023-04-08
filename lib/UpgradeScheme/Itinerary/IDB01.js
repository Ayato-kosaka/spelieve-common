"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Itineraries_1 = require("spelieve-common-v2.0/lib/Models/Itinerary/IDB01/Itineraries");
const Itineraries_2 = require("spelieve-common-v2.1/lib/Models/Itinerary/IDB01/Itineraries");
exports.default = (json) => {
    const ver = json.ver;
    if (ver >= 2.1) {
        return Itineraries_2.Itineraries.fromJSON(json);
    }
    else {
        const old = Itineraries_1.Itineraries.fromJSON(json);
        const textMap = {};
        if (old.title)
            Object.assign(textMap, { [Itineraries_1.Itineraries.Cols.title]: old.title });
        if (old.subTitle)
            Object.assign(textMap, {
                [Itineraries_1.Itineraries.Cols.subTitle]: old.subTitle,
            });
        if (old.tags)
            Object.assign(textMap, old.tags.reduce((prev, val, index) => Object.assign(prev, { ['label_' + index.toString()]: val }), {}));
        const storeUrlMap = {};
        if (old.imageUrl)
            Object.assign(storeUrlMap, {
                [Itineraries_1.Itineraries.Cols.imageUrl]: old.imageUrl,
            });
        const thumbnailID = 'v2_0';
        const { imageUrl, startDate, caption, isUpdatable, createdAt, updatedAt } = old;
        return {
            imageUrl,
            startDate,
            caption,
            thumbnailID,
            textMap,
            storeUrlMap,
            isUpdatable,
            createdAt,
            updatedAt,
        };
    }
};
//# sourceMappingURL=IDB01.js.map
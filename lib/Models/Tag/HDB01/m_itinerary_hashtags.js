"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_itinerary_hashtags = void 0;
const DateUtils = require("../../../Utils/DateUtils");
class m_itinerary_hashtags {
    static fromJSON(json) {
        const ret = new m_itinerary_hashtags();
        ret.tag = typeof json.tag === 'string' ? json.tag : '';
        ret.attached_count = typeof json.attached_count === 'number' ? json.attached_count : 0;
        ret.created_at = json.created_at instanceof Date ? json.created_at : DateUtils.initialDate();
        return ret;
    }
}
exports.m_itinerary_hashtags = m_itinerary_hashtags;
m_itinerary_hashtags.modelID = 'HDB01';
m_itinerary_hashtags.modelName = 'm_itinerary_hashtags';
m_itinerary_hashtags.Cols = {
    tag: 'tag',
    attached_count: 'attached_count',
    created_at: 'created_at',
};
//# sourceMappingURL=m_itinerary_hashtags.js.map
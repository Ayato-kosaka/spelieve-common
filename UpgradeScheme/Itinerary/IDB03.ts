import { Plans as PlansV2_0 } from 'spelieve-common-v2.0/lib/Models/Itinerary/IDB03/Plans';
import { Plans as PlansV2_1 } from 'spelieve-common-v2.1/lib/Models/Itinerary/IDB03/Plans';

export default (json: any): PlansV2_1 => {
	const ver: number = json.ver;
	if (ver >= 2.1) {
		return PlansV2_1.fromJSON(json);
	} else {
		const old = PlansV2_0.fromJSON(json); // 過去の upgradeScheme があればそれを使う

		// change: https://github.com/Ayato-kosaka/spelieve/issues/668
		const textMap = {};
		if (old.title) Object.assign(textMap, { [PlansV2_0.Cols.title]: old.title });
		if (old.tags)
			Object.assign(
				textMap,
				old.tags.reduce((prev, val, index) => Object.assign(prev, { ['label_' + (index + 1).toString()]: val }), {}),
			);

		// change: https://github.com/Ayato-kosaka/spelieve/issues/670
		const storeUrlMap = {};
		if (old.imageUrl)
			Object.assign(storeUrlMap, {
				[PlansV2_0.Cols.imageUrl]: old.imageUrl,
			});

		// change: https://github.com/Ayato-kosaka/spelieve/issues/669
		const thumbnailID = 'v2_0';

		const {
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
			createdAt,
			updatedAt,
		} = old;

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
		};
	}
};

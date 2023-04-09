import { Itineraries as ItinerariesV2_0 } from 'spelieve-common-v2.0/lib/Models/Itinerary/IDB01/Itineraries';
import { Itineraries as ItinerariesV2_1 } from 'spelieve-common-v2.1/lib/Models/Itinerary/IDB01/Itineraries';

export default (json: any): ItinerariesV2_1 => {
	const ver: number = json.ver;
	if (ver >= 2.1) {
		return ItinerariesV2_1.fromJSON(json);
	} else {
		const old = ItinerariesV2_0.fromJSON(json); // 過去の upgradeScheme があればそれを使う

		// change: https://github.com/Ayato-kosaka/spelieve/issues/599
		const textMap = {};
		if (old.title) Object.assign(textMap, { [ItinerariesV2_0.Cols.title]: old.title });
		if (old.subTitle)
			Object.assign(textMap, {
				[ItinerariesV2_0.Cols.subTitle]: old.subTitle,
			});
		if (old.tags)
			Object.assign(
				textMap,
				old.tags.reduce((prev, val, index) => Object.assign(prev, { ['label_' + (index+1).toString()]: val }), {}),
			);

		// change: https://github.com/Ayato-kosaka/spelieve/issues/601
		const storeUrlMap = {};
		if (old.imageUrl)
			Object.assign(storeUrlMap, {
				[ItinerariesV2_0.Cols.imageUrl]: old.imageUrl,
			});

		// change: https://github.com/Ayato-kosaka/spelieve/issues/598
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

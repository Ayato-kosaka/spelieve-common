import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB03Plans model class.
 */
export class Plans {
	static modelName = 'Plans';

	static Cols = {
		place_id: 'place_id',
		placeSpan: 'placeSpan',
		placeStartTime: 'placeStartTime',
		placeEndTime: 'placeEndTime',
		imageUrl: 'imageUrl',
		memo: 'memo',
		transportationMode: 'transportationMode',
		transportationDepartureTime: 'transportationDepartureTime',
		transportationArrivalTime: 'transportationArrivalTime',
		transportationSpan: 'transportationSpan',
		avoid: 'avoid',
		transitModes: 'transitModes',
		transitRoutingPreference: 'transitRoutingPreference',
		thumbnailID: 'thumbnailID',
		textMap: 'textMap',
		storeUrlMap: 'storeUrlMap',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Plans {
		const ret = new Plans();
		ret.place_id = typeof json.place_id === 'string' ? json.place_id : undefined;
		ret.placeSpan = json.placeSpan instanceof Date ? json.placeSpan : DateUtils.initialDate();
		ret.placeStartTime = json.placeStartTime instanceof Date ? json.placeStartTime : DateUtils.initialDate();
		ret.placeEndTime = json.placeEndTime instanceof Date ? json.placeEndTime : DateUtils.initialDate();
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.memo = typeof json.memo === 'string' ? json.memo : undefined;
		ret.transportationMode = typeof json.transportationMode === 'string' ? json.transportationMode : undefined;
		ret.transportationDepartureTime =
			json.transportationDepartureTime instanceof Date ? json.transportationDepartureTime : undefined;
		ret.transportationArrivalTime =
			json.transportationArrivalTime instanceof Date ? json.transportationArrivalTime : undefined;
		ret.transportationSpan =
			json.transportationSpan instanceof Date ? json.transportationSpan : DateUtils.initialDate();
		ret.avoid = json.avoid instanceof Array ? json.avoid : [];
		ret.transitModes = json.transitModes instanceof Array ? json.transitModes : [];
		ret.transitRoutingPreference =
			typeof json.transitRoutingPreference === 'string' ? json.transitRoutingPreference : '';
		ret.thumbnailID = typeof json.thumbnailID === 'string' ? json.thumbnailID : undefined;
		ret.textMap = json.textMap instanceof Object ? json.textMap : {};
		ret.storeUrlMap = json.storeUrlMap instanceof Object ? json.storeUrlMap : {};
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	place_id?: string;

	placeSpan: Date;

	placeStartTime: Date;

	placeEndTime: Date;

	imageUrl?: string;

	memo?: string;

	transportationMode?: string;

	transportationDepartureTime?: Date;

	transportationArrivalTime?: Date;

	transportationSpan: Date;

	avoid: Array<string>;

	transitModes: Array<string>;

	transitRoutingPreference: string;

	thumbnailID?: string;

	textMap: { [key: string]: string };

	storeUrlMap: { [key: string]: string };

	createdAt: Date;

	updatedAt: Date;
}

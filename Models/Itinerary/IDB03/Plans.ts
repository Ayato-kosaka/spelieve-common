import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB03Plans model class.
 */
export class Plans {
	static modelName = 'Plans';

	static Cols = {
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
		avoidFerries: 'avoidFerries',
		avoidHighways: 'avoidHighways',
		avoidTolls: 'avoidTolls',
		transitModes: 'transitModes',
		transitRoutingPreference: 'transitRoutingPreference',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Plans {
		const ret = new Plans();
		ret.place_id = typeof json.place_id === 'string' ? json.place_id : undefined;
		ret.title = typeof json.title === 'string' ? json.title : '';
		ret.placeSpan = json.placeSpan instanceof Date ? json.placeSpan : DateUtils.initialDate();
		ret.placeStartTime = json.placeStartTime instanceof Date ? json.placeStartTime : DateUtils.initialDate();
		ret.placeEndTime = json.placeEndTime instanceof Date ? json.placeEndTime : DateUtils.initialDate();
		ret.tags = json.tags instanceof Array ? json.tags : [];
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.memo = typeof json.memo === 'string' ? json.memo : undefined;
		ret.transportationMode = typeof json.transportationMode === 'string' ? json.transportationMode : undefined;
		ret.transportationDepartureTime =
			json.transportationDepartureTime instanceof Date ? json.transportationDepartureTime : undefined;
		ret.transportationArrivalTime =
			json.transportationArrivalTime instanceof Date ? json.transportationArrivalTime : undefined;
		ret.transportationSpan =
			json.transportationSpan instanceof Date ? json.transportationSpan : DateUtils.initialDate();
		ret.avoidFerries = typeof json.avoidFerries === 'boolean' ? json.avoidFerries : false;
		ret.avoidHighways = typeof json.avoidHighways === 'boolean' ? json.avoidHighways : false;
		ret.avoidTolls = typeof json.avoidTolls === 'boolean' ? json.avoidTolls : false;
		ret.transitModes = json.transitModes instanceof Array ? json.transitModes : [];
		ret.transitRoutingPreference =
			typeof json.transitRoutingPreference === 'string' ? json.transitRoutingPreference : '';
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	place_id?: string;

	title: string;

	placeSpan: Date;

	placeStartTime: Date;

	placeEndTime: Date;

	tags: Array<string>;

	imageUrl?: string;

	memo?: string;

	transportationMode?: string;

	transportationDepartureTime?: Date;

	transportationArrivalTime?: Date;

	transportationSpan: Date;

	avoidFerries: boolean;

	avoidHighways: boolean;

	avoidTolls: boolean;

	transitModes: Array<string>;

	transitRoutingPreference: string;

	createdAt: Date;

	updatedAt: Date;
}

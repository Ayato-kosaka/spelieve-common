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

	static fromJSON(json: any): Plans {
		const ret = new Plans();
		ret.place_id = typeof json.place_id === 'string' ? json.place_id : '';
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
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	place_id: string;

	placeSpan: Date;

	placeStartTime: Date;

	placeEndTime: Date;

	tags?: Array<string>;

	imageUrl: string;

	memo?: string;

	transportationMode?: string;

	transportationDepartureTime?: Date;

	transportationArrivalTime?: Date;

	transportationSpan: Date;

	createdAt: Date;

	updatedAt: Date;
}

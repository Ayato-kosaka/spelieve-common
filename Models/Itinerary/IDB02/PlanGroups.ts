import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB02PlanGroups model class.
 */
export class PlanGroups {
	static modelName = 'PlanGroups';

	static Cols = {
		plans: 'plans',
		representativePlanID: 'representativePlanID',
		dayNumber: 'dayNumber',
		time: 'time',
		representativeStartDateTime: 'representativeStartDateTime',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): PlanGroups {
		const ret = new PlanGroups();
		ret.plans = json.plans instanceof Array ? json.plans : [];
		ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
		ret.dayNumber = typeof json.dayNumber === 'number' ? json.dayNumber : 0;
		ret.time = json.time instanceof Date ? json.time : DateUtils.initialDate();
		ret.representativeStartDateTime =
			json.representativeStartDateTime instanceof Date ? json.representativeStartDateTime : DateUtils.initialDate();
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	plans: Array<string>;

	representativePlanID: string;

	dayNumber: number;

	time: Date;

	representativeStartDateTime: Date;

	createdAt: Date;

	updatedAt: Date;
}

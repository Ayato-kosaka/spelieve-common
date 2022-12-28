import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB02PlanGroups model class.
 */
export class PlanGroups {
	static modelName = 'PlanGroups';

	static Cols = {
		plans: 'plans',
		representativePlanID: 'representativePlanID',
		representativeStartDateTime: 'representativeStartDateTime',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): PlanGroups {
		const ret = new PlanGroups();
		ret.plans = json.plans instanceof Array ? json.plans : [];
		ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
		ret.representativeStartDateTime =
			json.representativeStartDateTime instanceof Date ? json.representativeStartDateTime : DateUtils.initialDate();
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	plans: Array<string>;

	representativePlanID: string;

	representativeStartDateTime: Date;

	createdAt: Date;

	updatedAt: Date;
}

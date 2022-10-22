import * as DateUtils from 'Utils/DateUtils';

/**
 * Export IDB02PlanGroups model class.
 */
export class PlanGroups {
	static modelName = 'PlanGroups';

	static Cols = {
		plans: 'plans',
		representativePlanID: 'representativePlanID',
		representativeStartTime: 'representativeStartTime',
	};

	static fromJSON(json: any): PlanGroups {
		const ret = new PlanGroups();
		ret.plans = json.plans instanceof Array ? json.plans : [];
		ret.representativePlanID = typeof json.representativePlanID === 'string' ? json.representativePlanID : '';
		ret.representativeStartTime =
			json.representativeStartTime instanceof Date ? json.representativeStartTime : DateUtils.initialDate();
		return ret;
	}

	plans: Array<string>;

	representativePlanID: string;

	representativeStartTime: Date;
}

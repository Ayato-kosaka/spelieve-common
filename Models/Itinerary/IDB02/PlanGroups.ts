import { Timestamp } from '@firebase/firestore';

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

	plans: Array<string>;

	representativePlanID: string;

	representativeStartTime: Timestamp;
}

import { QuerySnapshot, CollectionReference } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupsListVal object.
 */
export interface PlanGroupsListValInterface {
	planGroupsQSnap?: QuerySnapshot<SpelieveInterface.PlanGroupsListInterface>;
	planGroupsCRef?: CollectionReference<SpelieveInterface.PlanGroupsListInterface>;
	createPlanGroup: (plan?: Partial<SpelieveInterface.PlansMapInterface>) => Promise<void>;
}

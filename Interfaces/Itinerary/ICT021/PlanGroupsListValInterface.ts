import { QuerySnapshot } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupsListVal object.
 */
export interface PlanGroupsListValInterface {
	planGroupsQSnap: QuerySnapshot<SpelieveInterface.PlanGroupsListInterface>;
	planGroupsCRef: (representativeStartTime?: Date) => Promise<void>;
}

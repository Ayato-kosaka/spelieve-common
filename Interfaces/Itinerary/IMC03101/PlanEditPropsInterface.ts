import { QueryDocumentSnapshot } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanEditProps object.
 */
export interface PlanEditPropsInterface {
	planID: string;
	beforeAfterRepresentativeType: 'before' | 'representative' | 'after';
	planGroupsDoc: QueryDocumentSnapshot<SpelieveInterface.PlanGroupsListInterface>;
	dependentPlanID: string;
	isPlanGroupMounted: boolean;
}

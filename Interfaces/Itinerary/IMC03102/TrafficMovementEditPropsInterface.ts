import { QueryDocumentSnapshot } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of TrafficMovementEditProps object.
 */
export interface TrafficMovementEditPropsInterface {
	planID: string;
	beforeAfterRepresentativeType: 'before' | 'representative' | 'after';
	planGroupsDoc: QueryDocumentSnapshot<SpelieveInterface.PlanGroupsListInterface>;
	dependentPlanID: string;
	isPlanGroupMounted: boolean;
	nextPlanID?: string;
}

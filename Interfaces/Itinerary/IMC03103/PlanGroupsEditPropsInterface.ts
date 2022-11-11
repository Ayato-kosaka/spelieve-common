import { QueryDocumentSnapshot } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupsEditProps object.
 */
export interface PlanGroupsEditPropsInterface {
	planGroupsDoc: QueryDocumentSnapshot<SpelieveInterface.PlanGroupsListInterface>;
}

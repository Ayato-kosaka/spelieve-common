import { QueryDocumentSnapshot } from '@firebase/firestore';

import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of PlanGroupEditProps object.
 */
export interface PlanGroupEditPropsInterface {
	planGroupsDoc: QueryDocumentSnapshot<SpelieveInterface.PlanGroupsListInterface>;
}

import { QueryDocumentSnapshot } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlanGroupEditPropsInterface {
    planGroupsDoc: QueryDocumentSnapshot<SpelieveInterface.PlanGroupsListInterface>;
}

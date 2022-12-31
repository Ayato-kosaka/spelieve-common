import { QuerySnapshot, CollectionReference } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlanGroupsListValInterface {
    planGroupsQSnap?: QuerySnapshot<SpelieveInterface.PlanGroupsListInterface>;
    planGroupsCRef?: CollectionReference<SpelieveInterface.PlanGroupsListInterface>;
    createPlanGroup: (plan?: Partial<SpelieveInterface.PlansMapInterface>) => Promise<void>;
}

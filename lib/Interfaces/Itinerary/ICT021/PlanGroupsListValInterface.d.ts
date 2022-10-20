import { QuerySnapshot } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlanGroupsListValInterface {
    planGroupsQSnap: QuerySnapshot<SpelieveInterface.PlanGroupsListInterface>;
    create: (representativeStartTime?: Date) => Promise<void>;
    insertPlan: (index: number, plansIndex?: number, planId?: string) => Promise<void>;
}

import * as SpelieveInterface from '../../../Interfaces';
export interface PlanGroupsListValInterface {
    planGroupsList: SpelieveInterface.PlanGroupsListInterface[];
    create: (representativeStartTime?: Date) => Promise<void>;
    insertPlan: (index: number, plansIndex?: number, planId?: string) => Promise<void>;
}

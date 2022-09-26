import { IDB02PlanGroupsInterface } from './index';

/**
 * Export Object of interface names of IDB02PlanGroups.
 */
export const IDB02PlanGroupsCols: { [P in keyof IDB02PlanGroupsInterface]: string } = {
    plans: 'plans',
    representativePlanID: 'representativePlanID',
    representativeStartTime: 'representativeStartTime',
}
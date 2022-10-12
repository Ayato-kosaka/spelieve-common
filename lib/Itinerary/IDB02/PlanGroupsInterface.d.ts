import { Timestamp } from '@firebase/firestore-types';
export interface IDB02PlanGroupsInterface {
    plans: Array<string>;
    representativePlanID: string;
    representativeStartTime: Timestamp;
}

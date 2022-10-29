/**
 * Export interface of PlanGroupsList object.
 */
export interface PlanGroupsListInterface {
	plans: Array<string>;
	representativePlanID: string;
	representativeStartTime: Date;
	createdAt: Date;
	updatedAt: Date;
}

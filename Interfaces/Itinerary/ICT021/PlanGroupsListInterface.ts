/**
 * Export interface of PlanGroupsList object.
 */
export interface PlanGroupsListInterface {
	plans: Array<string>;
	representativePlanID: string;
	dayNumber: number;
	time: Date;
	representativeStartDateTime: Date;
	createdAt: Date;
	updatedAt: Date;
}

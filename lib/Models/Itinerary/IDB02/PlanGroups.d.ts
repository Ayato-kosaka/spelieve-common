export declare class PlanGroups {
    static modelID: string;
    static modelName: string;
    static Cols: {
        plans: string;
        representativePlanID: string;
        representativeStartDateTime: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): PlanGroups;
    plans: Array<string>;
    representativePlanID: string;
    representativeStartDateTime: Date;
    createdAt: Date;
    updatedAt: Date;
}

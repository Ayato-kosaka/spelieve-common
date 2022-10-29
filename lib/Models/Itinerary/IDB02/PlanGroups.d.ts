export declare class PlanGroups {
    static modelName: string;
    static Cols: {
        plans: string;
        representativePlanID: string;
        representativeStartTime: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): PlanGroups;
    plans: Array<string>;
    representativePlanID: string;
    representativeStartTime: Date;
    createdAt: Date;
    updatedAt: Date;
}

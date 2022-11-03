export declare class PlanGroups {
    static modelName: string;
    static Cols: {
        plans: string;
        representativePlanID: string;
        dayNumber: string;
        time: string;
        representativeStartDateTime: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): PlanGroups;
    plans: Array<string>;
    representativePlanID: string;
    dayNumber: number;
    time: Date;
    representativeStartDateTime: Date;
    createdAt: Date;
    updatedAt: Date;
}

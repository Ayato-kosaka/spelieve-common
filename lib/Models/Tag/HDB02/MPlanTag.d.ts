export declare class MPlanTag {
    static modelName: string;
    static Cols: {
        name: string;
        attachedCount: string;
        stayTime: string;
        createdAt: string;
    };
    static fromJSON(json: any): MPlanTag;
    name: string;
    attachedCount: number;
    stayTime: Date;
    createdAt: Date;
}

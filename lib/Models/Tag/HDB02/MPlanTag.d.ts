export declare class MPlanTag {
    static modelName: string;
    static Cols: {
        attachedCount: string;
        stayTime: string;
    };
    static fromJSON(json: any): MPlanTag;
    attachedCount: number;
    stayTime: Date;
}

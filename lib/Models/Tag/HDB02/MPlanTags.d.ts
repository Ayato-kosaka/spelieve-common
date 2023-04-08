export declare class MPlanTags {
    static modelID: string;
    static modelName: string;
    static Cols: {
        tag: string;
        attached_count: string;
        stayTime: string;
        created_at: string;
    };
    static fromJSON(json: any): MPlanTags;
    tag: string;
    attached_count: number;
    stayTime: Date;
    created_at: Date;
}

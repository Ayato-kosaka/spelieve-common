export declare class MMaskShape {
    static modelName: string;
    static Cols: {
        storageUrl: string;
        attached_count: string;
        createdAt: string;
    };
    static fromJSON(json: any): MMaskShape;
    storageUrl: string;
    attached_count?: number;
    createdAt: Date;
}

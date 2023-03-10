export declare class MMaskShape {
    static modelName: string;
    static Cols: {
        storageUrl: string;
        attachedCount: string;
        createdAt: string;
    };
    static fromJSON(json: any): MMaskShape;
    storageUrl: string;
    attachedCount?: number;
    createdAt: Date;
}

export declare class MMaskShape {
    static modelID: string;
    static modelName: string;
    static Cols: {
        storageUrl: string;
        attachedCount: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): MMaskShape;
    storageUrl: string;
    attachedCount?: number;
    createdAt: Date;
    updatedAt: Date;
}

export declare class MThumbnail {
    static modelName: string;
    static Cols: {
        prevThumbnailID: string;
        attachedCount: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): MThumbnail;
    prevThumbnailID?: string;
    attachedCount?: number;
    createdAt: Date;
    updatedAt: Date;
}

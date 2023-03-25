export declare class MThumbnail {
    static modelName: string;
    static Cols: {
        imageUrl: string;
        prevThumbnailID: string;
        attachedCount: string;
        dummyTextMap: string;
        dummyStoreUrlMap: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): MThumbnail;
    imageUrl: string;
    prevThumbnailID?: string;
    attachedCount: number;
    dummyTextMap: {
        [key: string]: string;
    };
    dummyStoreUrlMap: {
        [key: string]: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

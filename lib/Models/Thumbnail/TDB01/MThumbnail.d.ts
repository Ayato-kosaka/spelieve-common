export declare class MThumbnail {
    static modelID: string;
    static modelName: string;
    static Cols: {
        imageUrl: string;
        aspectRatio: string;
        prevThumbnailID: string;
        attachedCount: string;
        dummyTextMap: string;
        dummyStoreUrlMap: string;
        createdAt: string;
        updatedAt: string;
        ver: string;
    };
    static fromJSON(json: any): MThumbnail;
    imageUrl: string;
    aspectRatio: number;
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
    ver: number;
}

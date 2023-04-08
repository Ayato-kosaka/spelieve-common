export interface MThumbnailOneInterface {
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

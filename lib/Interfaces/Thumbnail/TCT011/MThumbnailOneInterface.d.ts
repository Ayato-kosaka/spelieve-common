export interface MThumbnailOneInterface {
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

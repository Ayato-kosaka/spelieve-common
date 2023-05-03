export interface ItineraryOneInterface {
    imageUrl?: string;
    startDate: Date;
    caption: string;
    thumbnailID?: string;
    textMap: {
        [key: string]: string;
    };
    storeUrlMap: {
        [key: string]: string;
    };
    isImmutable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

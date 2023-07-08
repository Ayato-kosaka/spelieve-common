export interface TimelinesListInterface {
    parentTimelineID?: string;
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
    isPosted: boolean;
    representativePlanID: string;
    representativeStartDateTime: Date;
    createdAt: Date;
    updatedAt: Date;
}

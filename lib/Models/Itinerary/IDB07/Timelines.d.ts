export declare class Timelines {
    static modelID: string;
    static modelName: string;
    static Cols: {
        parentTimelineID: string;
        imageUrl: string;
        startDate: string;
        caption: string;
        thumbnailID: string;
        textMap: string;
        storeUrlMap: string;
        isPosted: string;
        representativePlanID: string;
        representativeStartDateTime: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Timelines;
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

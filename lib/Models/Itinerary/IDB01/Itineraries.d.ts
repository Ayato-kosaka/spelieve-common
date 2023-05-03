export declare class Itineraries {
    static modelID: string;
    static modelName: string;
    static Cols: {
        imageUrl: string;
        startDate: string;
        caption: string;
        thumbnailID: string;
        textMap: string;
        storeUrlMap: string;
        isImmutable: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Itineraries;
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

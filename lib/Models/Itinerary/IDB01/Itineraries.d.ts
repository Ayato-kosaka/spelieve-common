export declare class Itineraries {
    static modelName: string;
    static Cols: {
        imageUrl: string;
        startDate: string;
        caption: string;
        thumbnailID: string;
        textMap: string;
        storeUrlMap: string;
        isUpdatable: string;
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
    isUpdatable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

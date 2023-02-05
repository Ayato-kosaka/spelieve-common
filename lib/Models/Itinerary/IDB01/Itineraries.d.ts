export declare class Itineraries {
    static modelName: string;
    static Cols: {
        title: string;
        subTitle: string;
        imageUrl: string;
        startDate: string;
        tags: string;
        caption: string;
        isUpdatable: string;
        thumbnailID: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Itineraries;
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate: Date;
    tags: Array<string>;
    caption: string;
    isUpdatable: boolean;
    thumbnailID?: string;
    createdAt: Date;
    updatedAt: Date;
}

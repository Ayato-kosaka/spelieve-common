export declare class Itineraries {
    static modelName: string;
    static Cols: {
        imageUrl: string;
        startDate: string;
        caption: string;
        thumbnailID: string;
        textList: string;
        isUpdatable: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Itineraries;
    imageUrl?: string;
    startDate: Date;
    caption: string;
    thumbnailID?: string;
    textList: Array<string>;
    isUpdatable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

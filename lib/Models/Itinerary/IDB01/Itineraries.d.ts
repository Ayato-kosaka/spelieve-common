export declare class Itineraries {
    static modelName: string;
    static Cols: {
        title: string;
        subTitle: string;
        imageUrl: string;
        startDate: string;
        endDate: string;
        tags: string;
        caption: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Itineraries;
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate?: Date;
    endDate?: Date;
    tags?: Array<string>;
    caption: string;
    createdAt: Date;
    updatedAt: Date;
}

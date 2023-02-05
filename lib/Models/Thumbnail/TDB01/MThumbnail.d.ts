export declare class MThumbnail {
    static modelName: string;
    static Cols: {
        imageUrl: string;
        backgroundItemType: string;
        copiedCount: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): MThumbnail;
    imageUrl: string;
    backgroundItemType: string;
    copiedCount: number;
    createdAt: Date;
    updatedAt: Date;
}

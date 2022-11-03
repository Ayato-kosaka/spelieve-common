export declare class MItineraryHashtag {
    static modelName: string;
    static Cols: {
        attachedCount: string;
        createdAt: string;
    };
    static fromJSON(json: any): MItineraryHashtag;
    attachedCount: number;
    createdAt: Date;
}

export declare class MItineraryHashtag {
    static modelName: string;
    static Cols: {
        name: string;
        attachedCount: string;
        createdAt: string;
    };
    static fromJSON(json: any): MItineraryHashtag;
    name: string;
    attachedCount: number;
    createdAt: Date;
}

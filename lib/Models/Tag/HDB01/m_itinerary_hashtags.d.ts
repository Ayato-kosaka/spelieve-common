export declare class m_itinerary_hashtags {
    static modelID: string;
    static modelName: string;
    static Cols: {
        tag: string;
        attached_count: string;
        created_at: string;
    };
    static fromJSON(json: any): m_itinerary_hashtags;
    tag: string;
    attached_count: number;
    created_at: Date;
}

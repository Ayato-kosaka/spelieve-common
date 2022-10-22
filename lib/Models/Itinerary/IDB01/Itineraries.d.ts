import { Timestamp } from '@firebase/firestore';
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
    };
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate?: Timestamp;
    endDate?: Timestamp;
    tags?: Array<string>;
    caption: string;
}

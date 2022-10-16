import { Timestamp } from '@firebase/firestore-types';
export declare class MPlanTag {
    static modelName: string;
    static Cols: {
        attachedCount: string;
        stayTime: string;
    };
    attachedCount: number;
    stayTime: Timestamp;
}

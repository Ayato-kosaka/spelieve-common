import { Timestamp } from '@firebase/firestore-types';
export interface IDB01ItinerariesInterface {
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate?: Timestamp;
    endDate?: Timestamp;
    tags?: Array<string>;
    caption: string;
}

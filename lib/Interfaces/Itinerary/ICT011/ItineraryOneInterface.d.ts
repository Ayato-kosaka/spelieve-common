export interface ItineraryOneInterface {
    title: string;
    subTitle?: string;
    imageUrl?: string;
    startDate: Date;
    tags: Array<string>;
    caption: string;
    isUpdatable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

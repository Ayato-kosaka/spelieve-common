import { IDB01ItinerariesInterface } from './index';

/**
 * Export Object of interface names of IDB01Itineraries.
 */
export const IDB01ItinerariesNames: { [P in keyof IDB01ItinerariesInterface]: string } = {
    title: 'title',
    subTitle: 'subTitle',
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    tags: 'tags',
    caption: 'caption',
}

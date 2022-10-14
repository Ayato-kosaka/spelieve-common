import { PCT011MPlacesListInterface } from './index';

/**
 * Export Object of interface names of PCT011MPlacesList.
 */
export const PCT011MPlacesListNames: { [P in keyof PCT011MPlacesListInterface]: string } = {
    place_id: 'place_id',
    language: 'language',
    name: 'name',
    imageUrl: 'imageUrl',
    geometry: 'geometry',
    mapUrl: 'mapUrl',
    website: 'website',
    address: 'address',
    phoneNumber: 'phoneNumber',
    openingHours: 'openingHours',
    rating: 'rating',
    popularTags: 'popularTags',
    averageStayTime: 'averageStayTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
}

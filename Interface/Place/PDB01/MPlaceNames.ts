import { PDB01MPlaceInterface } from './index';

/**
 * Export Object of interface names of PDB01MPlace.
 */
export const PDB01MPlaceNames: { [P in keyof PDB01MPlaceInterface]: string } = {
    place_id: 'place_id',
    language: 'language',
    name: 'name',
    imageUrl: 'imageUrl',
    instagramAPIID: 'instagramAPIID',
    geometry: 'geometry',
    geohash: 'geohash',
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

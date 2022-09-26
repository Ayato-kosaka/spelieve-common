import { ICT031PlansMapInterface } from './index';

/**
 * Export Object of interface names of ICT031PlansMap.
 */
export const ICT031PlansMapCols: { [P in keyof ICT031PlansMapInterface]: string } = {
    placeReference: 'placeReference',
    placeSpan: 'placeSpan',
    placeStartTime: 'placeStartTime',
    placeEndTime: 'placeEndTime',
    tags: 'tags',
    imageUrl: 'imageUrl',
    memo: 'memo',
    transportationMode: 'transportationMode',
    transportationDepartureTime: 'transportationDepartureTime',
    transportationArrivalTime: 'transportationArrivalTime',
    transportationSpan: 'transportationSpan',
}
import { IDB03PlansInterface } from './index';

/**
 * Export Object of interface names of IDB03Plans.
 */
export const IDB03PlansCols: { [P in keyof IDB03PlansInterface]: string } = {
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
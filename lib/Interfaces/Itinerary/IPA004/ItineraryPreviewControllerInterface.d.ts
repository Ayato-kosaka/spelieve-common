import * as SpelieveInterface from '../../../Interfaces';
export interface ItineraryPreviewControllerInterface {
    itinerary: SpelieveInterface.ItineraryOneInterface;
    planGroups: SpelieveInterface.PlanGroupsListInterface[];
    plans: {
        [id: string]: SpelieveInterface.PlansMapInterface;
    };
    needToShowActivityIndicator: boolean;
}

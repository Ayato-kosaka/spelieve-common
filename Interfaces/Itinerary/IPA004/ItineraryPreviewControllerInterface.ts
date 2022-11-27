import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryPreviewController object.
 */
export interface ItineraryPreviewControllerInterface {
	itinerary: SpelieveInterface.ItineraryOneInterface;
	planGroups: SpelieveInterface.PlanGroupsListInterface[];
	plans: { [id: string]: SpelieveInterface.PlansMapInterface };
	needToShowActivityIndicator: boolean;
}

export interface ItineraryEditControllerInterface {
    createNewItinerary: () => void;
    onToggleIsPreview: () => void;
    onSettingClicked: () => void;
    copyURL: () => void;
    copyItinerary: () => void;
    makeItineraryNonUpdatable: () => void;
    shareItinerary: () => void;
    exportItinerary: () => void;
}

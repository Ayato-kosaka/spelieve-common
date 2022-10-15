import * as SpelieveInterface from '../../../Interface';
export interface PCT011MPlacesListValInterface {
    placesList: Array<SpelieveInterface.PCT011MPlacesListInterface>;
    setCountry: (country: string) => void;
    setAdministrativeAreaLevel1: (administrativeAreaLevel1: string) => void;
    setAdministrativeAreaLevel2: (administrativeAreaLevel2: string) => void;
    setLocality: (locality: string) => void;
}

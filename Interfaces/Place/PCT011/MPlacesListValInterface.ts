import * as SpelieveInterface from "../../../Interfaces";

/**
 * Export interface of MPlacesListVal object.
 */
export interface MPlacesListValInterface {
  placesList: Array<SpelieveInterface.MPlacesListInterface>;
  setCountry: (country: string) => void;
  setAdministrativeAreaLevel1: (administrativeAreaLevel1: string) => void;
  setAdministrativeAreaLevel2: (administrativeAreaLevel2: string) => void;
  setLocality: (locality: string) => void;
}

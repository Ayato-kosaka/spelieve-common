import { DocumentReference } from "@firebase/firestore";
import { ReactNode } from "react";

/**
 * Export interface of MPlacesListProviderProps object.
 */
export interface MPlacesListProviderPropsInterface {
  parentDocRef?: DocumentReference;
  children: ReactNode;
  initialCountry: string;
  initialAdministrativeAreaLevel1: string;
  initialAdministrativeAreaLevel2: string;
  initialLocality: string;
}

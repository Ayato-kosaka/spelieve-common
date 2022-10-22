import { DocumentReference } from "@firebase/firestore";
import { ReactNode } from "react";

/**
 * Export interface of PlansMapProviderProps object.
 */
export interface PlansMapProviderPropsInterface {
  parentDocRef?: DocumentReference;
  children: ReactNode;
}

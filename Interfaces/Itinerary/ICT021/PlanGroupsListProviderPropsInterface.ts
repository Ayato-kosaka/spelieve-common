import { DocumentReference } from "@firebase/firestore";
import { ReactNode } from "react";

/**
 * Export interface of PlanGroupsListProviderProps object.
 */
export interface PlanGroupsListProviderPropsInterface {
  parentDocRef?: DocumentReference;
  children: ReactNode;
}

import { DocumentReference } from "@firebase/firestore";
import { ReactNode } from "react";
export interface PlanGroupsListProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
}

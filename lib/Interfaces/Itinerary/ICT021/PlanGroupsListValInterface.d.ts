import { QuerySnapshot } from "@firebase/firestore";
import * as SpelieveInterface from "../../../Interfaces";
export interface PlanGroupsListValInterface {
    planGroupsQSnap: QuerySnapshot<SpelieveInterface.PlanGroupsListInterface>;
    planGroupsCRef: (representativeStartTime?: Date) => Promise<void>;
}

import { QueryDocumentSnapshot, CollectionReference } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlansMapValInterface {
    plansDocSnapMap: {
        [id: string]: QueryDocumentSnapshot<SpelieveInterface.PlansMapInterface>;
    };
    plansCRef?: CollectionReference<SpelieveInterface.PlansMapInterface>;
    isPlansLoading: boolean;
}

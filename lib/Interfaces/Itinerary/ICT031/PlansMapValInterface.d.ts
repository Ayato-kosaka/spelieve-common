import { QueryDocumentSnapshot } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';
export interface PlansMapValInterface {
    plansDocSnapMap: {
        [id: string]: QueryDocumentSnapshot<SpelieveInterface.PlansMapInterface>;
    };
    create: () => Promise<void>;
}

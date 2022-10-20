import * as SpelieveInterface from '../../../Interfaces';
export interface PlansMapValInterface {
    plansMap: {
        [id: string]: SpelieveInterface.PlansMapInterface;
    };
    create: () => Promise<void>;
}

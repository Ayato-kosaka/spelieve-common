import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export IDB02PlanGroups model class.
 */
export class PlanGroups {

  static modelName = 'PlanGroups';

  static Cols  = {
    plans: 'plans',
    representativePlanID: 'representativePlanID',
    representativeStartTime: 'representativeStartTime',
  }

  plans: Array<string>;

  representativePlanID: string;

  representativeStartTime: Timestamp;

}

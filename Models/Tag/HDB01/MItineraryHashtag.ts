import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export HDB01MItineraryHashtag model class.
 */
export class MItineraryHashtag {

  static modelName = 'MItineraryHashtag';

  static Cols  = {
    attachedCount: 'attachedCount',
  }

  attachedCount: number;

}

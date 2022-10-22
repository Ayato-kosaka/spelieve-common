import { Timestamp, DocumentReference } from "@firebase/firestore";

/**
 * Export IDB03Plans model class.
 */
export class Plans {
  static modelName = "Plans";

  static Cols = {
    placeReference: "placeReference",
    placeSpan: "placeSpan",
    placeStartTime: "placeStartTime",
    placeEndTime: "placeEndTime",
    tags: "tags",
    imageUrl: "imageUrl",
    memo: "memo",
    transportationMode: "transportationMode",
    transportationDepartureTime: "transportationDepartureTime",
    transportationArrivalTime: "transportationArrivalTime",
    transportationSpan: "transportationSpan",
  };

  placeReference?: DocumentReference;

  placeSpan: Timestamp;

  placeStartTime: Timestamp;

  placeEndTime: Timestamp;

  tags?: Array<string>;

  imageUrl: string;

  memo?: string;

  transportationMode?: string;

  transportationDepartureTime?: Timestamp;

  transportationArrivalTime?: Timestamp;

  transportationSpan: Timestamp;
}

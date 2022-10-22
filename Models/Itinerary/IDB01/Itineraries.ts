import { Timestamp } from "@firebase/firestore";

/**
 * Export IDB01Itineraries model class.
 */
export class Itineraries {
  static modelName = "Itineraries";

  static Cols = {
    title: "title",
    subTitle: "subTitle",
    imageUrl: "imageUrl",
    startDate: "startDate",
    endDate: "endDate",
    tags: "tags",
    caption: "caption",
  };

  title: string;

  subTitle?: string;

  imageUrl?: string;

  startDate?: Timestamp;

  endDate?: Timestamp;

  tags?: Array<string>;

  caption: string;
}

import { FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from '@firebase/firestore';

/**
 * Export a FirestoreDataConverter to transform ICT011ItineraryOne into Firestore data.
 */
export const FirestoreConverter = <T, model>(
	toModel: (data: T) => model,
	model: { fromJSON(data): model },
	fromModel: (data: model) => T,
): FirestoreDataConverter<T> => ({
	/**
	 * Convert custom Type T before be saved to Firestore.
	 */
	toFirestore: (data: T): model => toModel(data),

	/**
	 * Convert data from Firestore to match custom Type T.
	 */
	fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T => {
		const json = snapshot.data(options);
		Object.keys(json).forEach((key) => {
			if (json[key] instanceof Timestamp) {
				json[key] = (json[key] as Timestamp).toDate();
			}
		});

		return fromModel(model.fromJSON(json));
	},
});

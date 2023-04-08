import { FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from '@firebase/firestore';
import { upgradeScheme } from 'UpgradeScheme/UpgradeSheme';

import { VerID } from '../Consts/Common';

/**
 * Export a FirestoreDataConverter to transform custom Type T into Firestore data.
 */
export const FirestoreConverter = <model, T>(
	model: { modelID: string; fromJSON(data): model },
	fromModel: (data: model) => T,
	toModel: (data: T) => Omit<model, 'updatedAt' | 'ver'>,
): FirestoreDataConverter<T> => ({
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

		if (json.ver !== VerID && upgradeScheme[model.modelID]) {
			return fromModel(upgradeScheme[model.modelID](json));
		} else {
			return fromModel(model.fromJSON(json));
		}
	},

	/**
	 * Convert custom Type T before be saved to Firestore.
	 */
	toFirestore: (data: T): model => ({ ...toModel(data), updatedAt: new Date(), ver: VerID } as model),
});

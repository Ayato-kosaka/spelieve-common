import { Timestamp } from '@firebase/firestore';

/**
 * Export HDB02MPlanTag model class.
 */
export class MPlanTag {
	static modelName = 'MPlanTag';

	static Cols = {
		attachedCount: 'attachedCount',
		stayTime: 'stayTime',
	};

	attachedCount: number;

	stayTime: Timestamp;
}

/**
 * Export HDB01MItineraryHashtag model class.
 */
export class MItineraryHashtag {
	static modelName = 'MItineraryHashtag';

	static Cols = {
		attachedCount: 'attachedCount',
	};

	static fromJSON(json: any): MItineraryHashtag {
		const ret = new MItineraryHashtag();
		ret.attachedCount = typeof json.attachedCount === 'number' ? json.attachedCount : 0;
		return ret;
	}

	attachedCount: number;
}

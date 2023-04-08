import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export HDB01m_itinerary_hashtags model class.
 */
export class m_itinerary_hashtags {
	static modelID = 'HDB01';
	static modelName = 'm_itinerary_hashtags';

	static Cols = {
		tag: 'tag',
		attached_count: 'attached_count',
		created_at: 'created_at',
	};

	static fromJSON(json: any): m_itinerary_hashtags {
		const ret = new m_itinerary_hashtags();
		ret.tag = typeof json.tag === 'string' ? json.tag : '';
		ret.attached_count = typeof json.attached_count === 'number' ? json.attached_count : 0;
		ret.created_at = json.created_at instanceof Date ? json.created_at : DateUtils.initialDate();
		return ret;
	}

	tag: string;

	attached_count: number;

	created_at: Date;
}

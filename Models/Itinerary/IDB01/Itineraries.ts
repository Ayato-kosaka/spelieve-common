import * as DateUtils from '../../../Utils/DateUtils';

/**
 * Export IDB01Itineraries model class.
 */
export class Itineraries {
	static modelName = 'Itineraries';

	static Cols = {
		title: 'title',
		subTitle: 'subTitle',
		imageUrl: 'imageUrl',
		startDate: 'startDate',
		endDate: 'endDate',
		tags: 'tags',
		caption: 'caption',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Itineraries {
		const ret = new Itineraries();
		ret.title = typeof json.title === 'string' ? json.title : '';
		ret.subTitle = typeof json.subTitle === 'string' ? json.subTitle : undefined;
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.startDate = json.startDate instanceof Date ? json.startDate : undefined;
		ret.endDate = json.endDate instanceof Date ? json.endDate : undefined;
		ret.tags = json.tags instanceof Array ? json.tags : undefined;
		ret.caption = typeof json.caption === 'string' ? json.caption : '';
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	title: string;

	subTitle?: string;

	imageUrl?: string;

	startDate?: Date;

	endDate?: Date;

	tags?: Array<string>;

	caption: string;

	createdAt: Date;

	updatedAt: Date;
}

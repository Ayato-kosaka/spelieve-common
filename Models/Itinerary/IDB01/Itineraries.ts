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
		tags: 'tags',
		caption: 'caption',
		isUpdatable: 'isUpdatable',
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	};

	static fromJSON(json: any): Itineraries {
		const ret = new Itineraries();
		ret.title = typeof json.title === 'string' ? json.title : '';
		ret.subTitle = typeof json.subTitle === 'string' ? json.subTitle : undefined;
		ret.imageUrl = typeof json.imageUrl === 'string' ? json.imageUrl : undefined;
		ret.startDate = json.startDate instanceof Date ? json.startDate : DateUtils.initialDate();
		ret.tags = json.tags instanceof Array ? json.tags : [];
		ret.caption = typeof json.caption === 'string' ? json.caption : '';
		ret.isUpdatable = typeof json.isUpdatable === 'boolean' ? json.isUpdatable : false;
		ret.createdAt = json.createdAt instanceof Date ? json.createdAt : DateUtils.initialDate();
		ret.updatedAt = json.updatedAt instanceof Date ? json.updatedAt : DateUtils.initialDate();
		return ret;
	}

	title: string;

	subTitle?: string;

	imageUrl?: string;

	startDate: Date;

	tags: Array<string>;

	caption: string;

	isUpdatable: boolean;

	createdAt: Date;

	updatedAt: Date;
}

/**
 * Export interface of MThumbnailList object.
 */
export interface MThumbnailListInterface {
	imageUrl: string;
	aspectRatio: number;
	prevThumbnailID?: string;
	attachedCount: number;
	dummyTextMap: { [key: string]: string };
	dummyStoreUrlMap: { [key: string]: string };
	createdAt: Date;
	updatedAt: Date;
	ver: number;
}

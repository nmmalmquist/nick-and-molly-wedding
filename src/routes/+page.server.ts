import { generateS3PresignedURL } from '$lib/server/generatePresignedURL';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const backgroundImagePath = await generateS3PresignedURL('/home-background.jpg');
	return {
		backgroundImagePath
	};
};

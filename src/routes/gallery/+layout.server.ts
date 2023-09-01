import type { LayoutServerLoad, PageServerLoad } from './$types';
import { JWT_COOKIE_NAME } from '$env/static/private';
import { checkTokenIsValid } from '$lib/server/auth';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const jwt = cookies.get(JWT_COOKIE_NAME);

	const payload = checkTokenIsValid(jwt);
};

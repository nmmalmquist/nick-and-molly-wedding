import type { Actions, PageServerLoad } from './$types';
import { JWT_SECRET, JWT_COOKIE_NAME, JWT_EXPIRATION_SECONDS } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { invalidInputResponse, invalidLoginResponse } from '$lib/server/responses';
import jsonwebtoken from 'jsonwebtoken';
import { login } from '$lib/server/auth';
import { generateS3PresignedURL } from '$lib/server/generatePresignedURL';

export const load: PageServerLoad = async () => {
	const mainImageURL = await generateS3PresignedURL('/login.jpg');
	return {
		mainImageURL
	};
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

		if (!username || !password) return invalidInputResponse();

		const isSuccessful = login(username, password);

		if (!isSuccessful) return invalidLoginResponse();

		const jwt = jsonwebtoken.sign({ username: username }, JWT_SECRET, {
			expiresIn: parseInt(JWT_EXPIRATION_SECONDS)
		});

		cookies.set(JWT_COOKIE_NAME, jwt, { path: '/' });

		throw redirect(302, '/gallery');
	}
};

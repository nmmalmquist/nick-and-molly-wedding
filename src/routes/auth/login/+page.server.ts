import type { Actions, PageServerLoad } from './$types';
import { JWT_SECRET, JWT_COOKIE_NAME, JWT_EXPIRATION_SECONDS } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { invalidInputResponse, invalidLoginResponse } from '$lib/server/constants/responses';
import jsonwebtoken from 'jsonwebtoken';
import { login } from '$lib/server/util/auth';
import { generateS3PresignedURL } from '$lib/server/util/generatePresignedURL';

export const load: PageServerLoad = async () => {
	const mainImageURL = await generateS3PresignedURL('/login.jpg');
	return {
		mainImageURL
	};
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email || !password) return invalidInputResponse();
		const isSuccessful = await login(email, password);

		if (!isSuccessful) return invalidLoginResponse();

		const jwt = jsonwebtoken.sign({ email: email }, JWT_SECRET, {
			expiresIn: parseInt(JWT_EXPIRATION_SECONDS)
		});

		cookies.set(JWT_COOKIE_NAME, jwt, { path: '/' });

		throw redirect(302, '/gallery');
	}
};

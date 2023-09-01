import type { Actions, PageServerLoad } from './$types';
import { JWT_SECRET, JWT_COOKIE_NAME } from '$env/static/private';
import { fail, json, redirect } from '@sveltejs/kit';
import { unAuthorizedResponse } from '$lib/server/responses';
import jsonwebtoken from 'jsonwebtoken';

export const actions: Actions = {
	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		const jwt = jsonwebtoken.sign({ username: username }, JWT_SECRET, { expiresIn: 30 });
		console.log(cookies.getAll());
		cookies.set(JWT_COOKIE_NAME, jwt);
	}
};

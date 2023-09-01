import type { Actions } from './$types';
import { JWT_SECRET, JWT_COOKIE_NAME } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { unknownErrorResponse } from '$lib/server/responses';
import jsonwebtoken from 'jsonwebtoken';
import type { User } from '$lib/server/models';
import { addUser } from '$lib/server/dynamodb/user';
import { v4 as uuidv4 } from 'uuid';

export const actions: Actions = {
	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const user: User = {
			id: uuidv4(),
			firstName: data.get('first-name')?.valueOf() as string,
			lastName: data.get('last-name')?.valueOf() as string,
			email: data.get('email')?.valueOf() as string,
			password: data.get('password')?.valueOf() as string,
			roles: []
		};
		try {
			await addUser(user);
		} catch (error) {
			unknownErrorResponse();
			throw error;
		}

		const jwt = jsonwebtoken.sign({ username: user.email }, JWT_SECRET, { expiresIn: 30 });
		cookies.set(JWT_COOKIE_NAME, jwt);
		throw redirect(302, '/gallery');
	}
};

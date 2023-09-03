import { HASH_ALGORITHM, JWT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import jsonwebtoken from 'jsonwebtoken';
import { createHash } from 'node:crypto';
import { getOneUserByEmail } from '../dynamodb/user';

/**
 * Decodes the JWT that is sent in as a parameter. Returns the payload if valid.
 * If not valid or doesn't exist, redirects to login screen.
 * @param jwt
 * @returns string | jsonwebtoken.JwtPayload
 */
export const checkTokenIsValid = (jwt?: string) => {
	// No JWT token no access
	if (!jwt) {
		throw redirect(302, '/auth/login');
	}
	try {
		const decodedJwt = jsonwebtoken.verify(jwt, JWT_SECRET);
		return decodedJwt;
	} catch (error) {
		// Not a valid jwt
		throw redirect(302, '/auth/login');
	}
};

export const login = async (email: string, password: string) => {
	// Turn password in form into a hash for comparing
	const hashedPassword = createHash(HASH_ALGORITHM).update(password).digest('base64');

	const existingUser = await getOneUserByEmail(email);

	if (!existingUser) {
		console.log('here');
		return false;
	}
	if (hashedPassword === existingUser.password) {
		return true;
	}
	return false;
};

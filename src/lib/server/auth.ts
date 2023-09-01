import { HASH_ALGORITHM, HASH_DIGEST, JWT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import jsonwebtoken from 'jsonwebtoken';
import { createHash } from 'node:crypto';

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

const TEMP_EMAIL = 'nick';
const TEMP_PASSWORD = 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='; //password

export const login = (email: string, password: string) => {
	// Turn password in form into a hash
	const hashedPassword = createHash(HASH_ALGORITHM).update(password).digest('base64');
	if (email === TEMP_EMAIL && hashedPassword === TEMP_PASSWORD) {
		return true;
	}
	return false;
};

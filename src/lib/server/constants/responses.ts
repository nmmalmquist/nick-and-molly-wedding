import { fail } from '@sveltejs/kit';

export const unAuthorizedResponse = () => {
	return fail(401, { isAuthorized: false });
};

export const invalidInputResponse = () => {
	return fail(400, {
		successful: false,
		message: 'invalid input was provided'
	});
};

export const invalidLoginResponse = () => {
	return fail(401, {
		successful: false,
		message: 'Incorrect username and/or password'
	});
};

export const unknownErrorResponse = () => {
	return fail(500, {
		successful: false,
		message: 'An unknown error occurred'
	});
};
export const emailAlreadyExistsResponse = () => {
	return fail(500, {
		successful: false,
		message: 'Email already taken'
	});
};
export const NoUserFoundResponse = () => {
	return fail(500, {
		successful: false,
		message: 'No User could be found'
	});
};

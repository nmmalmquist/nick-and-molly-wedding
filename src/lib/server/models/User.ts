import type { Role } from './Role';

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	roles: Role[];
};

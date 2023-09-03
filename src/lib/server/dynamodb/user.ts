import crypto from 'node:crypto';
import {
	DDB_USER_TABLE_EMAIL_INDEX_NAME,
	DDB_USER_TABLE_NAME,
	HASH_ALGORITHM
} from '$env/static/private';
import { QueryCommand, ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import type { User } from '../models';
import docClient from './initialize';

export const getAllUsers = async () => {
	const command = new ScanCommand({
		TableName: DDB_USER_TABLE_NAME,
		ConsistentRead: false
	});

	const response = await docClient.send(command);
	return response;
};

export const getOneUserById = async (id: string) => {
	const command = new QueryCommand({
		TableName: DDB_USER_TABLE_NAME,
		KeyConditionExpression: 'id = :id',
		ExpressionAttributeValues: {
			':id': id
		},
		ConsistentRead: false
	});

	const response = await docClient.send(command);
	return (response.Items as User[])?.[0];
};

export const getOneUserByEmail = async (email: string) => {
	const command = new QueryCommand({
		TableName: DDB_USER_TABLE_NAME,
		IndexName: DDB_USER_TABLE_EMAIL_INDEX_NAME,
		KeyConditionExpression: 'email = :email',
		ExpressionAttributeValues: {
			':email': email
		},
		ConsistentRead: false
	});

	const response = await docClient.send(command);
	return (response.Items as User[])?.[0];
};

export const addUser = async (newUser: User) => {
	// Hash password for storage
	newUser.password = crypto.createHash(HASH_ALGORITHM).update(newUser.password).digest('base64');

	const command = new PutCommand({
		TableName: DDB_USER_TABLE_NAME,
		Item: newUser
	});

	const response = await docClient.send(command);
	return response;
};

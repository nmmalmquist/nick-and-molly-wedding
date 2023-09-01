import { DDB_USER_TABLE_NAME } from '$env/static/private';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
	DynamoDBDocumentClient,
	QueryCommand,
	ScanCommand,
	PutCommand
} from '@aws-sdk/lib-dynamodb';
import type { User } from '../models';

const client = new DynamoDBClient({ region: 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);

export const getAllUsers = async () => {
	const command = new ScanCommand({
		TableName: DDB_USER_TABLE_NAME,
		ConsistentRead: false
	});

	const response = await docClient.send(command);
	return response;
};

export const getOneUser = async (id: string) => {
	const command = new QueryCommand({
		TableName: DDB_USER_TABLE_NAME,
		KeyConditionExpression: 'id = :id',
		ExpressionAttributeValues: {
			':id': id
		},
		ConsistentRead: false
	});

	const response = await docClient.send(command);
	return response;
};

export const addUser = async (newUser: User) => {
	const command = new PutCommand({
		TableName: DDB_USER_TABLE_NAME,
		Item: newUser
	});

	const response = await docClient.send(command);
	return response;
};

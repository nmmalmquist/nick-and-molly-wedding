import { DDB_ENDPOINT } from '$env/static/private';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: 'us-east-1', endpoint: DDB_ENDPOINT });
const docClient = DynamoDBDocumentClient.from(client);

export default docClient;

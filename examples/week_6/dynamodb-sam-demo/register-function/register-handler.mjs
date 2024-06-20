import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

const documentClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const bodyObject = JSON.parse(event.body);
  const { username, password } = bodyObject;

  try {
    let dbResponse = await postUser({ username, password });
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "User Successfully Registered",
        response: dbResponse,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};

async function postUser(user) {
  const command = new PutCommand({
    TableName: process.env.USERS_TABLE_NAME,
    Item: {
      username: user.username,
      password: user.password,
    },
  });
  try {
    const data = await documentClient.send(command);
    return data;
  } catch (error) {
    throw error;
  }
}

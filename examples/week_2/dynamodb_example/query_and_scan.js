// Query and Scan
// Query is used to retrieve multiple items from a dynamoDB table based on a query condition
// This is primarily going to be using the primary key attribute

const {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });

const documentClient = DynamoDBDocumentClient.from(client);

// Query is efficient when retrieving items based on teh primary key attributes and it can quickly retrieve a range of items

async function queryEmployee(id) {
  const command = new QueryCommand({
    TableName: "Employees",
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: { "#id": "employee_id" },
    ExpressionAttributeValues: { ":id": { S: id } },
  });

  try {
    const data = await documentClient.send(command);
    return data.Items[0];
  } catch (error) {
    console.error(error);
  }

  return null;
}

// Scan Operation
// The scan operation can return up to a maximum of 1 MB of data, this does mean you will need to scan multiple times sometimes to get the full result

async function scanEmployeesByRole(role) {
  const command = new ScanCommand({
    TableName: "Employees",
    FilterExpression: "#r = :r",
    ExpressionAttributeNames: {
      "#r": "role",
    },
    ExpressionAttributeValues: {
      ":r": { S: role },
    },
  });

  try {
    const data = await documentClient.send(command);
    return data.Items;
  } catch (error) {
    console.error(error);
  }

  return null;
}

async function queryEmployeesByRole(role) {

    // A GSI is created using role as the partition key and join_date as the sort key
    // The GSI does not need unique keys
  const params = {
    TableName: "Employees",
    IndexName: "RoleJoinIndex",
    KeyConditionExpression: "#role = :role",
    ExpressionAttributeNames: {
      "#role": "role",
    },
    ExpressionAttributeValues: {
      ":role": { S: role },
    },
  };

  const command = new QueryCommand(params);
  try {
    const data = await documentClient.send(command);
    return data.Items;
  } catch (error) {
    console.error(error);
  }

  return null;
}

module.exports = {
  queryEmployee,
  scanEmployeesByRole,
  queryEmployeesByRole,
};

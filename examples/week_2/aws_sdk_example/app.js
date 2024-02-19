const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1"});

// getting the documentClient
const documentClient = DynamoDBDocumentClient.from(client);

const getCommand = new GetCommand({
  TableName: "test_example_table_1821",
  Key: { example_partition_key: "002" },
});

// promise

documentClient
  .send(getCommand)
  .then((data) => console.log(data.Item))
  .catch((err) => console.error(err));

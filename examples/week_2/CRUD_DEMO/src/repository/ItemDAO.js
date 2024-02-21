const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
  ScanCommand,
} = require("@aws-sdk/lib-dynamodb");
const logger = require("../util/logger");

const client = new DynamoDBClient({ region: "us-east-1" });

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "ItemsExample";
// this is the dao object



async function getAllItems() {
  const command = new ScanCommand({
    TableName,
  });

  try {
    const data = await documentClient.send(command);
    return data.Items;
  } catch (error) {
    logger.error(error);
  }
}

async function postItem(Item){
    const command = new PutCommand({
        TableName,
        Item
    });
    try{
        const data = await documentClient.send(command);
        return data
    }catch(error){
        logger.error(error);
    }
}

async function getItemByName(itemName){
    const command = new ScanCommand({
        TableName,
        FilterExpression: "#name = :name",
        ExpressionAttributeNames: {"#name": "name"},
        ExpressionAttributeValues: {':name': itemName}
    });

    try{
        const data = await documentClient.send(command);
        return data.Items[0]
    }catch(error){
        logger.error(error)
    }
}

module.exports = {
  getAllItems,
  postItem,
  getItemByName
};

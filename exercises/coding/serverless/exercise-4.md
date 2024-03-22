# Serverless Exercise 4 (AWS SAM and DynamoDB)

## Description
In this exercise, you will use AWS Serverless Application Model (SAM) to create and deploy a serverless application that consists of 2 Lambda functions and an API Gateway. The first Lambda function will be invoked via the POST /books endpoint and will write a new item to a DynamoDB table with information about a book. The second Lambda function will support a GET /books endpoint that retrieves a list of all the books in the DynamoDB table.

## Approach
To complete this exercise, follow the steps below:

1. Install and configure the AWS CLI and SAM CLI on your local machine.
2. Create a new folder for your serverless application.
3. Within the new folder, create a new SAM template file named template.yaml.
4. In the SAM template file, define a new AWS::Serverless::Function resource named "CreateBookFunction" with the following properties:
    - Runtime: nodejs16.x
    - Handler: index.handler
    - CodeUri: a folder containing your Lambda function code (ex. create-books/)
    - Events: an API Gateway event with the path set to "/books" and the method set to "post"
5. In the same SAM template file, define a new AWS::Serverless::Function resource named "ListBooksFunction" with the following properties:
    - Runtime: nodejs16.x
    - Handler: index.handler
    - CodeUri: a folder containing your Lambda function code (ex. list-books/)
    - Events: an API Gateway event with the path set to "/books" and the method set to "get"
6. In the same SAM template file, define a new AWS::DynamoDB::Table resource named "BookTable" with the following properties:
    - AttributeDefinitions: an array of attribute definitions for the table
        - id (string)
    - KeySchema: an array of key schema definitions for the table
        - id (string)
        - key type as HASH
    - BillingMode: set to PAY_PER_REQUEST
7. In the create-books/ directory, create an index.js file and add logic to interact with the DynamoDB table. For example, here is some sample code for creating a new book item (NOTE: in the create-books/ directory, you will need to run `npm init` and then `npm install uuid`):
```javascript
const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.createBook = async (event) => {
    const requestBody = JSON.parse(event.body);

    const book = {
        id: uuid.v4(),
        title: requestBody.title,
        author: requestBody.author,
        publisher: requestBody.publisher
    };

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: book
    };

    await dynamoDB.put(params).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
            "message": "Book successfully created!"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
```
8. Use the SAM CLI to package and deploy your serverless application:
    - Use the `sam validate --lint` command to check if the template.yaml file has any errors
    - Use the `sam build` command to package your application code in a state ready to be deployed
    - Use the `sam deploy --guided` command to create and deploy the CloudFormation stack for your serverless application.
        - `--guided` only needs to be used the first time
9. Test your serverless application by invoking the POST /books endpoint to create a new book item and invoking the GET /books endpoint to retrieve a list of all the books in the DynamoDB table.
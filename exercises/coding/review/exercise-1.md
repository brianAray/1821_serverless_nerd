# Serverless Exercise 1 (Creating a Serverless API with AWS Lambda and API Gateway)
## Description:

This exercise involves creating a Serverless API using AWS Lambda and API Gateway. The API will have a single endpoint that returns a list of books stored in an S3 bucket.

## Approach:
<ol>
<li>Create an S3 bucket and upload a sample data file containing book information.</li>
<li>Create an AWS Lambda function that reads the data file from the S3 bucket and returns a JSON response containing the book information.</li>
<li>Use AWS API Gateway to create a REST API endpoint that invokes the Lambda function.</li>
<li>Test the API using tools like Postman.</li>
</ol>

## Hints:

<ol>
<li>Use AWS Lambda to read the data file from the S3 bucket and parse it into a JSON object. You can upload the data as a JSON file, this exercise does not involve uploading data to S3.</li>
<li>Use the AWS SDK to interact with the S3 bucket.</li>
<li>Define the API Gateway endpoint with a method and a resource path.</li>
<li>Integrate the Lambda function with the API Gateway endpoint.</li>
</ol>

### AWS SDK S3 Code Snippet

```javascript
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const data = await s3.getObject({
    Bucket: 'your-bucket-name',
    Key: 'your-key-name'
}).promise();
```

## Extensions:

1. Include DynamoDB support for uploading and retrieving books
2. Include image uploading and downloading with S3
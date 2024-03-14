# Introduction to Serverless Computing
Serverless computing is a cloud computing execution model in which the cloud provider runs the server and dynamically manages the allocation of machine resources. With serverless computing, we can build applications and services without thinking about servers. Instead, we simply upload our code and the cloud provider takes care of executing it, scaling it as necessary, and charging you based on the actual amount of resources consumed by your applications.

In Serverless computing, we focus on writing code that runs in response to specific events, such as an HTTP request or a change in data (file added to S3 bucket, item added to DynamoDB table), rather than provisioning and managing infrastructure to run our applications. This allows us to be more agile and cost-effective, since we only pay for the compute time we actually use.

## Benefits
- Cost-effectiveness: pay only for compute time we actually consume, rather than paying for server capacity that we may be using to its full potential or not
- Improved agility and scalability: focus on writing code, rather than managing infrastructure, which allows us to more easily launch new services and applications
- Increased relability: Rely on the cloud provider to manage the underlying infrastructure, which can help reduce the risk of infrastructure failures
- Reduced Operational Overhead: don't need to patch servers, install security updates, etc. 
- Easy integration wtih other cloud services: Easily integrate with other cloud services, such as DynamoDB, S3, Messaging Queues, etc. to build complex applications

## Function as-a Service (FaaS)
Colloquially, FaaS is really what we're talking about when we refer to serverless computing. FaaS allows us to run individual functions or pieces of code in response to specific events. 

FaaS is a form of event-driven computing, where the execution of code is triggered by specific events. This allows us to run applications and services in a highly scalable and effective manner, only paying for the compute costs when the function is actually being executed.

In AWS, we have AWS Lambda. In other cloud provider platforms, such as Azure, there is Azure Functions, and in Google Cloud Platform, there is Google Cloud Functions.

### AWS Lambda
AWS lambda is a serverless compute service offered by AWS that allows you to run code in response to events without having to manage servers. When using Lambda, we simply upload our code, and the code will be "triggered" by certain events. 
- A flexible platform for building and deploying applications/services
- It supports a variety of programming languages, such as Node.js (JavaScript), Python, Java, C#, Go, etc.

Here is the basic skeleton for a Lambda function
```javascript
module.exports.handler = async (event) => {

    myFunction();

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World!"
        }),
        headers: {
            "Content-Type": 'application/json'
        }
    };
    return response;
};
```

#### Sharing Dependencies between Lambda Functions
AWS Lambda Layers are a way to manage dependencies separately from our Lambda function. Instead of having a node_modules directory directly associated with the Lambda function, we instead package the dependencies into a layer and include that layer in one or more Lambda functions. This allows us to re-use libraries/dependencies across multiple Lambda functions without including them redundantly in each function's deployment package.

### Event Triggers
FaaS functions can be triggered by a variety of events, such as

1. HTTP Requests: An AWS Lambda function can be triggered by an HTTP request through Amazon API Gateway
2. CloudWatch Events: An AWS Lambda function can be triggered by events from Amazon CloudWatch, such as changes in log data or scheduled events
3. S3 Bucket Events: An AWS Lambda function can be triggered by events such as the creation of a new object or deletion of an object in an S3 bucket
4. DynamoDB Events: An AWS Lambda function can be triggered by changes in a DynamoDB table, such as the insertion of a new item or modification of an existing item
5. SQS (Simple Messaging Queue): An AWS Lambda function can be triggered by the presence of messages in an SQS Queue that need to be processed
6. Amazon Kinesis Stream Events: An AWS Lambda function can be triggered by events from an Amazon Kinesis stream
7. SES Email Events: An AWS Lambda function can be triggered by events from Amazon Simple Email Service, such as the receipt of a new email

# Building a Serverless API 
Within the AWS ecosystem, we can easily build a serverless API by utilizing 2 technologies that form the core foundation:
1. AWS Lambda
2. API Gateway

## API Gateway
API Gateway is a fully-managed service provided by AWS that enables developers to create, deploy, and manage APIs. Using API Gateway, developers can create RESTful APIs that can be used to expose backend services such as AWS Lambda functions, etc. to external clients outside of AWS.

API Gateway provides a flexible and scalable platform for building APIs, and supports a variety of integration options such as Lambda and Step Functions. API Gateway also offers a number of features that help to secure APIs by integration with Amazon Cognito + other access control options.

We utilize API Gateway to trigger a Lambda function associated with a particular HTTP route when an HTTP request is received. The information returned from the Lambda function back to API Gateway is then transformed into an HTTP Response and sent back to the client.

Two different ways to create an API Gateway API:
1. HTTP API option
    - Used to create REST APIs
    - Simpler, easier to use option, suitable for building a simple API
2. REST API option
    - Used to create REST APIs
    - More complex, more feature rich option, suitable for building more complex APIs
        - Allows us to create "request mappings" and "response mappings"
            - Validation of a request body and response body through API Gateway instead of the application logic itself

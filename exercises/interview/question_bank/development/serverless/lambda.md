# AWS Lambda Question Bank

## Level 1: Basic

<ol>
<li>What is AWS Lambda?</li>
<li>What are the benefits of using AWS Lambda?</li>
<li>How can you create a Lambda function?</li>
<li>What is an event source in AWS Lambda?</li>
<li>What is a trigger in AWS Lambda?</li>
<li>What is a handler in AWS Lambda?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS Lambda is a serverless compute service that lets you run your code without provisioning or managing servers.</li>
<li>AWS Lambda provides benefits such as reduced operational overhead, faster time-to-market, lower cost, automatic scaling and high availability, seamless integration with other AWS services, and flexible pricing options.</li>
<li>A Lambda function can be created using the AWS Management Console, AWS CLI, or AWS SDKs, by defining the function code, configuration, and permissions. The function code can be written in the supported programming languages or uploaded as a zip package. The configuration includes the function name, runtime, memory, timeout, and other settings. The permissions include the IAM roles and policies that define the access to the AWS resources and services.</li>
<li>An event source in AWS Lambda represents a service or resource that can trigger a Lambda function to run, and can include AWS services such as S3, DynamoDB, Kinesis, SNS, or API Gateway, as well as custom sources or external services.</li>
<li>A trigger in AWS Lambda represents a mapping between an event source and a Lambda function, and can be configured to invoke the function asynchronously or synchronously, with or without data transformation or filtering.</li>
<li>A handler in AWS Lambda represents a function or method that is invoked when a Lambda function is triggered, and has a specific signature and input/output format depending on the programming language and event source.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What are the Lambda Layers, and how can you use them?</li>
<li>What are the AWS Lambda execution environments, and how can you choose them?</li>
<li>What is AWS SAM, and how can you use it with AWS Lambda?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS Lambda Layers are a feature that allows you to manage and share common code and libraries across multiple functions or runtimes, without duplicating the code or increasing the function size. Lambda Layers can be created and managed using the AWS Management Console, AWS CLI, or AWS SDKs, and can be attached to the Lambda functions at the function level or the account level. Lambda Layers can be versioned and shared between accounts or regions, and can contain up to 5 GB of code and data.</li>
<li>AWS Lambda execution environments are the underlying platform and operating system that run the Lambda functions, and can vary by the programming language and runtime used. AWS Lambda currently supports two types of execution environments: the AWS Lambda Managed Runtimes, which are preconfigured and maintained by AWS, and the AWS Lambda Custom Runtimes, which allow you to use a custom version of the runtime or a new programming language. To choose the appropriate execution environment for a Lambda function, you need to consider factors such as performance, compatibility, security, and extensibility.</li>
<li>AWS SAM (Serverless Application Model) is a framework that allows you to define and deploy serverless applications that use AWS Lambda, API Gateway, and other AWS services. AWS SAM provides a simplified syntax and structure for defining the application resources and services, and can be used with the AWS CLI or the AWS Management Console. AWS SAM includes features such as the AWS SAM CLI, which provides local testing and debugging of the Lambda functions, the AWS SAM Policy Templates, which provide predefined IAM policies for common use cases, and the AWS SAM Resource Types, which provide predefined CloudFormation resources for serverless applications.</li>
</ol>
</details>

## Level 3: Advanced

<ol>
<li>How can you use a Lambda function to implement a custom authentication and authorization scheme for an API Gateway, using JSON Web Tokens (JWT) and a DynamoDB database?</li>
</ol>

<details>
<summary>Answer</summary>
<ol>
1. Create a DynamoDB table that stores the user credentials, such as the user ID, password, and role. Define the necessary indexes and access policies.<br>
2. Create a Lambda function that receives the incoming API Gateway requests, extracts the JWT token from the Authorization header, and decodes and verifies the token using a JWT library such as jsonwebtoken.<br>
3. If the JWT token is valid, extract the user ID or other attributes from the token payload, and use it to query the DynamoDB table for the user credentials. You can use the AWS SDK for JavaScript to interact with DynamoDB.<br>
4. If the user credentials are valid and match the expected role or permissions, return the API Gateway request to the appropriate endpoint. If the user credentials are invalid or missing, return an HTTP 401 Unauthorized error.<br>
5. Configure the API Gateway to use the Lambda function as a custom authorizer for the incoming requests, and to map the user ID or other attributes from the JWT token to the backend services or resources.
</ol>
</details>

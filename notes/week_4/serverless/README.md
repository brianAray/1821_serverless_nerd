# Serverless

Serverless Computing is a cloud computing model where you don't need to manage servers or infrastructure. It allows you to focus on writing code and deploying it without worrying about server provisioning, scaling, or maintenance.

## Benefits

- Cost Efficiency
    - Serverless computing charges you based on actual usage, eliminating idle server costs
- Automatic Scaling
    - Serverless platforms automatically scale to handle varying workloads
    - If your function suddenly experiences a spike in traffic, the platform allocates additional resources as needed
- No Server Management
    - You don't need to manage server provisioning, patching, or maintenance
    - You focus only on writing code, and defining event triggers

## Serverless Computing Architecture

In general, when a lamdba function is triggered, a EC2 instance is spun up and is only active for as long as the function needs to compute a response. Once the response is complete, the instance is shut down.

The lambda function can be written in a variety of languages, including NodeJS, Ruby, Java, GO, Powershell, C#, and Python.

An important aspect of the Serverless Architecture, is the event-driven model. The functions require an event to trigger, in order to execute, and these triggers can be a variety of sources within AWS:

- S3 Bucket has a file uploaded that needs to be processed
- API Gateway endpoint receives a POST data
- SNS message
- Basically, any event that causes a cloudwatch log to be created can be assigned as a lambda function trigger

### Final Server Model

- S3 Bucket
    - Static Application serving React
- API Gateway
    - REST API
- Lambda
    - Execute Code on Demand
- DynamoDB
    - Store & Retrieve Data
- Cognito
    - Authenticate Users

- Route 53
    - DNS is used to translate your URL
- CloudFront
    - Caching is used to improve your performance

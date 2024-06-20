# AWS API Gateway Question Bank

## Level 1: Basic

<ol>
<li>What is AWS API Gateway?</li>
<li>What are the benefits of using AWS API Gateway?</li>
<li>How can you create an API using AWS API Gateway?</li>
<li>What is a resource in AWS API Gateway?</li>
<li>What is a method in AWS API Gateway?</li>
<li>What is an integration in AWS API Gateway?</li>
<li>What is a stage in AWS API Gateway?</li>
<li>What is a deployment in AWS API Gateway?</li>
<li>What is an API key in AWS API Gateway?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS API Gateway is a fully managed service that makes it easy to create, deploy, and manage APIs at any scale.</li>
<li>AWS API Gateway provides benefits such as easy API creation and management, powerful security and access control, seamless integration with other AWS services, and flexible pricing options.</li>
<li>The types of APIs that can be created with AWS API Gateway include REST APIs, WebSocket APIs, and HTTP APIs.</li>
<li>A resource in AWS API Gateway represents a logical entity that defines a group of related API endpoints or functions, such as /users or /products.</li>
<li>A method in AWS API Gateway represents an HTTP method (e.g. GET, POST, PUT, DELETE, etc.) that is used to access a resource, and defines the integration type and response type.</li>
<li>An integration in AWS API Gateway represents a mapping between a method and a backend service or function, and can be configured as a Lambda function, HTTP endpoint, or AWS service integration.</li>
<li>A stage in AWS API Gateway represents a version of an API that is deployed to a specific environment (e.g. production, testing, development), and can have different settings and policies.</li>
<li>A deployment in AWS API Gateway represents the process of pushing an API configuration to a stage, and can be managed using the AWS Management Console, AWS CLI, or AWS SDKs.</li>
<li>An API key in AWS API Gateway represents a secure way to control access to an API by providing a unique identifier and secret key to authorized users, and can be created, managed, and revoked using the AWS Management Console or API.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What are the different authentication and authorization methods supported by AWS API Gateway?</li>
<li>How can you use AWS API Gateway with AWS Lambda, and what are the benefits?</li>
<li>What is the difference between REST APIs and HTTP APIs in AWS API Gateway?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS API Gateway supports different authentication and authorization methods, such as AWS Identity and Access Management (IAM) policies, custom authorizers, Cognito User Pools, and Lambda authorizers. IAM policies can be used to control the access to the API Gateway resources and methods based on the identity and roles of the callers. Custom authorizers and Lambda authorizers can be used to authenticate and authorize the callers using custom logic or external services. Cognito User Pools can be used to manage user sign-up, sign-in, and tokens, and to secure the API using OAuth 2.0 or OpenID Connect.</li>
<li>AWS API Gateway can be used with AWS Lambda to create serverless APIs that can scale automatically and integrate with other AWS services. The benefits of using API Gateway with Lambda include reduced operational overhead, pay-per-use pricing, low latency, and flexible configuration. To use API Gateway with Lambda, you can create a REST API or HTTP API, and choose Lambda as the integration type for the methods. You can also use features such as request and response mapping, API Gateway authorizers, and API Gateway caching to customize the API behavior.</li>
<li>REST APIs and HTTP APIs are the two types of APIs that can be created with AWS API Gateway, and they have different characteristics and use cases. REST APIs are the traditional style of APIs that use URI paths, HTTP methods, and status codes to represent the resources and operations, and support advanced features such as request and response modeling, multiple content types, and headers. HTTP APIs are the simplified style of APIs that use route paths, methods, and integrations to represent the endpoints and integrations, and support faster performance, lower cost, and simpler management. HTTP APIs are recommended for simple use cases or high-scale APIs, while REST APIs are recommended for complex use cases or customizations.</li>
</ol>
</details>

# AWS SAM (Serverless Application Model)
AWS SAM is an open-source framework for building serverless applications on AWS. It provides a simplified way to define and deploy serverless applications by utilizing "SAM Templates". SAM Templates are converted into CloudFormation templates that AWS CloudFormation then uses to add, remove, or modify resources that are required for the serverless application.

With SAM, we can define serverless resources such as AWS Lambda functions, API Gateway APIs, DynamoDB tables, etc. in a SAM template file. This makes it easier to build and manage our serverless applications, since we utilize the principle of **infrastructure as code (IaC)** that allows us to track changes to our infrastructure through version control systems such as Git.

SAM also provides a set of tools to help us develop and test our applications locally before deploying them to AWS. For example, we can use `sam local invoke` to invoke a Lambda function locally (running in a Docker container). We can also use `sam local start-api` to start up a local development server that we can send HTTP requests to in order to simulate the AWS API Gateway service. As a caveat, we need to run `sam build` each time we make a code change.

## Software Requirements
1. AWS CLI: used by AWS SAM to communicate with AWS
2. Docker Desktop: used to run lambda functions locally for testing purposes
    - Windows: need to install WSL by running `wsl --install` in Powershell (run as administrator)
3. AWS SAM CLI: used to build a SAM project, deploy a SAM project to AWS, and running lambda functions locally for testing, etc.

## CloudFormation
CloudFormation is a service provided by AWS that enables us to model and set up AWS infrastructure in an easier to manage way. Instead of manually provisioning resources, we can instead define CloudFormation templates that will then be executed by the CloudFormation service, which will proceed to add, modify, or delete resources as necessary to reflect the template's resource specifications.

With CloudFormation, we define our infrastructure as a collection of resources in a template file. The template is either written in JSON or YAML format and describes all of the resources that we need, such as EC2 instances, DynamoDB tables, Lambda functions, S3 buckets, IAM Roles, etc. Because the infrastructure reqiurements are specified in a file, this is establishing a best practice known as **Infrastucture as Code (IaC)**. We are able to keep track of a history of changes made to the infrastructure, simply by monitoring the changes made in various Git commits to the repository that contains the template file.

CloudFormation revolves around a collection of infrastructure known as a "stack". When changes are made to a template file, the stack will proceed to update the resources contained within it. If we delete a stack, it will conveniently delete all of the resources associated with the stack itself.

SAM Templates v. CloudFormation Templates
- CloudFormation Templates are more complicated and harder to read and interpret
- CloudFormation Templates provide a more generalized way to provision AWS resources
- SAM Templates are easier to read and interpret
- SAM Templates provide an opinionated way to provision resources for a serverless application
- SAM Templates get converted into CloudFormation templates before they are passed off to the CloudFormation service

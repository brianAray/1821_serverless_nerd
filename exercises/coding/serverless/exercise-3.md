# Serverless Exercise 3 (AWS SAM)

## Description
In this exercise, you will use AWS Serverless Application Model (SAM) to create and deploy a serverless application that consists of a Lambda function and an API Gateway. The Lambda function will be invoked via the GET /hello endpoint and should return a simple "Hello World!" message in the HTTP response.

## Approach
To complete this exercise, follow the steps below:

1. Install and configure the AWS CLI and SAM CLI on your local machine.
    - Make sure you have an IAM user with sufficient permissions 
        - For this exercise, you can grant Administrator Access (full access) to the IAM user, but this should not be done in a production environment.
    - Configure your AWS CLI to use the access key ID and secret access key for the IAM user. You can do this by running the `aws configure` command in the terminal and following the prompts to enter your access key ID, secret access key, default region, and default output format.
2. Create a new folder for your serverless application.
3. Within the new folder, create a new SAM template file named `template.yaml`.
4. In the SAM template file, define a new AWS::Serverless::Function resource named "HelloWorldFunction" with the following properties:
    - Runtime: nodejs16.x
    - Handler: index.handler
    - CodeUri: a folder containing your Lambda function code (ex. hello-world/)
    - Events: an API Gateway event with the path set to "/hello" and the method set to "get"
5. Create a new folder named "hello-world" within the same folder where you created the SAM template file. Within the "src" folder, create a new file named index.js with the following code:
```javascript
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
```
6. Use the SAM CLI to package and deploy your serverless application:
- Use the `sam validate --lint` command to check if the template.yaml file has any errors
- Use the `sam build` command to package your application code in a state ready to be deployed
- Use the `sam deploy --guided` command to create and deploy the CloudFormation stack for your serverless application.
    - `--guided` only needs to be used the first time

That's it! After completing these steps, you should have a serverless application that consists of a Lambda function and an API Gateway, deployed using AWS SAM. When you invoke the GET /hello endpoint, you should receive a simple "Hello World!" message (as a JSON object) in the HTTP response.

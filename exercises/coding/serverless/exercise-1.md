# Serverless Exercise 1 (Simple App)

## Description
This exercise involves creating a Lambda function that returns a simple HTTP response with a JSON object containing a message of "Hello World!".

The Lambda function will be invoked via the GET /hello endpoint and should return an HTTP response with the following properties:
- Status Code: 200
- Body: 
    ```json
    {
        "message": "Hello World!"
    }
    ```
- Headers:
    - Content-Type: application/json

## Approach
To complete this exercise, follow the steps below:

1. Create an API in the API Gateway service (HTTP API)
    - Give the API a name and do not specify any initial integrations
    - Click "Next" all the way through and then click "Create"
2. Create a Lambda function
    - Choose "Author from scratch"
    - Give the function a name
    - Choose a runtime of "Node.js 16.x"
    - Click "Create function"
3. Write the code to create the JSON response object and set the content-type header to "application/json" and status code to 200
4. Deploy the Lambda function (by clicking "Deploy")
5. Go back to the API in API Gateway
    - Go to the "Routes" section
    - Define the GET /hello route
    - Within the same "Routes" section, add the Lambda function you just created as an integration for the /hello route.

That's it! After completing these steps, you should be able to invoke the GET /hello endpoint and receive a simple "Hello World!" message (as a JSON object) in the HTTP response.

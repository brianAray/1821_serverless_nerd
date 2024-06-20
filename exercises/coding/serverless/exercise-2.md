# Serverless Exercise 2 (Reversing App)

## Description
In this exercise, you will create a Lambda function that accepts a string as part of an HTTP POST request and returns the reversed version of the string in the HTTP response.

The Lambda function will be invoked via the POST /reverse endpoint and should accept a JSON object in the request body with the following properties:
- Request Body:
    ```json
    {
        "inputString": "string to reverse"
    }
    ```
- Request Headers
    - Content-Type: application/json

The function should return an HTTP response with the following properties:
- Status Code: 200
- Response Body:
    ```json
    {
        "reversedString": "esrever ot gnirts"
    }
    ```
- Response Headers
    - Content-Type: application/json

## Approach
To complete this exercise, follow the steps below:

1. Create (or re-use the one you created previously) an API in the API Gateway service (HTTP API):
2. Create a new Lambda function:
    - Choose "Author from scratch".
    - Give the function a name.
    - Choose a runtime of "Node.js 16.x".
    - Click "Create function".
3. Write the code to parse the input string from the request body, reverse it, and create the JSON response object with the reversed string and the content-type header set to "application/json".
    - `event.body` will be the request body as a string
    - JSON.parse(event.body) will give you a JS object with the same properties as the JSON string
    - Figure out how to reverse a string! (coding challenge)
4. Deploy the Lambda function.
5. Go back to the API in API Gateway:
    - Go to the "Routes" section.
    - Define the POST /reverse route.
    - Within the same "Routes" section, add the Lambda function you just created as an integration for the /reverse route.

That's it! After completing these steps, you should be able to send an HTTP POST request to the /reverse endpoint with an input string, and receive a reversed version of the string in the HTTP response.

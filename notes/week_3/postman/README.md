# Postman

* API Documentation/Testing
    - API Testing
        - API testing involves testing individual APIs for functionality, reliability, and performance.
        - Tests ensure that APIs return their expected results and handle errors appropriately.
        - The Tests can be automated, and are often run as part of a continuous integration/continuous delivery pipeline.
    - Postman Collections
        - Postman collections are a way to group, organize, and share related API requests in Postman.
        - Collections can contain individual API requests, as well as folders and sub-folders to better categorize requests.
        - Variables and environment settings can be used within collections to make requests more dynamic and reusable.
    - Generating Random Data with Postman
        - Use the "Random User Generator" API, which generates fake data for user profiles, to generate random data in Postman.
        - Utilize JavaScript code to programmatically generate random data within Postman tests.
        - Store frequently used random data values as environment or global variables in Postman.
    - Postman Variables
        - Postman variables allow for dynamic and reusable data to be used in API requests.
        - Variables can be set at the environment, collection, or global level, and can be accessed within requests using double curly braces syntax (e.g. `{{variable}}`).
        - Variables can be used for values such as API endpoint URLs, authentication credentials, and data that changes frequently.
        - Global variables can be accessed and used by any request within a Postman workspace.
    - Extracting Response Data
        - The response body, header, and status code can be accessed using the pm.response object.
        - Data can be extracted using the methods like:
            - `pm.response.json()`
            - `pm.response.text`
            - `pm.response.header`
            - etc.
        - Extractions can be stored as variables using the syntax `pm.variables.set(key, value)` for later use within the current session or future requests.
        - The `pm.test` function can be used to write assertions to verify that the extracted data matches expected values.
        - The `pm.expect` function from the Chai library can also be used to write more readable and expressive assertions.
    - Postman Assertions
        - Assertions can verify aspects of the response such as status code, response body, headers, and variables.
        - Assertions can be written to check for specific values, data types, presence of key-value pairs, etc.
        - ```javascript
            // Check the status code of the response
            pm.test("Status code is 200", function () {
                pm.response.to.have.status(200);
            });

            // Check for specific data in the response body
            pm.test("Response body contains user data", function () {
                var jsonData = pm.response.json();
                pm.expect(jsonData.name).to.equal("John Doe");
                pm.expect(jsonData.email).to.equal("johndoe@example.com");
            });

            // Check for specific header in the response
            pm.test("Response header has Content-Type value", function () {
                pm.response.to.have.header("Content-Type");
                pm.expect(pm.response.headers.get("Content-Type")).to.equal("application/json");
            });
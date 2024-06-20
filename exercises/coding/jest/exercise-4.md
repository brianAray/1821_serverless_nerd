# Jest Exercise 4 (Using Mocks)

## Description

This exercise involves using Jest's mocking functionality to test a function called `getData`. The function has been provided for you.

```javascript
const axios = require('axios');

function getData() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        return null;
    });
}
```

## Approach

1. Use Jest's mocking functionality to mock the axios module and test the behavior of the `getData` function when the HTTP request succeeds or fails.
2. Write test cases using Jest to verify that the `getData` function works correctly for different HTTP response codes.

## Hints

1. Use Jest's `jest.mock` function to mock the axios module.
2. Write test cases to ensure that the `getData` function returns the expected output when the mocked axios module resolves or rejects the HTTP request.
3. Use Jest's expect function to check the output of the `getData` function.

## Deliverables

- A set of test cases using Jest's mocking functionality to test the behavior of the getData function when the HTTP request succeeds or fails

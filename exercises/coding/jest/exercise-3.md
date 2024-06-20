# Jest Exercise 3 (Async/Await)

## Description

This exercise involves using Jest's async/await functionality to test a function called `fetchData`. The code that will be tested has been provided for you.

```javascript
function fetchData(value, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`${value}`));
      } else {
        resolve(value);
      }
    }, 1000);
  });
}

module.exports = fetchData;
```

## Approach

1. Use Jest's async/await functionality to write test cases that verify that the `fetchData` function works correctly when the Promise resolves or rejects.

## Hints

1. Use Jest's async and await keywords to handle the Promise returned by the `fetchData` function.
2. Write test cases to check the function's behavior when the Promise resolves and rejects.
3. Use Jest's `expect` function to check the output of the fetchData function.

## Deliverables

- A set of test cases using Jest's async/await functionality to verify that the fetchData function works correctly when the Promise resolves or rejects.

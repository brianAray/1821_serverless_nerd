# Jest Question Bank

## Level 1: Basic

<ol>
<li>What is Jest, and why is it used in JavaScript development?</li>
<li>How do you install Jest in a JavaScript project?</li>
<li>How do you write a basic test in Jest?</li>
<li>What is a test runner, and how does Jest provide one?</li>
<li>What is a mock function in Jest, and how is it useful in testing?</li>
<li>What is code coverage, and how does Jest measure it?</li>
<li>What is snapshot testing in Jest, and how does it work?</li>
<li>How do you debug Jest tests?</li>
<li>How do you run Jest tests in watch mode?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>Jest is a JavaScript testing framework that allows developers to write and run tests for their code. It provides a simple and intuitive way to test code in a variety of JavaScript environments, such as Node.js and web browsers.</li>
<li>Jest can be installed in a JavaScript project using the npm package manager. The command to install Jest is: npm install --save-dev jest</li>
<li>To write a basic test in Jest, you can use the "test" function provided by the framework. For example, a test that checks if a function returns the correct value can be written as:</li>

```javascript
test('addition function works correctly', () => {
  expect(add(1, 2)).toBe(3);
});
```

<li>A test runner is a tool that allows developers to automate the running of tests and generate reports on the results. Jest provides a built-in test runner that runs tests in parallel and reports the results in a user-friendly way.</li>
<li>A mock function in Jest is a function that allows developers to replace a real function with a simulated one. This is useful for testing code that relies on other functions, without actually calling those functions. Mock functions can also be used to test asynchronous code.</li>
<li>Code coverage is a metric that measures the percentage of code that is executed during testing. Jest measures code coverage by default, and provides a report on the results.</li>
<li>Snapshot testing in Jest is a way to test whether the output of a component or function matches a previously saved snapshot. Jest saves a snapshot of the output during the first test, and then compares it to the output of subsequent tests. If the output changes, the test fails.</li>
<li>To debug Jest tests, you can use the "debug" configuration option in the Jest configuration file. This will launch the Jest test runner in debug mode, which allows you to set breakpoints and step through the code.</li>
<li>To run Jest tests in watch mode, you can use the "watch" configuration option in the Jest configuration file. This will cause Jest to re-run tests whenever a file changes in the project.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What are Jest matchers, and how do they work?</li>
<li>What is a setup file in Jest, and how is it used?</li>
<li>What are test suites and test cases in Jest, and how are they organized?</li>
<li>What is the purpose of the "beforeEach" and "afterEach" functions in Jest tests?</li>
<li>How do you test asynchronous code in Jest?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>Jest matchers are functions provided by the Jest framework that allow developers to make assertions about the output of a function or component. For example, the "toBe" matcher checks if two values are equal, and the "toHaveLength" matcher checks if an object has a specific length.</li>
<li>A setup file in Jest is a file that is run before any tests are executed. It is used to set up any dependencies or environment variables that the tests require.</li>
<li>In Jest, test suites are groups of related test cases, and test cases are individual tests. They are organized using the "describe" and "it" functions provided by the framework.</li>
<li>The "beforeEach" and "afterEach" functions in Jest are used to run setup and teardown code before and after each test case in a test suite. They can be used to set up or reset any dependencies that the tests require.</li>
<li>To test asynchronous code in Jest, you can use the "async" and "await" keywords to handle promises. For example, a test that checks if an asynchronous function returns the correct value can be written as:</li>

```javascript
test('asynchronous addition function works correctly', async () => {
  const result = await asyncAdd(1, 2);
  expect(result).toBe(3);
});
```

</ol>
</details>

## Level 3: Advanced

<ol>
<li>What is test-driven development, and how can it be implemented using Jest?</li>
<li>How do you customize the Jest runtime environment to test code that relies on specific browser APIs?</li>
<li>What is the difference between shallow rendering and full rendering in Jest, and when should each be used?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>Test-driven development is a development approach that involves writing tests before writing the code that is being tested. This helps to ensure that the code is being written to meet the requirements of the tests. Jest can be used to implement test-driven development by writing tests for each feature or function, and then writing the code to pass the tests.</li>
<li>To customize the Jest runtime environment to test code that relies on specific browser APIs, you can use a tool like jsdom. jsdom is a JavaScript implementation of the DOM that can be used in Node.js, and can be used to simulate a browser environment for testing.</li>
<li>Shallow rendering in Jest involves rendering a component without rendering any of its child components. This is useful for testing the behavior of a component in isolation. Full rendering involves rendering a component and all of its child components, and is useful for testing the behavior of a component in the context of its parent components. Shallow rendering is faster than full rendering, but may miss some bugs that only occur in the full rendering context.</li>
</ol>
</details>

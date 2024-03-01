# Week 3 Review

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
* JavaScript Advanced
    - Spread / Rest Operator
        - The spread operator `(...)` allows for elements of an array or properties of an object to be spread out into a new array or object.
        - The spread operator can be used to copy arrays and objects, or to concatenate arrays.
        - ```javascript
            // Copying an array
            let originalArray = [1, 2, 3];
            let copiedArray = [...originalArray];
            console.log(copiedArray); // [1, 2, 3]

            // Concatenating arrays
            let array1 = [1, 2, 3];
            let array2 = [4, 5, 6];
            let concatenatedArray = [...array1, ...array2];
            console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

            // Spreading elements of an array as function arguments
            function add(a, b, c) {
                return a + b + c;
            }
            let numbers = [1, 2, 3];
            console.log(add(...numbers)); // 6
        - The rest operator `(...)` allows for multiple individual elements to be collected into an array.
        - The rest operator can be used in function arguments to gather all remaining parameters into an array.
        - ```javascript
            // Gathering all remaining function arguments into an array
            function logArguments(firstArg, ...restOfArgs) {
                console.log(firstArg);
                console.log(restOfArgs);
            }
            logArguments(1, 2, 3, 4, 5);
            // Output:
            // 1
            // [2, 3, 4, 5]

            // Destructuring an array
            let numbers = [1, 2, 3, 4, 5];
            let [first, ...rest] = numbers;
            console.log(first); // 1
            console.log(rest); // [2, 3, 4, 5]
    - Guard Operator
        - The guard operator `(?.)` is a shorthand for checking the existence of a property or object before accessing or using it.
        - The guard operator returns undefined instead of throwing an error when attempting to access a property of null or undefined.
        - ```javascript
            let person = {
                name: "John",
                address: {
                    street: "123 Main St",
                    city: "San Francisco"
                }
            };

            // Using the guard operator
            let street = person?.address?.street;
            console.log(street); // "123 Main St"

            // Without the guard operator
            let city;
            if (person && person.address) {
                city = person.address.city;
            }
            console.log(city); // "San Francisco"
    - Closures
        - A closure is a function that has access to variables in its outer scope, even after the outer function has returned.
        - Closures can be used to create private variables by returning an inner function that has access to the closure's scope.
        - ```javascript
            // Creating a closure
            function outerFunction() {
                let outerVariable = "I am accessible to innerFunction";
                function innerFunction() {
                    console.log(outerVariable);
                }
                return innerFunction;
            }

            // Invoking outerFunction and storing the returned inner function
            let closure = outerFunction();

            // Invoking the inner function and accessing outerVariable
            closure(); // "I am accessible to innerFunction"
    - Errors
        - Errors are exceptional conditions that occur in a program during its execution.
        - There are different types of errors in JavaScript, including `SyntaxError`, `TypeError`, `RangeError`, and `ReferenceError`.
        - Error handling can be done using try-catch blocks, where code is placed in a try block and exceptions are caught in a catch block.
        - Custom error types can be created using the Error constructor and extending the Error prototype to add additional information.
        - ```javascript
            // Throwing a custom error
            function divide(a, b) {
                if (b === 0) {
                    throw new Error("Cannot divide by zero");
                }
                    return a / b;
            }

            // Catching errors with a try-catch block
            try {
                let result = divide(10, 0);
                console.log(result);
            } catch (error) {
                console.error(error.message); // "Cannot divide by zero"
            }
    - Call Stack
        - JavaScript uses the call stack to keep track of the functions that are being executed and the order in which they are called.
        - Whenever a function is called, it is pushed onto the top of the call stack. When the function returns, it is popped off the top of the call stack.
        - If an error occurs and there are no error handling mechanisms in place, the error will be propagated up the call stack until it reaches the global scope, where it will cause the program to crash.
    - Callback Queue
        - It is a data structure that stores asynchronous function calls, such as those from setTimeout, addEventListener, or fetch.
        - It is separate from the call stack and does not interrupt the execution of the current code.
        - The callback queue is processed only after the call stack is empty.
        - The JavaScript event loop monitors the call stack and callback queue, pushing callbacks onto the call stack whenever the call stack is empty.
    - Event Loop
        - The event loop is a mechanism in JavaScript that continuously checks the call stack and callback queue to determine what code should be executed next.
        - The call stack holds the synchronous code that is currently being executed, while the callback queue holds asynchronous callbacks that are waiting to be executed.
        - The event loop checks the call stack to see if it is empty. If it is, it takes the first callback from the callback queue and pushes it onto the call stack to be executed.
        - The event loop continues this process of checking the call stack and processing callbacks from the callback queue until there is no more code to be executed.
    - Timing Events
        - Timing events refer to events that are scheduled to occur at a specific time or after a specific interval of time.
        - Common timing events in JavaScript include setTimeout, setInterval, and requestAnimationFrame.
        - setTimeout schedules a function to run after a specified amount of time. It returns a unique ID that can be used to cancel the scheduled event with clearTimeout.
    - Promises
        - They are objects in JavaScript that represent the eventual outcome of an asynchronous operation.
        - They have three states: pending, fulfilled, and rejected.
        - They can be created using the Promise constructor, which takes a function as its argument. The function should have two parameters, resolve and reject, which are used to resolve or reject the promise, respectively.
        - Promises have a then method that can be used to specify what should happen when the promise is fulfilled or rejected. The then method takes two functions as arguments, one for fulfillment and one for rejection.
        - They also have a catch method that can be used to specify what should happen when the promise is rejected. The catch method takes a function as its argument, which should handle the rejection.
        - ```javascript
            // Creating a promise
            const promise = new Promise(function(resolve, reject) {
                setTimeout(function() {
                        resolve("Resolved");
                    }, 1000);
            });
            // Using the then and catch methods
            promise
                .then(function(value) {
                    console.log(value);
                })
                .catch(function(error) {
                    console.error(error);
                });
            // Output:
            // Resolved
    - Async Await
        - `async/await` allows you to write asynchronous code that looks and behaves like synchronous code.
        - The `async` keyword is used to declare an asynchronous function, which returns a Promise by default.
        - The `await` keyword can be used within an asynchronous function to pause execution until a Promise is resolved.
        - ```javascript
            // Asynchronous function
            async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            console.log(data);
            }

            // Calling the asynchronous function
            fetchData();
* HTML
    - Overview
        - HTML stands for Hypertext Markup Language, and is the standard language used to create web pages.
        - HTML consists of a series of elements that define the structure, content, and presentation of a web page.
        - HTML is used in conjunction with other technologies, such as CSS and JavaScript, to create dynamic and interactive web pages.
    - Tags
        - HTML tags are the building blocks of a web page, and define the structure, content, and presentation of the page.
        - Some common HTML tags include:
            - `<html>`: The root element of the page.
            - `<head>`: Contains information about the document, such as the title and meta data.
            - `<body>`: Contains the content of the page.
            - `<h1>` to `<h6>`: Define headings, with `<h1>` being the largest and `<h6>` being the smallest.
            - `<p>`: Defines a paragraph of text.
        - ```html
            <h1>Hello World!</h1>
            <p>This is my first HTML page.</p>
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
            <img src="image.jpg" alt="An example image">
            <a href="https://www.example.com">Visit Example.com</a>
    - HTML Document Structure
        - The structure of an HTML document consists of a series of nested elements, starting with the `<html>` element as the root element.
        - Within the `<html>` element, there are two main sections: the `<head>` and `<body>` elements.
            - The `<head>` element contains information about the document, such as the title and meta data.
            - The `<body>` element contains the content that is displayed on the web page.
        - Within the `<body>` element, there are various other elements that define the structure, content, and presentation of the page, such as headings, paragraphs, lists, images, links, tables, forms, etc.
    - Elements and Attributes
        - HTML elements are the building blocks of a web page and define the structure, content, and presentation of the page.
        - HTML attributes provide additional information about an element or modify its behavior.
        - Attributes are added to an element's start tag and have the format attribute="value", such as class="highlight" or id="header".
    - Inline and Block Elements
        - Block elements occupy the full width of their parent container and create a new block formatting context. 
            - `<div>` 
            - `<p>`
            - `<h1>`
            - `<ul>`
            - etc.
        - Inline elements only occupy as much width as their content requires and do not create a new block formatting context.
            - `<a>` 
            - `<span>`
    - Form Elements and Attributes
        - HTML forms are used to collect data from users and submit it to a server.
        - Some common form elements include:
            - `<form>`: Defines a form and its properties, such as the method and action attributes, which determine how the data will be submitted.
            - `<input>`: A flexible element that can be used to create various types of form controls, such as text fields, checkboxes, radio buttons, etc. The type attribute determines the type of input control.
            - `<button type="submit">`: Creates a submit button for the form to send its data
        - Some common form attributes include:
            - `name`: Identifies the form control and is used to identify the data when it is submitted.
            - `value`: Specifies the initial value of a form control.
            - `required`: Specifies that a form control must be filled out before the form can be submitted.
            - `disabled`: Disables a form control, making it uneditable.
            - `placeholder`: Provides a hint about the format of the data that should be entered in a form control.
        - ```html
            <form action="https://www.example.com/submit-form" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required placeholder="Enter your username">

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email address">

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required placeholder="Enter a strong password">

                <button type="submit">Submit</button>
            </form>
    - Select and Multi-Select
        - `<select>`: Creates a dropdown list where the user can choose a single option.
            - The options are represented by `<option>` elements.
            - The selected option can be set by either setting the selected attribute on an `<option>` element.
        - `<select multiple>`: Creates a dropdown list where the user can choose multiple options.
            - The options are represented by `<option>` elements.
            - The selected options can be set by either setting the selected attribute on multiple `<option>` elements.
        - ```html
            <!-- Single Select -->
            <label for="single-select">Single Select:</label>
            <select id="single-select" name="single-select">
            <option value="">Select</option>
            <option value="option1">1</option>
            <option value="option2">2</option>
            </select>

            <!-- Multi Select -->
            <label for="multi-select">Multi Select:</label>
            <select id="multi-select" name="multi-select" multiple>
            <option value="option1">A</option>
            <option value="option2">B</option>
            </select>
    - Input Elements and Input Types
        - `<input>`: Represents an input control that allows the user to enter data.
            - The input type is specified using the type attribute.
            - Common input types include:
                - `text`: Single line text input.
                - `password`: Obscured text input, typically used for entering passwords.
                - `radio`: Single option selection from a group of options.
                - `checkbox`: Multiple option selection.
                - `submit`: Submit button for submitting form data.
                - `reset`: Reset button for clearing form data.
        - ```html
            <!-- Text Input -->
            <label for="text-input">Text Input:</label>
            <input id="text-input" name="text-input" type="text" placeholder="Enter text">

            <!-- Password Input -->
            <label for="password-input">Password Input:</label>
            <input id="password-input" name="password-input" type="password" placeholder="Enter password">

            <!-- Radio Input -->
            <fieldset>
            <legend>Radio Input:</legend>
            <input id="radio1" name="radio" type="radio" value="radio1">
            <label for="radio1">Radio 1</label>
            <input id="radio2" name="radio" type="radio" value="radio2">
            <label for="radio2">Radio 2</label>
            </fieldset>

            <!-- Checkbox Input -->
            <fieldset>
            <legend>Checkbox Input:</legend>
            <input id="checkbox1" name="checkbox1" type="checkbox" value="checkbox1">
            <label for="checkbox1">Checkbox 1</label>
            <input id="checkbox2" name="checkbox2" type="checkbox" value="checkbox2">
            <label for="checkbox2">Checkbox 2</label>
            </fieldset>
    - Submitting Forms
        - Submitting forms can be done by clicking a submit button, pressing enter on a text input, or programmatically with JavaScript.
        - The form data is sent to the server as a query string in the case of a GET request or as a request body in the case of a POST request.
        - The `action` attribute of the form element specifies the URL that the form data is sent to.
        - The `method` attribute of the form element specifies the HTTP method used for submitting the form data.
* CSS
    - Overview
        - CSS (Cascading Style Sheets) is used to style and layout HTML documents.
    - CSS Box Model
        - Each HTML element is considered a rectangular box with content, padding, borders, and margins.
        - The content area is where the element's content (e.g. text, images) is displayed.
        - Padding is the space between the content and the border.
        - Borders are lines that surround the content and padding.
        - Margins are the space outside the border and are used to separate elements from each other.
        - The width and height of an element can be set to control the size of the content area. The total width and height of an element including padding, borders, and margins can be calculated using the box-sizing property.
        - ```css
            div {
              width: 300px;
              height: 200px;
              padding: 20px;
              border: 5px solid black;
              margin: 10px;
              box-sizing: border-box;
            }
    - Inline, Internal, and External Stylesheets
        - Inline styles are applied directly to an HTML element using the "style" attribute.
            - `<p style="color: blue;">This is a paragraph with inline styles.</p>`
        - Internal stylesheets are added to an HTML document using the "style" tag within the "head" section.
            - ```html
                <head>
                  <style>
                    p {
                      color: blue;
                    }
                  </style>
                </head>
                <body>
                  <p>This is a paragraph with styles from an internal stylesheet.</p>
                </body>
        - External stylesheets are separate files with a ".css" extension that are linked to an HTML document using the "link" tag within the "head" section.
            - ```html
                <head>
                  <link rel="stylesheet" type="text/css" href="styles.css">
                </head>
                <body>
                  <p>This is a paragraph with styles from an external stylesheet.</p>
                </body>
            - ```css
                p {
                  color: blue;
                }
    - CSS Properties
        - CSS properties are used to control the styling of HTML elements.
        - ```css
            p {
              color: blue;
              font-size: 16px;
              background-color: yellow;
              padding: 10px;
              margin: 10px;
              width: 50%;
              height: 50px;
              text-align: center;
              border: 1px solid black;
            }
    - Selectors
        - CSS element selectors are used to target specific HTML elements and apply styles to them.
        - ```css
            /* Type selector */
            p {
              color: blue;
            }

            /* Class selector */
            .highlight {
              background-color: yellow;
            }

            /* ID selector */
            #header {
              text-align: center;
            }

            /* Universal selector */
            * {
              margin: 0;
              padding: 0;
            }

            /* Attribute selector */
            input[type="submit"] {
              background-color: green;
            }
    - Sibling Selectors
        - Sibling selectors in CSS allow you to select and style an element based on its relationship with its sibling elements.
        - There are two types of sibling selectors:
            - Adjacent sibling selector: selects an element that is immediately preceded by another specified element (e.g. h1 + p)
            - General sibling selector: selects an element that is preceded by another specified element (e.g. h1 ~ p)
        - ```css
            /* Adjacent sibling selector */
            h1 + p {
              color: blue;
            }

            /* General sibling selector */
            h1 ~ p {
              font-size: 18px;
            }
    - Advanced Selectors
        - Advanced selectors in CSS allow you to select and style elements with more specificity and precision.
        - Some common advanced selectors include:
            - Attribute selectors (e.g. [attribute="value"])
            - Pseudo-classes (e.g. :hover, :active, :focus)
            - Pseudo-elements (e.g. ::before, ::after)
            - Child selectors (e.g. parent > child)
            - Descendant selectors (e.g. ancestor descendant)
        - ```css
            /* Attribute selector */
            a[target="_blank"] {
              color: blue;
            }

            /* Pseudo-class */
            button:hover {
              background-color: lightgray;
            }

            /* Pseudo-element */
            p::before {
              content: "Note: ";
              font-weight: bold;
            }

            /* Child selector */
            ul > li {
              list-style-type: square;
            }

            /* Descendant selector */
            #header h1, h2, h3 {
              color: red;
            }
    - Responsive Web Design
        - Responsive web design (RWD) is a design approach that makes web pages adjust to different screen sizes and device types.
        - The goal of RWD is to provide an optimal viewing and interaction experience for users, regardless of the device they use.
        - Techniques used in RWD include using flexible grid-based layouts, media queries, and CSS3 media features to adjust the layout and content of a web page.
        - The design should adapt to different viewports, such as desktop, tablet, and mobile, by changing the layout, size, and position of elements to best fit the screen size.
        - ```css
            /* CSS Media Query */
            @media (min-width: 768px) {
              /* apply styles for devices with viewports >= 768px */
            }

            /* CSS3 Media Feature */
            @media screen and (max-width: 600px) {
              /* apply styles for devices with viewports <= 600px */
            }
    - Flexbox
        - Flexbox is a CSS layout mode that provides a flexible way to arrange and align elements within a container.
        - It allows for dynamic and efficient layouts, with elements automatically resizing and repositioning as the container size changes.
        - A flex container can be either a row or a column and can have multiple flex items that can be aligned and spaced in any direction.
        - Key properties of flexbox include display: flex, flex-direction, justify-content, align-items, and flex-wrap.
        - ```css
            /* Creating a flex container */
            .container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }

            /* Flex item */
            .item {
              flex: 1;
            }
    - CSS Grid
        - CSS Grid is another layout mode that provides a powerful and flexible way to arrange and align elements within a container.
        - It allows for creating multi-dimensional layouts with rows and columns, and defining how elements are placed and sized within the grid.
        - Key properties of CSS Grid include display: grid, grid-template-columns, grid-template-rows, grid-column-start, grid-row-start, grid-column-end, grid-row-end, and grid-template-areas.
        - ```css
            /* Creating a grid container */
            .container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(3, 100px);
              grid-template-areas: 
                "header header header"
                "nav main main"
                "footer footer footer";
            }

            /* Grid items */
            header {
              grid-area: header;
            }
            nav {
              grid-area: nav;
            }
            main {
              grid-area: main;
            }
            footer {
              grid-area: footer;
            }
    - Bootstrap
        - Bootstrap is a popular front-end development framework that provides a pre-designed set of HTML, CSS, and JavaScript components to build responsive, mobile-first websites.
        - It includes a comprehensive collection of CSS classes and JavaScript plugins for common design patterns and UI elements like navigation bars, forms, modals, buttons, and more.
        - Bootstrap uses a grid-based layout system and uses classes to control element sizing, alignment, and spacing.
        - The framework supports responsive design and provides classes for easily hiding or showing elements based on screen size.
* JavaScript DOM
    - Selecting Elements from the DOM
        - JavaScript DOM (Document Object Model) allows you to manipulate the elements of a web page.
        - Elements can be selected using methods such as document.getElementById, document.getElementsByTagName, and document.querySelector/document.querySelectorAll.
        - ```javascript
            // select element with id 'example'
            let example = document.getElementById("example");
            console.log(example);

            // select all p elements
            let paragraphs = document.getElementsByTagName("p");
            console.log(paragraphs);

            // select first element with class 'example'
            let firstExample = document.querySelector(".example");
            console.log(firstExample);

            // select all elements with class 'example'
            let allExamples = document.querySelectorAll(".example");
            console.log(allExamples);
    - DOM Structure
        - The DOM represents the structure of an HTML document as a tree-like structure, called the DOM tree.
        - Each element is a node in the tree, with parent, child, and sibling relationships.
        - The root node is document and its children are the elements in the HTML page.
    - Traversing the DOM
        - The DOM API provides methods to traverse the DOM tree and manipulate its elements
        - Examples of traversing methods are: `parentNode`, `nextSibling`, `previousSibling`, `firstChild`, `lastChild`, `childNodes`
        - DOM traversal is useful to select specific elements or groups of elements based on their relationship with other elements in the DOM tree.
    - Manipulating the DOM
        - You can use DOM methods to access, change, delete and add elements to a document
        - ```javascript
            // Accessing an element
            let myDiv = document.getElementById("myDiv");
            console.log(myDiv);
            
            // Changing content
            let p = myDiv.getElementsByTagName("p")[0];
            p.innerHTML = "Hello DOM!";
            
            // Adding an element
            let newP = document.createElement("p");
            newP.innerHTML = "I'm a new paragraph.";
            myDiv.appendChild(newP);
    - Events and Listeners
        - DOM events are actions that occur in the browser, such as a user clicking on a button, hovering over an element, etc.
        - You can use JavaScript event listeners to respond to DOM events, and execute code when the events occur
        - Event listeners are attached to elements using addEventListener() method.
        - ```javascript
            let myBtn = document.getElementById("myBtn");
            myBtn.addEventListener("click", function() {
                alert("Button was clicked!");
            });
        - Some example events:
            - `click` - When an element is clicked
            - `load` - When a page or resource has finished loading
            - `mouseover` - When the mouse pointer moves over an element
            - `submit` - When a form is submitted
    - Bubbling and Capturing
        - Bubbling: When an event is fired on an element, it first triggers the innermost element and then bubbles up to parent elements
        - Capturing: The opposite of bubbling, where the event first triggers on the outermost element and then propagates to inner elements
        - By default, events bubble in the DOM
        - You can specify the propagation behavior of an event by using the useCapture argument in addEventListener() method.
        - ```javascript
            // Bubbling
            outer.addEventListener("click", function() {
                console.log("Bubbling");
            });
            // Capturing
            outer.addEventListener("click", function() {
                console.log("Capturing");
            }, true);
* JavaScript AJAX
    - Fetch API
        - AJAX (Asynchronous JavaScript and XML) allows you to update parts of a web page asynchronously without reloading the entire page
        - Fetch API is the modern way to make HTTP request in JS
        - It returns a promise that resolves to the response of the request
        - ```javascript
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        - `.json()`: This function parses the response as an expected JSON data into a JavaScript Object
        - To make a POST request, you must pass into the fetch call an object that contains the parameters needed to configure the request
        - ```javascript
            fetch('https://example.com/postendpoint', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
* TypeScript
    - Overview
        - TypeScript is a statically typed, superset of JavaScript
        - It adds optional type annotations to JavaScript, which allows for type checking at compile time
        - This can catch type-related errors early in the development process and improve overall code quality
        - TypeScript is fully compatible with existing JavaScript code and can be gradually introduced into existing projects
    - JavaScript vs TypeScript
        - JavaScript:
            - Is a dynamically typed language
            - Types are determined at runtime, not at compile time
            - Does not have strict type checking
            - Often requires more runtime error checking
        - TypeScript:
            - Is a statically typed, superset of JavaScript
            - Adds optional type annotations to JavaScript, which allows for type checking at compile time
            - Is more suited for large and complex applications, as it can catch type-related errors early in the development process
            - Requires a build step to transpile TypeScript code into JavaScript before it can run in a browser or on a server
    - TypeScript Compiler
        - The TypeScript compiler (tsc) is the tool that transpiles TypeScript code into JavaScript
        - The compiler can be configured using a tsconfig.json file, which allows customization of the transpilation process
        - The compiler can perform type checking and report errors if any type annotations are not satisfied
        - `tsc name_of_file.ts`: this command will generate a javascript file from the typescript file provided
    - Simple Types
        - Simple types in TypeScript include primitive types such as number, string, boolean, undefined, and null
        - These types are used to represent values in the most basic and straightforward way
        - When declaring variables or function parameters with simple types, the type can be explicitly declared (e.g. `let name: string`) or implicitly inferred from the value assigned to the variable (e.g. `let name = 'John'`).
        - ```typescript
            let name: string = "John";
            let age: number = 30;
            let isEmployed: boolean = true;

            function getFullName(firstName: string, lastName: string): string {
              return firstName + " " + lastName;
            }

            let fullName: string = getFullName("Jane", "Doe");
    - Object Types
        - Object types in TypeScript allow the representation of more complex data structures, such as records or dictionaries
        - Object types can be declared using object type literals (e.g. `{ name: string; age: number; }`) or interface types
        - Object type literals are used to declare inline object types, while interface types are named types that can be used across multiple parts of the code
        - Object types can include properties with types (e.g. `name: string`), as well as methods (e.g. `greet(): void`)
        - ```typescript
            interface Person {
            name: string;
            age: number;
            greet(): void;
            }

            let person: Person = {
            name: "John",
            age: 30,
            greet() {
                console.log(`Hello, I am ${this.name}.`);
            }
            };

            person.greet();
    - Union Types
        - Union types are declared using the | operator (e.g. string | number)
        - When using union types, the variable must match at least one of the types in the union
        - Union types are useful for representing values that can be of different types, such as function parameters that accept either a string or a number
        - ```typescript
            function getLength(value: string | number): number {
              if (typeof value === "string") {
                return value.length;
              } else {
                return value.toString().length;
              }
            }
    - String Enums
        - String enums in TypeScript are a way to define a set of named string constants
        - String enums are declared using the enum keyword followed by a unique name
            - `enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }`
        - The values of string enums are string literals, and can be assigned explicitly using the = operator
            - `Red = "RED"`
        - ```typescript
            enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }

            let color: Color = Color.Red;
            console.log(color); // Red

            let colorName: string = Color[color];
            console.log(colorName); // RED

            color = Color["GREEN"];
            console.log(color); // Green
    - Numeric Enums
        - Numeric enums in TypeScript are a way to define a set of named numeric constants
        - Numeric enums are declared using the enum keyword followed by a unique name 
            - `enum Direction { Up, Down, Left, Right }`
        - The values of numeric enums are numbers, and can be assigned explicitly using the = operator 
            - `Up = 1, Down = 2, Left = 3, Right = 4`
        - or by default starting from 0
            - `Up = 0, Down = 1, Left = 2, Right = 3`
        - Numeric enums can be used to represent named values that are numeric-based, such as error codes, or to avoid the use of hardcoded numeric values throughout the code
        - ```typescript
            enum Direction { Up, Down, Left, Right }

            let directionValue: number = direction;
            console.log(directionValue); // 0

            let directionName: string = Direction[directionValue];
            console.log(directionName); // Up
    - Classes
        - Classes in TypeScript are a way to define reusable objects that can have properties and methods
        - Classes are declared using the class keyword followed by a unique name (e.g. class Person {...})
        - Classes can have properties, which define the state of an object (e.g. name: string), and methods, which define the behavior of an object (e.g. greet() {...})
        - Properties and methods can be private, protected, or public, and their visibility is controlled using the private, protected, or no keyword, respectively
        - ```typescript
            class Person {
                name: string;
                age: number;

                constructor(name: string, age: number) {
                    this.name = name;
                    this.age = age;
                }

                greet() {
                    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
                }
            }

            let person = new Person("John Doe", 30);
            person.greet(); // Hello, my name is John Doe and I am 30 years old.
    - Functions
        - They are declared using the function keyword followed by a name and a set of parameters (e.g. function greet(name: string) {...})
        - They can have a return type specified using a colon (e.g. function greet(name: string): void {...}), which defines the type of value that the function returns
        - They can be anonymous, and can be assigned to variables (e.g. let greet = function(name: string) {...})
        - Functions can be used as values, and can be passed as arguments to other functions, or returned as values from other functions
        - Functions can be overloaded, which means that they can have multiple signatures that are used based on the types of the arguments passed
        - ```typescript
            function greet(name: string): void {
              console.log(`Hello, ${name}`);
            }

            greet("John Doe"); // Hello, John Doe
    - Array Generics
        - Array generics are a way to create arrays with a specific type in TypeScript
        - Array generics are declared using square brackets and the type parameter (e.g. let numbers: Array<number> = [1, 2, 3];)
        - The type parameter defines the type of the elements that can be stored in the array
        - Array generics can be used with any type, including custom types defined using classes or interfaces
        - ```typescript
            let numbers: Array<number> = [1, 2, 3];
    - Basic Generics
        - Generics are a way to create reusable code that can work with multiple types
        - Generics are declared using angle brackets and a type parameter (e.g. function identity<T>(arg: T): T {...})
        - The type parameter can be any valid TypeScript type, including custom types defined using classes or interfaces
        - Generics are useful for creating functions, classes, and interfaces that can work with multiple types
        - The type parameter is automatically inferred from the type of the arguments passed to the function or constructor
        - ```typescript
            function returner<T>(arg: T): T {
                return arg;
            }

            let stringOutput = returner<string>("Hello, World");
            let numberOutput = returner<number>(19);
    - Decorators
        - Decorators are a way to add additional behavior to classes, methods, properties, accessors, or parameters in TypeScript
        - They are declared using the `@` symbol, followed by the name of the decorator function (e.g. `@decorator`)
        - They are implemented as functions that take parameters and return a value that modifies the behavior of the decorated element
        - Decorators can be used to add metadata to a class, method, property, or accessor, or to modify the behavior of a class or its members
        - ```typescript
            function logged(target: any) {
                console.log(`Class: ${target}`);
            }

            @logged
            class Account {
                constructor(private name: string) {}
            }

            // Output:
            // Class: [object Object]

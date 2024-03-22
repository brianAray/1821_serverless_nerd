# Cumulative QC Review
Note: Not all questions will be covered, just some of the commonly missed ones/ones with misconceptions.

* == v. ===
    - "Cocercion": type cocercion
    - ==: cocerces types if not the same
        - ex. `'5' == 5 -> true`
    - ===: no type coercion, strict equality
        - ex. `'5' === 5 -> false`
* Datatypes
    - number
    - string
    - null
    - undefined
    - object
    - boolean
* Destructuring
    - Allows us to "extract" values from an object or an array without requring multiple lines
    - Array Destructuring
        - ex. const myArr = [10, 20, 30, -1, -2, -3]
            - const a, b, c, ...restOfValues = myArr;
                - ... is the "rest" operator
            - restOfValues -> [-1, -2, -3]
    - Object Destructuring
        - ex. const myObj = { firstName: 'Bach', lastName: 'Tran', age: 50}
        - const { firstName, lastName, age } = myObj;
            - console.log(firstName); // Bach
            - console.log(lastName); // Tran
        - const { addReimbursement, retrieveAllReimbursements } = require('../dao/reimb-dao');
* `...` rest operator OR spread operator
    - const a, b, c, `...d` = myArr;
        - rest operator
    - sum(...numbers);
        - numbers -> [1, 2, 3]
        - sum(1, 2, 3)
* Advantages of DynamoDB vs SQL
    - Scalability: Horizontally scalable based on how DynamoDB is architected
    - Flexibility: Schema is not strict like SQL
    - Query syntax is simpler: there's no need to utilize Joins, unions like in SQL
    - Document Store: we can store documents such as JSON
* Disadvantages of DynamoDB vs SQL
    - If you want to establish relationships between items in different tables, there is more of a manual programmatic process
        - SQL has the concept of foreign keys, which allow for items to be linked to another item in a different table
    - Because of the architecture of DynamoDB, there is the possibility of "hot" partitions, which basically is caused by data being accessed in one partition more than another one
        - Ex. Choosing the wrong thing to be your partition key
            - ex. Facebook posts
                - PK
                    - partition key: time_created
                    - sort key: username
                - If we have millions of posts, and users are more likely to read more recent posts, then the partitions for recent posts can get overloaded by being too "hot"
            - Solution: "sharding", aka adding a random string to the partition key
                - mar_01_2023-34y342sdrf
                - mar_01_2023-434kdfjfkj
                - Allows us to randomly distribute the data between all partitions
* Architecture of DynamoDB
    - Distributed, horizontal architecture: data in a single table is split separately into multiple servers, aka partitions
    - SQL: one server has many tables
    - DynamoDB: 1 table has many servers (partitions)
* S3
    - Misconception: 5 TB storage limit per bucket
    - S3 bucket: unlimited storage, 5 TB limit PER object
* Event Loop
    - Allows for Node.js to execute code asynchronously
    - Code running in Node.js runs on a single thread
        - Single thread -> implies we can only execute one line of code at a time (there is no simulataneously processing)
* Promises
    - Micro-tasks
    - A Promise is a promise that something will happen in the future
        - Promises are normally used with operations that take a long time to complete
        - 3 phases
            - pending phase
            - resolved phase
                - Successful completion of the operation the promise is associated wtih (DynamoDB request, HTTP request to another server, file reads, file writes, etc.)
                - When a promise resolves, it returns data to a callback function in the .then() clause (or await)
            - rejected phase
                - Unsuccessful completion of the operation the promise is associated with
                - When a promise rejects, it returns error data to a callback function in the .catch() clause (or catch block if using await)
            - const myPromise = new Promise((resolve, reject) => {
                            // ...
                            if (some error happens) {
                                reject(errorData);
                            } else {
                                resolve('my data');
                            }
                        });
                - myPromise.then(`(data) => {}`).catch(`(err) => {}`);
                - Inside of Async function...
                    - try { let myData = await myPromise; } catch(err) { }
            - pending -> resolved
            - pending -> rejected
* Async - await
    - A way to work with promises without using .then() and .catch()
    - Instead, we declare an async function, and if there are any promises that we are utilizing in that function, we can use await on that promise
    - Errors in the case that the promise gets rejected can be handled by using a try {} catch {} block inside the async function
    - Note: async functions will wrap any return value into a promise
    - async function myAsyncFunction() { return 5; }
        - console.log(myAsyncFunction()); // `<Promise>`
        - myAsyncFunction().then((data) => { console.log(data) })
        - async function myOtherAsyncFunction() { console.log(await myAsyncFunction()) }
* HTTP
    - Request
        - Request Headers
        - Request Body
        - Method/verb
        - URL/URI
    - Response
        - Status Code
        - Response Body
        - Response Headers
* Status Code
    - 1XX: informational
    - 2XX: success
        - 200 OK
        - 201 Created
        - 204 No Content
    - 3XX: redirects
    - 4XX: client-sided errors
        - Failed input validation (user is providing incorrectly formatted data as input), User is not logged in, User not providing correct username + password, user requesting resource but the ID doesn't exist in the database
            - This requires the programmer/developer to 
                1. write logic to check whether inputs are correct or not, etc.
                2. throwing errors if they do happen, 
                3. catching the errors in the route handlers, 
                4. and sending back an appropriate response
        - 400 Bad Request
        - 401 Unauthorized
        - 404 Not Found
    - 5XX: server-sided errors
        - If any error happens and you are not catching the error, then by default the server will either crash or "handle" the error and not crash, but send back a 500 Internal server error
* Error handling
    - put code that might throw an error into the try block
    - catch block: code that should execute when an error occurs from some code being executed in the try block
    - finally block: code that will execute regardless of whether an error occurred or not (guaranteed to run)
* Redux v. useState
    - Sometimes components need to share state with other components
        - Props: allows us to pass state from parent to child
        - Lifting state: allows us to lift state from child to parent
        - If we have components at different levels of hierarchies, siblings, it can get really complicated, really quickly
    - Redux is a tool for providing global storage for components
        - Store: an object that is the single source of truth for the global states (responsible for managing the state)
            - Reducers: functions that take the current state and an action as input, and returns a new state based on that action
            - States: current value of something that is meant to be shared among multiple components
                - When a state gets updated, all components that use that particular state will automatically re-render (useSelector hook)
                - useReducer
        - Dispatcher: receives actions and passes the action to the relevant store
            - We can dispatch actions from a component
    - Slices are not part of redux at a core level, it's just a convenient tool that allows us to utilize Redux more easily and efficiently
        - Comes from Redux Toolkit, which is a library that provides a set of conventions on how to utilize Redux
        - A slice represents a specific domain in our application, such as UserSlice for user information, CartSlice for cart information, etc.
        - A slice represents the state that we want to modify along with "reducers" defined to modify that state
            - Under the hood, the reducers that we define for a particular slice are aggregated into a single reducer that is "attached"/configured to the store itself
    - useState Hook
        - local state
        - useState returns an array with 2 elements
            - 1st element: current state
            - 2nd element: function
                - changes the state
                - re-renders the component
        - const [a, setA] = useState(`<initial value>`)
            - Cannot change a directly
            - a is immutable
            - The only way to change the state to something else is using the function
                - `setA(100)`
* React Components
    - Contains logic
    - Contains a view -> JSX
    - DOM Manipulation allows for the JSX to then be interpreted as HTML that ultimately gets rendered to the screen
    - Component Lifecycle
        1. Mounting: instantiation of the component and the initial rendering to the screen
            - Happens when we first visit the website or navigate to another route that displays different components
        2. Re-rendering: re-displaying what is shown on the screen with updated information (state)
            - When state that a component is using is updated
                - useState (local state)
                - useSelector (state in redux store)
                - ...
        3. Unmounting: de-rendering and destruction of a component
            - Happens when a component is no longer required to be displayed
                - Toggling from a button
                - Navigating to another route that no longer displays the component    
* Fetch API
    - Fetch is native to web browsers. We don't need to install any extra dependencies to make use of fetch
    - Fetch allows us to send HTTP requests to a server and receive an HTTP response
    - All we need to do is write some JS that gets executed in the browser that uses the `fetch()` function
    - Fetch has been around for web browsers for a very long time, but Node.js did not have fetch until Node.js v17.5
* Axios
    - Third-party library not natively part of web browsers or Node.js
    - We need to use `npm install axios` to then utilize Axios
    - Why use Axios over Fetch?
        - Axios automatically converts response data from JSON to a JavaScript object
            - Fetch
                ```javascript
                async function myAsyncFunction() {
                    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', { method: 'GET' });

                    const body = await res.json();
                    console.log(body);
                }
                ```
            - Axios
                ```javascript
                async function myAsyncFunction() {
                    const res = axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
                    console.log(res.data);
                }
                ```
        - Axios has a simpler and easier to use interface
            - Fetch
                - `fetch('https://pokeapi.co/api/v2/pokemon/ditto', { method: 'GET' })`
            - Axios
                - `axios.get('https://pokeapi.co/api/v2/pokemon/ditto');`
        - Can configure default information in requests
            - `axios.defaults.headers.common['Authorization'] = 'Bearer <token>'`
        - Can also use Axios interceptors to intercept any requests and add authorization headers, etc.

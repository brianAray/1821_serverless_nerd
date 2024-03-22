# ExpressJS Question Bank

## Level 1: Basic

1. What is Express JS, and how is it used in web development?
    <details>
    <summary>Answer</summary>
    Express JS is a web application framework for Node.js that provides features for building web applications, APIs, and server-side applications. It simplifies the process of creating web applications by providing a set of utilities for handling HTTP requests and responses, handling middleware, and routing requests to the appropriate handlers.
    </details><br>
2. What are the key features of Express JS?
    <details>
    <summary>Answer</summary>
    The key features of Express JS include a simple and minimalistic API, support for middleware to handle request processing, easy routing for handling different request paths, support for view engines to render HTML templates, and support for creating and consuming RESTful APIs.
    </details><br>
3. What is a middleware in Express JS, and how is it used?
    <details>
    <summary>Answer</summary>
    A middleware in Express JS is a function that receives the request and response objects and can modify them or invoke additional processing logic before passing control to the next middleware in the stack. Middleware functions can be used to handle common tasks such as logging, authentication, parsing request bodies, or error handling.
    </details><br>
4. What is routing in Express JS, and how is it used?
    <details>
    <summary>Answer</summary>
    Routing in Express JS is the process of mapping HTTP requests to specific handler functions that process the requests and generate a response. It allows developers to define routes for specific URLs or URL patterns and specify the logic to handle each request. Routing can be done using the app.get(), app.post(), app.put(), app.delete() and other methods provided by Express JS.
    </details><br>
5. What are the different HTTP methods supported by Express JS?
    <details>
    <summary>Answer</summary>
    The different HTTP methods supported by Express JS include GET, POST, PUT, DELETE, HEAD, OPTIONS, and PATCH.
    </details><br>

## Level 2: Intermediate

1. How can you handle errors in an Express JS application?
    <details>
    <summary>Answer</summary>
    Errors in an Express JS application can be handled by creating an error handling middleware that takes four arguments: the error object, the request object, the response object, and the next function. This middleware can catch errors thrown by other middleware functions and generate an appropriate error response, such as a 500 Internal Server Error.
    </details><br>
2. What is template rendering in Express JS, and how can it be used to generate dynamic HTML content?
    <details>
    <summary>Answer</summary>
    Template rendering in Express JS is the process of generating HTML content dynamically by combining data with a pre-defined template. It can be used to generate dynamic content for web applications such as user profile pages, product listings, or search results. Express JS supports several popular view engines for template rendering, including EJS, Pug, and Handlebars.
    </details><br>
3. What is the role of the app.use() method in Express JS, and how can it be used to handle middleware?
    <details>
    <summary>Answer</summary>
    The app.use() method in Express JS is used to add middleware functions to the middleware stack that handle incoming HTTP requests. This method can be used to add a single middleware function, an array of middleware functions, or a combination of both. Middleware added using app.use() is executed in the order in which it is added to the middleware stack.
    </details><br>
4. What is a query parameter in an HTTP request, and how can it be accessed in an Express JS application?
    <details>
    <summary>Answer</summary>
    A query parameter is a key-value pair that is appended to the end of a URL in an HTTP request. It can be used to pass additional information to the server or to filter the results of a request. Query parameters can be accessed in an Express JS application using the req.query object, which contains a JavaScript object with the key-value pairs of the query parameters.
    </details><br>
5. What is the difference between res.send() and res.json() methods in Express JS, and when should you use each?
    <details>
    <summary>Answer</summary>
    The res.send() method in Express JS is used to send a response to an HTTP request with any type of data. The data can be a string, a buffer, a JSON object, or any other type of data. The res.json() method, on the other hand, is specifically used to send a response in JSON format. It automatically sets the Content-Type header to application/json and serializes the data to a JSON string. You should use res.send() when sending non-JSON data or when you want to specify the content type explicitly, and use res.json() when sending JSON data.
    </details><br>

## Level 3: Advanced

1. What is middleware chaining in Express JS, and how can it be used to handle request processing logic?
    <details>
    <summary>Answer</summary>
    Middleware chaining in Express JS is the process of calling multiple middleware functions in a specific order to handle request processing logic. This is useful when you have a complex request processing pipeline that involves several steps, such as authentication, request validation, and data processing. Middleware functions can be chained together using the app.use() method or the router.use() method, with each middleware calling the next middleware using the next() function.
    </details><br>
2. What is the role of the next() function in Express JS middleware, and how can it be used to pass control to the next middleware in the stack?
    <details>
    <summary>Answer</summary>
    The next() function in Express JS middleware is used to pass control to the next middleware function in the middleware stack. It is called by the current middleware function when it has completed its processing and wants to hand over control to the next middleware function. The next() function can also be used to handle errors by passing an error object to the next middleware function, which can then generate an appropriate error response.
    </details><br>
3. What is the difference between app.get() and router.get() methods in Express JS, and when should you use each?
    <details>
    <summary>Answer</summary>
    The app.get() method in Express JS is used to define a route for an HTTP GET request on the main application object, while the router.get() method is used to define a route for an HTTP GET request on a router object. The main difference between the two is that the router.get() method defines a route on a specific router object, while the app.get() method defines a route on the main application object. You should use app.get() for defining application-level middleware or middleware that applies to all routes, while you should use router.get() for defining middleware that applies to a specific group of routes.
    </details><br>
4. How can you implement file uploads in an Express JS application, and what middleware can be used to handle file uploads?
    <details>
    <summary>Answer</summary>
    File uploads in Express JS can be implemented using the multer middleware, which is a popular middleware for handling file uploads. Multer can be used to handle multipart/form-data requests and save uploaded files to a specified destination folder. It can also be configured to filter file types and set size limits on uploaded files. To use multer, you need to install it using npm and add it to your Express JS application as middleware using app.use() or router.use().
    </details><br>
5. What is Express Router, and how can it be used to modularize an Express JS application?
    <details>
    <summary>Answer</summary>
    Express Router is a middleware in Express JS that provides a way to create modular and reusable sets of routes for an application. It can be used to group related routes together and encapsulate them in a separate module that can be used by other parts of the application. Express Router can be used by creating an instance of the Router object, defining the routes using the router.get(), router.post(), and other methods, and then adding the router to the main application using app.use(). This makes it easy to separate the concerns of different parts of the application and make the code more maintainable.
    </details><br>
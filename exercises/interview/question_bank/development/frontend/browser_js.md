# Browser JavaScript Question Bank

## Level 1: Basic

1. What is Browser JavaScript, and how is it used to create dynamic and interactive web pages?
    <details>
    <summary>Answer</summary>
    Browser JavaScript is a version of the JavaScript programming language that is used to create dynamic and interactive web pages. It is executed on the client side, in the user's web browser, and can be used to manipulate the Document Object Model (DOM), handle events, and make HTTP requests to a server.
    </details><br>
2. What is the DOM in JavaScript, and how is it used to manipulate the content and style of a web page?
    <details>
    <summary>Answer</summary>
    The Document Object Model (DOM) in JavaScript is a hierarchical tree structure that represents the content and style of a web page. It is used to manipulate the content and style of a web page, by providing a way to access and modify the elements of the DOM using JavaScript code. Developers can use the DOM to add or remove elements, change the style of elements, and respond to user events.
    </details><br>
3. What is an event in JavaScript, and how is it used to handle user interactions in a web page?
    <details>
    <summary>Answer</summary>
    An event in JavaScript is an action that is triggered by the user, such as clicking a button or scrolling the page. Events are used to handle user interactions in a web page, by providing a way to execute JavaScript code in response to an action. Developers can use the addEventListener() method to attach event handlers to DOM elements, and specify the code to be executed when the event is triggered.
    </details><br>
4. What is the difference between client-side JavaScript and server-side JavaScript?
    <details>
    <summary>Answer</summary>
    Client-side JavaScript is executed on the user's web browser, and is used to create dynamic and interactive web pages. It is responsible for manipulating the DOM, handling events, and making HTTP requests to a server. Server-side JavaScript, on the other hand, is executed on the server side, and is used to generate HTML pages dynamically, handle HTTP requests, and interact with databases or other server-side systems.
    </details><br>
5. What is the console in JavaScript, and how is it used to debug and test code in a web page?
    <details>
    <summary>Answer</summary>
    The console in JavaScript is a tool that is used to output debugging messages and test code in a web page. It is used to display messages, errors, and warnings, and provides a way to interact with the JavaScript environment in real time. Developers can use the console to inspect the contents of variables, test JavaScript code snippets, and diagnose problems in the code.
    </details><br>
6. What is an event listener in JavaScript, and how is it used to handle user interactions with a web page?
    <details>
    <summary>Answer</summary>
    An event listener in JavaScript is a function that is executed in response to an event, such as a click or a key press. It is used to handle user interactions with a web page by providing a way to execute JavaScript code in response to an action. Developers can use the addEventListener() method to attach event listeners to DOM elements and specify the code to be executed when the event is triggered.
    </details><br>
7. What is the Fetch API in JavaScript, and how is it used to make HTTP requests to a server?
    <details>
    <summary>Answer</summary>
    The Fetch API in JavaScript is a modern interface for making HTTP requests to a server. It provides a way to fetch resources from a server, such as HTML pages or JSON data, and to send data to a server using methods such as POST or PUT. The Fetch API is used to simplify the process of making HTTP requests in JavaScript, and to provide a more flexible and powerful interface for interacting with a server.
    </details><br>
8. How is a new element created in the DOM using JavaScript, and what are the basic steps required to add it to a web page?
    <details>
    <summary>Answer</summary>
    A new element can be created in the DOM using the document.createElement() method, which takes the name of the element as an argument. The new element can then be manipulated using other DOM methods, such as setting its attributes or adding child elements. To add the element to a web page, it must be appended to an existing element using the appendChild() or insertBefore() method.
    </details><br>
9. How are HTML elements selected in the DOM using JavaScript, and what are some of the methods that can be used to manipulate them?
    <details>
    <summary>Answer</summary>
    HTML elements can be selected in the DOM using the document.querySelector() or document.querySelectorAll() methods, which take a CSS selector as an argument. Once selected, the elements can be manipulated using a variety of DOM methods, such as setting their attributes, modifying their content, or adding child elements using the createElement() method and the appendChild() method.
    </details><br>
10. What is the innerHTML property in the DOM, and how is it used to modify the content of an element?
    <details>
    <summary>Answer</summary>
    The innerHTML property in the DOM is used to get or set the HTML content of an element. It is often used to modify the content of an existing element, by setting its innerHTML property to a new value. This can be done using a JavaScript variable or a template string, and can include HTML tags and attributes.
    </details><br>

## Level 2: Intermediate

1. What is the difference between the window object and the document object in JavaScript, and how are they used in a web page?
    <details>
    <summary>Answer</summary>
    The window object in JavaScript represents the current browser window or tab, and provides a way to interact with the browser's environment. It is used to access and modify the browser's properties, such as the location and size of the window, or the history of visited pages. The document object, on the other hand, represents the HTML document that is currently displayed in the browser, and provides a way to manipulate the DOM and its elements using JavaScript code.
    </details><br>
2. What is the difference between synchronous and asynchronous code in JavaScript, and how are they used in a web page?
    <details>
    <summary>Answer</summary>
    Synchronous code in JavaScript is executed in a blocking manner, which means that the program cannot continue until the code has finished executing. Asynchronous code, on the other hand, is executed in a non-blocking manner, which means that the program can continue to execute while the asynchronous operation is being performed. Asynchronous code is often used in a web page to perform tasks that may take some time to complete, such as making HTTP requests or loading resources, without blocking the user's interaction with the page.
    </details><br>
3. What is the difference between localStorage and sessionStorage in JavaScript, and how are they used to store data in a web page?
    <details>
    <summary>Answer</summary>
    localStorage and sessionStorage in JavaScript are two methods that are used to store data in a web page, without the need for a server. localStorage is used to store data permanently, and is accessible across all browser tabs and windows, while sessionStorage is used to store data temporarily, and is accessible only within the same tab or window. Both methods use the key-value pair approach to store data, and have a limited amount of storage space, depending on the browser and the user's settings.
    </details><br>
4. What is the difference between a cookie and a web storage in JavaScript, and how are they used to store data in a web page?
    <details>
    <summary>Answer</summary>
    Cookies and web storage in JavaScript are two methods that are used to store data in a web page, without the need for a server. Cookies are small text files that are stored on the user's computer, and are used to store user-specific data, such as login credentials or shopping cart contents. Web storage, on the other hand, is a method that is used to store data directly in the user's browser, using the localStorage and sessionStorage methods. Web storage is often used to store user preferences, such as language or theme preferences, or to cache data for faster page loading.
    </details><br>
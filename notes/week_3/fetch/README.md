# Fetch API

JavaScript can send network requests to the server and load new information when it is needed using Fetch. There is a term "AJAX" (Asynchronous JavaScript And XML) for network requests from JavaScript but we do not use it here, but the term comes from when it was more popular.

The basic syntax is as follows:

```javascript
let promise = fetch(url, options);
```
- `url` - the URL to access
- `options` - optional parameters: methods, headers, etc.

By default, fetch uses the GET request and downloads the contents of the url.
When you receive a response from fetch, there is a two stage process when working with the data. First it must be resolved as an object of the built in `Response` class as soon as the server responds with headers.
We can use this to check the status of the request, to see whether it is successful or not, the same with headers.
The promise rejects if the fetch was unable to make HTTP requests. Status codes like 404 or 500 do not cause an error.

```javascript
let response = await fetch(url);

if (response.ok){ // if HTTP-status is 200 - 299
    // get the resopnse body
    let json = await response.json();
}else{
    alert("HTTP-Error: " + response.status);
}
```

To get the response body, we need to use an additional method call with the Response object methods.
- `response.text()` - reads the response and return as text
- `response.json()` - parse the response as JSON
- `response.formData()` - parse the response as FormData object
- `response.blob()` - return the response as Blob (binary data with type)
- `response.arrayBuffer()` - return the response as ArrayBuffer

```javascript
let response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
let json = await response.json();
alert(json);
```

## POST Requests

If you want to send data within a fetch request, you must provide options in the fetch call. In this example, we are submitting JSON data to an endpoint:

```javascript
let user = {
    name: "Mike",
    surname: "Jones"
};

let response = await fetch('http://localhost:3000/person', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user);
});

let result = await response.json();

alert(result);
```
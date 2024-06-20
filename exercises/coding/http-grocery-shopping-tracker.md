# HTTP Grocery Shopping Tracker
The console-based Grocery Shopping Tracker is no more! Modern backend applications don't use the console, but instead mostly utilize HTTP communication for interaction. This new version of the grocery shopping tracker is an HTTP server that will process HTTP requests for the following operations: adding a grocery item (name, quantity, price) to a list, viewing all items in the list, saving the list to a file, and reading from a file to a list.

> You will need to use Node's built-in http module to setup a server and have it perform the below operations depending on the matching request method + endpoint URL
1. POST /grocery: add item
2. GET /grocery: view all items
3. POST /grocery/save: save items to file
4. POST /grocery/load: load items from file

Hint: you can use the approach of segmenting the code into requestHandler, getHandler, postHandler, etc. Another approach would be doing simple if, else-if, else
```javascript
if (req.url === '/grocery' && req.method === 'POST') {

} else if (req.url === '/grocery' && req.method === 'GET') {

} else if (req.url === '/grocery/save' && req.method === 'POST') {

} else if (req.url === '/grocery/load' && req.method === 'POST') {

} else {

}
```

## Endpoint Requirements

**Endpoint 1: Adding a Grocery Item**
---

Request:
- Request Method: POST
- Endpoint URL: /grocery
- Request Body:
    ```json
        {
            "name": "salt",
            "quantity": 12,
            "price": 1.56
        }
    ```
- Request Header(s):
    ```
    Content-Type: application/json
    ```
Response:
- Status Code: 201 (Created)
- Response Body: None

---

**Endpoint 2: Viewing All Items in the List**
---

Request:
- Request Method: GET
- Endpoint URL: /grocery
- Request Body: None

Response:
- Status Code: 200 (OK)
- Response Body
    ```json
    [
        {
            "name": "salt",
            "quantity": 12,
            "price": 1.56
        },
        {
            "name": "pepper",
            "quantity": 3,
            "price": 1.25
        }
    ]
    ```
- Response Header(s)
    ```
    Content-Type: application/json

---

**Endpoint 3: Saving list to a file**
---

Request:
- Request Method: POST
- Endpoint URL: /grocery/save
- Request Body: None

Response:
- Status Code: 200 (OK)
- Response Body: None

---

**Endpoint 4: Reading from a file to a list**
---

Request:
- Request Method: POST
- Endpoint URL: /grocery/load
- Request Body: None

Response:
- Status Code: 200 (OK)
- Response Body: None

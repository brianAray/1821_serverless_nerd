# Basic API

This activity involves using the Node.js `http` module, to create a basic API based on the grocery shopping tracker. Interactions between the client and the server will be managed using Postman, and HTTP requests. The user should be able to view, create, edit, and delete grocery items on the server.
You can try to work with path parameters or query parameters as an optional aspect, but that process does not come easy with the node http module.
The focus with this activity is building out a server, employing http, and logging your server activities.

## Requirements

- Node.js http module server
- Logging with Winston
- As a client, you must be able to:
    - View the grocery list
        - GET
    - Add an Item
        - POST
    - Edit an Item
        - PUT
    - Delete an Item
        - DELETE
- The Item
    - Name
    - Price
    - Quantity
    - Purchased
- HTTP Methods and Status Codes must be used
- Any data that is transferred must be in JSON format
- Use Postman to handle testing your API

You do not need to handle authentication, persisting of the data, or a frontend. Verify the behavior of the API using Postman and JSON messages from the server as responses.

## Useful Resources

- [Winston Tutorial](https://stackify.com/winston-logging-tutorial/)
- [Node HTTP](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction)
- [Postman Guide](https://learning.postman.com/docs/getting-started/overview/)

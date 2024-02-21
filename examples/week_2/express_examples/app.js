const express = require("express");
const logger = require("./util/Logger");
const app = express();
const PORT = 3000;

/**
 * Middleware are functions that can be used to process and modify http requests and responses
 * They are used to perform repetitive tasks like logging, authentication, data validation, and anything before the final route handler is executed
 *
 *
 * function middlware(req, res, next) {
 *  // perform a operation on req and res objects
 *  // call next() to pass control to the next middleware or route handler
 *
 *  next()
 * }
 */

app.use((req, res, next) => {
  logger.info(`Incoming ${req.method} : ${req.url}`);
  next();
});

// body parser middleware
app.use(express.json()); // lets you parse incoming JSON data from requests as a middleware function
// The middleware function automatically parses JSON request bodies and makes the data available in a req.body object

app.use(express.urlencoded()); // this lets you parse URL-encoded form data from incoming requests
// data from HTML forms

// import the router
const itemRouter = require("./routes/ItemRoutes");

// Use the router with a base URL
app.use("/items", itemRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

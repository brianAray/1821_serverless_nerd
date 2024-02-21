const express = require("express");
const app = express();
const itemRouter = require("./controller/ItemRouter");

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`Incoming ${req.method} : ${req.url}`);
  next();
});

const logger = require("./util/logger");

const PORT = 3000;

app.use("/items", itemRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

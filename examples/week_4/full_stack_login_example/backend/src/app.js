const express = require("express");
const app = express();
const PORT = 4000;

const userController = require("./controller/userController");

app.use(express.json());

app.use("/user", userController);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

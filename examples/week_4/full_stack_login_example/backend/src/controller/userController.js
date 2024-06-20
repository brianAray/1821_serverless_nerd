const express = require("express");
const router = express.Router();
const userService = require("../service/userService");

// localhost:3000/items

router.get("/", (req, res) => {
  res.send("This is the root user route");
});

// login route
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await userService.loginUser(username, password);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }

});

module.exports = router;

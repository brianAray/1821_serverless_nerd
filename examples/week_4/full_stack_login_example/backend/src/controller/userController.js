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
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }

  //   res.status(200).json({ username, password });
});

// router.post("/", validateItemMiddleware, (req, res) => {
//   const jsonData = req.body;
//   console.log(jsonData);
//   res.status(201).json({ message: "Data Received!" });
// });

// function validateItemMiddleware(req, res, next) {
//   // check if there is a valid name and price
//   let jsonBody = req.body;
//   if(validateItem(jsonBody)){
//     next();
//   }else{
//     res.status(400).json({
//       message: `Invalid Name or Price: ${jsonBody.name} - ${jsonBody.price}`,
//     });
//   }
// }

// function validateItem(data){
//     if(!data.name || !data.price){
//         return false;
//     }else{
//         return true;
//     }
// }

module.exports = router;

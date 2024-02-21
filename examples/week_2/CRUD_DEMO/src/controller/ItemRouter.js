// endpoint: /items
// CRUD
const express = require("express");
const router = express.Router();

const itemService = require("../service/ItemService");

// reading
router.get("/", async (req, res) => {
    const nameQuery = req.query.name;
  if (nameQuery) {
    const item = await itemService.getItemByName(nameQuery);
    res.status(200).json({message: `Got item by name ${nameQuery}`, item});
  }
  const items = await itemService.getAllItems();
  res.status(200).json({ message: "Got all items", items });
});

// create
router.post("/", async (req, res) => {
  const data = await itemService.postItem(req.body);
  if (data) {
    res.status(201).json({ message: "Created Item", data });
  } else {
    res
      .status(400)
      .json({ message: "Was not created", receivedData: req.body });
  }
});

module.exports = router;

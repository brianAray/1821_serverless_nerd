const itemDao = require("../repository/ItemDAO");
const uuid = require("uuid");

async function getAllItems() {
  const items = await itemDao.getAllItems();
  return items;
}

async function getItemByName(name){
    const item = await itemDao.getItemByName(name);
    return item;
}

async function postItem(receivedData) {
  if (validateItem(receivedData)) {
    let data = await itemDao.postItem({
      item_id: uuid.v4(),
      name: receivedData.name,
      price: receivedData.price,
    });
    return data;
  }

  return null;
}

function validateItem(receivedData) {
  if (!receivedData.name || !receivedData.price) {
    return false;
  }
  return true;
}

module.exports = {
  getAllItems,
  postItem,
  getItemByName
};

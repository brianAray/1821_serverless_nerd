const { logger } = require("./util/logger");

const shoppingList = [];

function addItem(name, price) {
  const newItem = {
    name,
    price: parseFloat(price).toFixed(2),
    purchased: false,
  };
  shoppingList.push(newItem);
  logger.info(`Added item: ${newItem.name}`);
  return `"${name} has been added to the shopping list!`;
}

function togglePurchased(index) {
  if (index >= 0 && index < shoppingList.length) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    logger.info(
      `Toggle Purchased: ${shoppingList[index].name}: ${shoppingList[index].purchased}`
    );
    return `Toggle purchase status of ${shoppingList[index].name}`;
  } else {
    logger.error(`Failed toggled purchase: Index - ${index}`);
    return "Invalid Item Index";
  }
}

function removeItem(index) {
  if (index >= 0 && index < shoppingList.length) {
    const removedItem = shoppingList.splice(index, 1);
    logger.info(`Removed Item: ${removedItem[0].name}`);
    return `${removedItem[0].name} has been removed`;
  } else {
    logger.error(`Failed remove item: Index - ${index}`);
    return "Invalid Item Index";
  }
}

function calculateTotalCost() {
  const totalCost = shoppingList.reduce(
    (sum, item) => sum + (item.purchased ? item.price : 0),
    0
  );
  logger.info(`Calculating total cost: Total Cost $${totalCost}`);
  return totalCost;
}

module.exports = {
  shoppingList,
  addItem,
  togglePurchased,
  removeItem,
  calculateTotalCost,
};

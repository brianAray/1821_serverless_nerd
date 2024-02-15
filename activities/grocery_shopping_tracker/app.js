// Import the readline module for handling user input to the console
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// define an array to store shopping list items
const shoppingList = [];

// function to add an item to the shopping list
function addItem() {
  // prompt the user to enter the name of the item
  rl.question(`Enter the name of the item: `, (itemName) => {
    itemName.trim();

    // check to see if it is empty
    if (!itemName) {
      console.log("Please enter a valid item name");
      return addItem();
    }

    // prompting the user to enter the price for the item
    rl.question(`Enter the price for ${itemName}`, (priceInput) => {
      // If the input is invalid, we will default to 0
      const price = parseFloat(priceInput) || 0;

      // create a new shopping list item object with name, price, and a default purchase of false
      const newItem = {
        name: itemName,
        price: price.toFixed(2), // format price to two decimal places
        purchased: false,
      };

      shoppingList.push(newItem);

      console.log(`${itemName} has been added to the shopping list`);
      //   console.log(shoppingList);
      displayShoppingList();
    });
  });
}

function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;

  displayShoppingList();
}

function removeItem(index) {
  const removedItem = shoppingList.splice(index, 1);
  console.log(`${removedItem[0].name} has been removed from the shopping list`);
  displayShoppingList();
}

function calculateTotalCost() {
  const totalCost = shoppingList.reduce(
    (sum, item) => sum + (item.purchased ? parseFloat(item.price) : 0),
    0
  );

  return totalCost.toFixed(2);
}

function displayShoppingList() {
  console.log("\nShopping List: ");
  shoppingList.forEach((item, index) => {
    const status = item.purchased ? " (Purchased) " : "";
    console.log(`${index + 1}. ${item.name} ($${item.price}) ${status}`);
  });

  console.log(`\nTotal Cost: ${calculateTotalCost()}\n`);

  rl.question(
    "Options: (1) Add Item, (2) Toggle Purchased, (3) Remove Item, (4) Quit \nChoose an option(1/2/3/4)",
    (choice) => {
      switch (choice) {
        case "1":
          addItem();
          break;
        case "2":
          rl.question(
            "Enter the number of the item to toggle",
            (itemNumber) => {
              const index = parseInt(itemNumber) - 1;
              if (index >= 0 && index < shoppingList.length) {
                togglePurchased(index);
              } else {
                console.log("Invalid Item Number");
                displayShoppingList();
              }
            }
          );
          break;
        case "3":
          rl.question(
            "Enter the number of the item to remove",
            (itemNumber) => {
              const index = parseInt(itemNumber) - 1;
              if (index >= 0 && index < shoppingList.length) {
                removeItem(index);
              } else {
                console.log("Invalid Item Number");
                displayShoppingList();
              }
            }
          );
          break;
        case "4":
          console.log("Goodbye!");
          rl.close();
          break;
        default:
          console.log(`Invalid choice, please choose a valid option!`);
          displayShoppingList();
          break;
      }
    }
  );
}

// addItem();
displayShoppingList();

# Grocery Shopping Tracker

Create a Node.js application that is used to track grocery a grocery shopping list. This will be a console application that will display a grocery list created by the user. The user must be able to add an item to the list, the quantity, and the price of the item. Each item should also track whether or not it has been bought. The user should be able to remove items from the list when needed.

## Requirements

- Console Application
- Display grocery list
- Add items to grocery list
    - Array of Items Objects
    - Item
        - Name
            - String
        - Quantity
            - Number
        - Price
            - Number
        - Bought
            - Boolean
- Remove items from the grocery list
- Set whether the item has been bought or not


## Starter Code

This starter code will be needed in order to read from the console.

For more information on how to use the `readline`:

- https://nodejs.org/api/readline.html

```javascript
// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

rl.on('line', (line) => {
    console.log(line);
});

rl.once('close', () => {
     // end of input
     console.log("Goodbye");
 });
```

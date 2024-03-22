# Grocery Shopping Tracker DAO
We are working on a component of the Grocery Shopping Tracker known as the "DAO" (data access object). DAO is essentially a design pattern for segregating the logic for database interaction from the rest of the application. We will later use the DAO layer in conjunction with our HTTP logic in order to perform the various CRUD operations through HTTP requests.

## Table schema
The grocery_items table should be used to contain items with the following attributes
- grocery_item_id (partition key)
- name
- quantity
- price
- category

Example:
```json
{
    "grocery_item_id": "abc123",
    "name": "salt",
    "quantity": 2,
    "price": 1.57,
    "category": "condiment"
}
```

And the following global secondary index:
- category-index
    - category (partition key)

## Activity
In this exercise, create a DAO layer file, `grocery-item-dao.js`, that will support operations for adding, retrieving, updating, and deleting items from the DynamoDB table, `grocery_items`. You will need to create a grocery_items table if you have not already. The DAO layer should contain the following functions:
- `addGroceryItem(grocery_item_id, name, quantity, price, category)`
    - Adds a new item to the grocery_items table with the given grocery_item_id, name, quantity, price, and category
    - You may also choose to have the id automatically generated instead using, for example, the `uuid` npm package
- `retrieveAllGroceryItems()`
    - Retrieves all grocery items from the table
    - You can utilize `scan` for this
- `retrieveGroceryItemById(grocery_item_id)`
    - Retrieves a grocery item with the given grocery_item_id
- `retrieveGroceryItemsByCategory(category)`
    - Retrieves all grocery items belonging to the given category (ex. meat)
- `updateGroceryNameById(grocery_item_id, newName)`
    - Update the name of a grocery item with the given grocery_item_id
- `updateGroceryQuantityById(grocery_item_id, newQuantity)`
    - Update the quantity of a grocery item with the given grocery_item_id
- `updateGroceryPriceById(grocery_item_id, newPrice)`
    - Update the price of a grocery item with the given grocery_item_id
- `updateGroceryCategoryById(grocery_item_id, newCategory)`
    - Update the category of a grocery item with the given grocery_item_id
- `deleteGroceryItemById(grocery_item_id)`
    - Delete a grocery item with the given grocery_item_id

**MAKE SURE TO MANUALLY TEST EACH FUNCTION BEFORE MOVING ONTO THE NEXT!!**

Example:
```javascript
function retrieveGroceryItemById(grocery_item_id) {
    const params = {
        TableName: 'grocery_items',
        Key: {
            grocery_item_id: grocery_item_id
        }
    }

    return docClient.get(params).promise();
}

// Write other functions here
// ...

// How to test your dao functions??
retrieveGroceryItemById("10").then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
})
```

# Grocery Shopping Tracker API
Taking what you have implemented for the DAO [here](./dao-grocery-shopping-tracker-dao.md), you can now create a full-fledged HTTP-based API!

Define and support the following HTTP endpoints:
- POST `/items`: add a grocery item
- GET `/items`: retrieve all grocery items
- GET `/items/{id}`: retrieve a specific grocery item
- GET `/items?category=...`: retrieve grocery items based on the category they belong to
- PATCH `/items/{id}/name`: update the name of a specific grocery item
- PATCH `/items/{id}/quantity`: update the quantity of a specific grocery item
- PATCH `/items/{id}/price`: update the price of a specific grocery item
- PATCH `/items/{id}/category`: update the category of a specific grocery item
- DELETE `/items{id}`: delete a specific grocery item

You can use the DAO layer functions (remember to export them using `module.exports` and `require()` to import them) in the DAO exercise.

**Use Postman to test out each endpoint individually before moving onto implementing the next endpoint!**
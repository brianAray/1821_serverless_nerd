// JSON
// JSON (JavaScript Object Notation) is a lightweight data interchange format
// THat is both human readable and machine parseable
// JSON is often used to transmit data between a server and a web application

/*
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "programming"],
  "address": {
    "street": "123 Main St",
    "city": "Exampleville"
  }
}
*/


// JavaScript Methods for JSON
// JSON.stringify(obj) converts an JS object to a JSON string
// JSON.parse(jsonObj) parses a JSON string and converts it to a JS object

const data = {
    name: "Alice",
    age: 25
}

const jsonString = JSON.stringify(data);
console.log(jsonString);

const parsedData = JSON.parse(jsonString);
console.log(parsedData);


// Use Cases:
/*
    Web APIs often return data in a JSON format
    Configuration files for web applications
    Data Storage in NoSQL databases MongoDB
    Serialization of data for interprocess communication
*/
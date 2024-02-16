const http = require("http");
const { shoppingList, addItem, togglePurchased, removeItem, calculateTotalCost} = require("./shoppingListFunctions");
const port = 3000;

const server = http.createServer((req, res) => {
  let body = "";

  req
    .on("data", (chunk) => {
      body += chunk;
    })
    .on("end", () => {
      body = body.length > 0 ? JSON.parse(body) : {};

      const contentType = { "Content-Type": "application/json" };

      if (req.url.startsWith("/items")) {
        let index = parseInt(req.url.split("/")[2]);

        switch (req.method) {
          case "POST":
            // console.log("POST REQUEST");
            const { name, price } = body;
            if (!name || !price) {
              res.writeHead(400, contentType);
              res.end(
                JSON.stringify({
                  message: "Please provide valid names or prices",
                })
              );
            } else {
              const message = addItem(name, price);
              res.writeHead(201, contentType);
              res.end(JSON.stringify({ message, shoppingList }));
            }
            break;
          case "PUT":
            const putMessage = togglePurchased(index);
            res.writeHead(200, contentType);
            res.end(JSON.stringify({putMessage, shoppingList}));
            break;
          case "DELETE":
            const deleteMessage = removeItem(index);
            res.writeHead(200, contentType);
            res.end(JSON.stringify({deleteMessage, shoppingList}));
            break;
          case "GET":
            res.writeHead(200, contentType);
            res.end(JSON.stringify({shoppingList, totalCost: calculateTotalCost()}));
            break;
          default:
            res.writeHead(404, contentType);
            res.end(JSON.stringify({message: "Invalid Endpoint"}))
            break;
        }
      } else {
        res.writeHead(404, contentType);
        res.end(JSON.stringify({message: "Invalid Endpoint"}))
      }
    });
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

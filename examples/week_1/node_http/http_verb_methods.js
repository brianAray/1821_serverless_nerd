const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/data") {
    // GET ENDPOINT
    res.writeHead(200, { "Content-Type": "application/json" });
    let data = { message: "This is GET data" };
    res.end(JSON.stringify(data));
  } else if (req.method === "POST" && req.url === "/api/create") {
    // POST ENDPOINT
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      // this is where you would save the data
      console.log(data);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Resource Created Successfully!" }));
    });
  } else if (req.method === "PUT" && req.url === "/api/update") {
    // PUT ENDPOINT
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      // this is where you would update the data based on the body received
      // or you could check the url to see what the id of the object is to update
      console.log(data);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Resource updated Successfully!" }));
    });
  } else if (req.method === "DELETE" && req.url === "/api/delete") {
    // DELETE ENDPOINT
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Resource deleted Successfully!" }));
  } else {
    // Not matching any endpoints
    res.writeHead(404, { "Content-Type": "application/json" });
    let data = { error: "Not Found" };
    res.end(JSON.stringify(data));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

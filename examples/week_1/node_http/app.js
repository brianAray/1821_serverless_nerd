const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // request handling logic
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<html><body><h1>Hello, World!</h1></body></html>");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

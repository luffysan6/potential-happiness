const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World From http.CreateServer Backend");
  } else if (req.url === "/api/save") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Data saved successfully");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api/value") {
    return res.end(JSON.stringify({ value: 7 }));
  }

  res.statusCode(404).end();
});

server.listen(3001);

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStreem = fs.createReadStream(__dirname + "/demo.txt", "utf8");
  myReadStreem.pipe(res);
});

server.listen(3000);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello world");
    res.write("Hello How are You");
    res.write("Hello world");
    res.end();
  }
  if (req.url == "/about") {
    res.write("I am a Programmer");
    res.end();
  } else {
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(3000);

server.on("connection", () => {
  console.log("New Connection");
});

console.log("listining on port 3000");

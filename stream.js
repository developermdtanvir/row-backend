const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<html><head><title></title></head></html>`);
    res.write(
      `<body><form method="post" action="/process"><input name="message" /></form></body>`
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("strime finished");
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });
    res.write("Thanks Submitting ");
    res.end();
  }
});

server.listen(3000);

// const fs = require("fs");

// const ourReadStream = fs.createReadStream(`${__dirname}/demo.txt`, `utf8`);

// ourReadStream.on("data", (data) => {
//   console.log(data);
// });

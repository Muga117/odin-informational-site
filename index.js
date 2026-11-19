const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  let filename = "";

  if (request.url === "/") {
    filename = "index.html";
  } else if (request.url === "/about") {
    filename = "about.html";
  } else if (request.url === "/contact-me") {
    filename = "contact-me.html";
  } else {
    filename = "404.html";
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      response.writeHead(500, { "content-type": "text/plain" });
      response.end("");
      return;
    } else {
      response.writeHead(filename === "404.html" ? 404 : 200, {
        "content-type": "text/html",
      });
      response.end(data);
    }
  });
});

server.listen(8080);

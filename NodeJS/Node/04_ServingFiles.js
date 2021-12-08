/* Serving files as per user's need: The most important task of a backend */

const http = require("http");
const fs = require("fs");

const fileContent = fs.readFileSync("index.html", "utf-8");

console.log(fileContent);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  //Used to serve the data
  res.end(fileContent);
});

server.listen(80, "127.0.0.1", () => {
  console.log("Listening on port 80");
});

/* 
Right now only the home page is visible. Multiple routes are not present since we have only created the server.

Benefits of port 80: You don't have to explicitly mention the port number when using this port.
*/

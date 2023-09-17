//create server using node js

//1. import http library or module
const http = require("http");

//2. create server
const server = http.createServer((req, res) => {
  //here comes the reques

  res.end("welcome to node js ninja server");
});

//3. specify a port to listen client's request
server.listen(3100, () => {
  console.log("server is listening on port 3100");
});

// console.log("server is listening on port 3100");

//creating server using node js

//1. import http module
const http = require("http");
//import fs module
const fs = require("fs");
//2. create server
const server = http.createServer((req, res) => {
  //read html file
  const data = fs.readFileSync("index.html").toString();

  res.end(data);
});

//3. specify a port to listen client's request
server.listen(3200, () => console.log("server is listening in port 3200"));

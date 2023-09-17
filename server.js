//create server using node js

//1. import http library or module
const http = require("http");

//2. create server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("welcome to my application");
  if (req.url == "/product") {
    //response ends
    res.end("this is product page :");
  } else if (req.url == "/user") {
    res.end("this is user page :");
  }
  //logging
});

//3. specify a port to listen client's request
server.listen(3100, () => {
  console.log("server is listening on port 3100");
});

// console.log("server is listening on port 3100");

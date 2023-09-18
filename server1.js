const http = require("http");
const server = http.createServer((req, res) => {
  res.write("this is coming from node js server");
  if (req.url == "/first") {
    return res.end("this is first response :");
  }
  res.end("this is default responseX");
});
server.listen(3200, (req, res) => {
  console.log("Server is listening at 3200");
});

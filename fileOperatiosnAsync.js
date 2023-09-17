//1. import module
const fs = require("fs");

//reading data
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//write data
fs.writeFile("employee.txt", "new employee", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file is written");
});

//append data
fs.appendFile("employee.txt", "\n another employee", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file is written");
});

//delete file
fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file is deleted");
});
console.log("there is another application running");

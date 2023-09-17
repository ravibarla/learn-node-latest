//1. import module
const fs = require("fs");
const path = require("path");
//reading data
const filePath = path.join("src", "home", "data.txt");

const absoluteFilePath = path.resolve("src", "home", "data.txt");
console.log(filePath);
console.log(absoluteFilePath);
console.log(path.extname(absoluteFilePath));
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//write data
// fs.writeFile("employee.txt", "new employee", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file is written");
// });

// //append data
// fs.appendFile("employee.txt", "\n another employee", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file is written");
// });

// //delete file
// fs.unlink("employee.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file is deleted");
// });
// console.log("there is another application running");

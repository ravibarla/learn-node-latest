const fs = require("fs");

//read file content

// console.log("starting to read");
// const buffer = fs.readFileSync("./data.txt", { encoding: "utf-8" });
// console.log(buffer);

//1. create and writing file
try {
  fs.writeFileSync("employee.txt", "name :akash,age :40,position :manager");
} catch (e) {
  console.log(e);
}
//2, append another employee data
fs.appendFileSync("employee.txt", "name :deep,age :55,position :CEO");

//3. deleting file
try {
  fs.unlinkSync("employee.txt");
} catch (e) {
  console.log("file does not exist");
}
console.log("another operation being performed");

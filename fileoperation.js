const fs = require("fs");

//read file content

console.log("starting to read");
const buffer = fs.readFileSync("./data.txt");
console.log(buffer.toString());

console.log("another operation being performed");

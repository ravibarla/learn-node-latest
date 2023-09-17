const fs = require("fs");

//read file content

console.log("starting to read");
const buffer = fs.readFileSync("./data.txt", { encoding: "utf-8" });
console.log(buffer);

console.log("another operation being performed");

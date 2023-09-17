//1. import read line
const readline = require("readline");

//2. configure interface to connect with terminal or command line
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//3. read vales
interface.question("Enter first number", (num1) => {
  interface.question("Please enter second number", (num2) => {
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  });
});

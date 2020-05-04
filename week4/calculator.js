const readline = require("readline-sync");

var fNumber = readline.questionInt('Please enter first number:');
var sNumber = readline.questionInt("Please enter second number:");
var selectedOperation = readline.question("operation to perform? add/sub/mul/div/quit:");

function add(num1, num2) {
    return "Adding Number1:" + num1 + "with Number2:" + num2 + "results in:" + (num1 + num2);
}

function multiply(num1, num2) {
    return "Adding Number1:" + num1 + "with Number2:" + num2 + "results in:" + (num1 * num2);
}

function subtract(num1, num2) {
    return "Adding Number1:" + num1 + "with Number2:" + num2 + "results in:" + (num1 - num2);
}

function divide(num1, num2) {
    return "Adding Number1:" + num1 + "with Number2:" + num2 + "results in:" + (num1 / num2);
};

if(selectedOperation =="add"){
    //ADDITION
    console.log(add(fNumber, sNumber));
}else if (selectedOperation == "sub"){
    //SUBTRACTION
    console.log(subtract(fNumber, sNumber))
    
}else if (selectedOperation == "mul"){
    //MULTIPLICATION
    console.log(multiply(fNumber, sNumber))
}else if (selectedOperation == "div"){
    //DIVISION
    console.log(divide(fNumber, sNumber))
}else if (selectedOperation == "quit"){
    //QUIT
}

var i = "sumOfNumbers"
for (i = 0; i < 10; i++){
     
}
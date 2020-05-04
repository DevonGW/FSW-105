var hello = "Hello";
var helloWorld = "Hello World";

function CapitalAndLowercase(str) {
    return str.toUpperCase() + str.toLowerCase();
}

console.log(CapitalAndLowercase(hello));

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
var hello = "devonwashd"

console.log(Math.floor(hello.length/2))

//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is 
//lower cased. (If the string length is odd, capitalize the shorter of the first half.

function firstHalf(str){
    var half = Math.floor(hello.length/2);
    var firstHalf =str.slice(0,half);
    return firstHalf;
}

console.log(firstHalf(hello));
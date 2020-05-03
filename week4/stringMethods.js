var hello = "Hello";
var helloWorld = "Hello World";

function CapitalAndLowercase(str) {
    return str.toUpperCase() + str.toLowerCase();
}

console.log(CapitalAndLowercase(hello));

function helloWorld(str){
    return str
}

console.log(Math.floor(hello.length/2))

function firstHalf(str){
    var half = Math.floor(hello.length/2);
    var firstHalf =str.slice(0,half);
    return firstHalf;
}

console.log(firstHalf(hello));
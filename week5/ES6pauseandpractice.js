//const name, age =
[name, age] = ["John", 101];


function runForLoop(pets){
    const petObjects = []
    for(let i =0; i< pets.length; i++){
        let pet={ type: pets[i]}
    name;
    if(pets[i] ==="cat"){
        name="fluffy"
    }else{
        name = "spot"
    }
    console.log("pet name:", name)
    pet.name = name
    petObjects.push(pet)
}
console.log("man name:", name)
return petObjects
}

runForLoop(["cat", "dog"])

//2 2) Re-write this .map() using an arrow function:
//Be aware that if JavaScript sees a { directly after the => 
//it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.


const carrots = ["bright orange", "ripe", "rotten"];

carrots.map(carrot => {
    return carrots.length})
    
    console.log(carrots)
//3 

let people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true,
    },
    {
        name: "Mario",
        friendly: true,
    },
    {
        name: "Bowser",
        friendly: false,
    }

];

people.filter(mario =>{
    return people.freindly
});

console.log(people.length)



// 4) Re Write the following function to be arrow function:

  doMathSum=(a, b) => { 
    return a + b
}

console.log(doMathSum(12, 6));

let produceProduct = (a, b) => {
    return a * b
}

console.log(10 * 10)

// 5) Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:


printString =(firstName ="jane", lastName ="doe", ages =100) =>{

    if ( firstName){
        return "Hi"+ firstName+lastName + "how does it feel to be" + ages
    }
}

console.log (printString())

//Use template literals to build the string from #5

let firstName = "Jane";
let lastName = "Doe";
let ages1 = 100;

console.log("Hello" + firstName+lastName +
"how does it feel to be"+ ages1)

// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

// let [type, names] = ["dog", "theodore"] ["cat", "whiskers"] ["pig","piglette"] ["dog", "sparky"];

// function filterForDogs(obj){
//     if(type == "dog"){
//         return type + name
//     }}
//     console.log(filterForDogs())


//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5){
            return num;
        }
    });
    return result;
}
console.log("Output from Requirement #1:" + fiveAndGreaterOnly[3, 6, 8, 2]);




//  2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr){
    const evens =arr.filter(function(num){
        if (num % 2 == 0){
            return num;
        }
    });
    return evens;
}

console.log(evensOnly([3, 6, 8, 2]))

// 3) (NEED HELP) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const words = ['tigers', 'cat', 'elite', 'example', 'dog', 'present'];

const wordlength = words.filter(word => word.length <5);

console.log(wordlength);

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const PeopleWhoBelongToTheIlluminati =[
    {name: "Angelina", member: true},
    {name: "Lucas", member: false},
    {name: "Eddie", member: true},
    {name: "Jay Z", member: false},
]
const people = PeopleWhoBelongToTheIlluminati.filter(function(members){
    if(members.member == "true"){
        return members
    }
})

console.log(people)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
     
const matrix =[
    {name: "Angelina", age: 80},
    {name: "Lucas", age: 5},
    {name: "Eddie", age: 2},
    {name: "Jay Z", age: 100} ]

        const movie = matrix.filter(matrix => matrix.age >= 18);

      
      console.log(movie) //- How would I display this information inside the console instead of "Array(2) [Object, Object]"?

// 1) Make an array of numbers that are doubles of the first array

const doubleNumbers = [8, 10, 20]

let doubles = doubleNumbers.map(function(num) {
    return num * 2;
})

console.log(doubles)

// 2) Take an array of numbers and make them strings [did not understand]

const numbers = [15, 10, 40];

    const num = numbers.map(toString);

console.log(num)



// 3) Capitalize each of an array of names

const names = ["john", "jacob", "jingleheimer", "shmidt"];

const namesUC = names.map(function(stringOfNames){
    return stringOfNames.toUpperCase 
})

console.log(namesUC)

// 4) Make an array of strings of the names
 
const celebs =[
     {name: "Angelina", age: 80},
     {name: "Lucas", age: 5},
     {name: "Eddie", age: 2},
     {name: "Jay Z", age: 100} ]

    const namesOnly = celebs.map(function(nam){
        return celebs.name
    })
    console.log(namesOnly)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
   
const celebs =[
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 5},
    {name: "Paris Hilton", age: 2},
    {name: "Kanye West", age: 100},
    {name: "Bob Ziroll", age: 100}]

    const matrix = celebs.map(function(num){
        if(celebs.age <= 18){
            result = "true"
        }
        return true
    })

    console.log(matrix)

// 1) Turn an array of numbers into a total of all the numbers

const arr = [3, 10, 9].reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
}, 0)

    console.log(arr)


//2) Turn an array of numbers into a long string of all those numbers.

const num = [1,2,3]

const result = (accumulator, currentValue) => accumulator + currentValue;

console.log(num.reduce(result.toString()))

//3) Turn an array of voter objects into a count of how many people voted
   
const totalVotes = [
   {name: "Angelina Jolie", voted: true},
   {name: "Eric Jones", voted: false},
   {name: "Paris Hilton", voted: false},
   {name: "Kanye West", voted: false},
   {name: "Bob Ziroll", voted: false},
   {name: "Angelina Jolie", voted: true},
   {name: "Eric Jones", voted: true},
   {name: "Paris Hilton", voted: true},
   {name: "Kanye West", voted: false},
   {name: "Bob Ziroll", voted: false}]

   const votecount = totalVotes.reduce(function(final, voter){
        if(voter.voted){
            final++
       }
       return final
       }, 0)

       console.log(votecount)

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
    {title: "Tesla Model S", price: 9000},
    {title: "4 carat diamond ring", price: 4500},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "second Model S", price: 9000}
]
 const reducer = (accumulator, currentValue) => accumulator + currentValue;

 console.log(wishlist["price"].reduce(reducer));

 //5) Given an array of arrays, flatten them into a single array

 var arrays = [[
     ["1", "2", "3"],
     [true],
     [4, 5, 6]]].reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        [],)

    console.log(arrays)


//6 Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
//and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. 
//See the example output at the bottom.

var voter =[
    {name: "Angelina Jolie", age: 19, voted: true},
    {name: "Eric Jones", age: 43, voted: false},
    {name: "Paris Hilton", age: 23,voted: false},
    {name: "Kanye West", age: 21, voted: false},
    {name: "Bob Ziroll", age: 35, voted: false},
    {name: "Angelina Jolie", age: 31, voted: true},
    {name: "Eric Jones", age: 41, voted: true},
    {name: "Paris Hilton", age: 42, voted: true},
    {name: "Kanye West", age: 53,  voted: false},
    {name: "Bob Ziroll", age: 48, voted: false},
    {name: "John West", age: 24,  voted: false},
    {name: "Joe Ziroll", age: 54, voted: false}]
    
    
    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          var key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      }
      
      var groupedPeople = groupBy(voters, voters.age <=18);
     
    
    //1) Sort an array from smallest number to largest
     
    const  array = [20, 2, 3, 5, 90, 1];
    array.sort();
    console.log(array);
    
    //2) Sort an array from largest number to smallest
    const  array = [20, 2, 3, 5, 90, 1];
    array.sort(function(a, b) {
        return b - a;
      });
      console.log(array);
    
    //3) Sort an array from shortest string to longest
    
    const words = ["dog", "wolf", "by", "eaten", "family"];
    words.sort(function (a, b) {
        return a.charAt[0] > b});
    
        console.log(words)
    //4) Sort an array alphabetically
    
    const words = ["dog", "wolf", "by", "eaten", "family"];
    words.sort(function (a, b) {
        return a.localeCompare(b);
    })
    console.log(words)

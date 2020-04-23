var shopper = {
    firstName: "Thomas",
    lastName :"Jones",
    age: "26",
    groceryCart: ["orange, popcorn, pasta, milk, sugar"],
    isCartFull: false,
    fullName: function(){
        return this.firstName +" " + this.lastName;}
    } ;

console.log(shopper.fullName());


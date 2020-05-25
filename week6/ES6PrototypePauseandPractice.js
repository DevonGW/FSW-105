function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    //traditional approach
    // this.printCarDetails = function(){
    //     console.log("Make:"+ this.make);
    //     console.log("Model:" + this.model);
    //     console.log("Year:"+ this.year);
    //     console.log("-----");
    // }
}
Car.prototype.printCarDetails = function(){
    console.log("Make:"+ this.make);
    console.log("Model:" + this.model);
    console.log("Is this car new?" + this.IsNew)
    console.log("Year:"+ this.year);
    console.log("-----");
}
 Car.prototype.IsNew = true;


var toyotaCamry = new Car("Toyota", "Camry", 2015);
toyotaCamry.IsNew = false;
toyotaCamry.printCarDetails();

var hondaAccord = new Car("Honda", "Accord", 2020);
hondaAccord.printCarDetails();

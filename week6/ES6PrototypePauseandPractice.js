function newHire (name, job, salary, status){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status
}

const employee = [
   { name: "Bob Barker",
     Job: "Chef",
     Salary: 2000,
     Status: "full time"},
     
    {name: "David Freese",
    Job: "host",
    Salary: 3000,
    Status: "full time"},

    {name: "Felicia Brown",
     Job:"hostess",
     Salary: 3500,
     Status: "Part time",},
]




  
employee.prototype.employeeInfor = function(){
    console.log("Name:"+ this.name);
    console.log("Job title:" + this.job);
    console.log("Salary?" + this.Salary)
    console.log("Year:"+ this.Status);
    console.log("-----");
}


  




// function Car (make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;

    //traditional approach
    // this.printCarDetails = function(){
    //     console.log("Make:"+ this.make);
    //     console.log("Model:" + this.model);
    //     console.log("Year:"+ this.year);
    //     console.log("-----");
    // }


//}
//  Car.prototype.IsNew = true;


// var toyotaCamry = new Car("Toyota", "Camry", 2015);
// toyotaCamry.IsNew = false;
// toyotaCamry.printCarDetails();

// var hondaAccord = new Car("Honda", "Accord", 2020);
// hondaAccord.printCarDetails();



var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male",
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age:22,
        gender: "female"
    },{
        name: "Sam",
        age: "30",
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender:"female"
    }

];

function OldEnough(){
    for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("old enough to see movie");
        }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log("not old enough to enter");
    }
}
}

OldEnough();

//part 2 
function OldEnough(){
    for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max");
        }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +"is not old enough to see Mad Max");
    }
}
}

//part 3

function OldEnough(){
    for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "do not allow in");
        }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +"please allow in");
    }
}
}

//part 4


for(var i =1; i <= 100; i++){
    if([i] % 2 === 0){
    console.log(i)
}
}
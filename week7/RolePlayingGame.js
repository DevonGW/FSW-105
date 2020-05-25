const readlineSync = require('readline-sync');

const name = readlineSync.question('what is your name? ');

var userName = readlineSync.question("Hello" + name  + "Welcome to ETERNAL DOOM Wh3ere you will risk your life to defeat the evil that lurks! Press Enter to begin.");
const badGuys = ["Killer Elves", "Cyclops", "Night Ape", "Gobilin", "Giant Goblin"];
const treasure = ["Medkit", "Armor Plates", "Rage Potion", "Health Potion"];
var prize = [];
let userHealth = 40;
const options = ["Walk", "Exit", "Print"];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuyPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index =  readlineSync.keyInSelect(options, "What would you like to do next?");

    if (options[index]== "Exit"){
        return userHealth = 0;
    } else if (options[index]== "Print"){
        console.log( name + ": \n" + userHealth + "\nTreasure:" + pickUp);
    }else if (options[index] === "Walk"){
        let key = Math.random();
        if(key <= .3){
            console.log("Walking...");
        }else if (key >= .3){
            console.log (badGuy + "showed up.");
            while(badGuysHealth > 0 && userHealth > 0){
                
                const user = readlineSync.question("what do you want to do? enter 'r' to run or 'a' to attack:");
                
                switch(user){
                    case 'r': // runaway
                    const run = Math.random();
                    if(run < .5){
                        console.log("Before you run away" + badGuy + "attacks you with:" + badGuyPower);
                    }else {
                        console.log("You Ran Away!");
                        break;
                    }
                case 'a':
                    //attack the enemy
                    badGuysHealth -= attackPower;
                    console.log("You attacked" + badGuy + "with" + attackPower + "attack power");

                    userHealth -= badGuyPower;
                    console.log("They Enemy has attacked you with:" + badGuyPower + "attack power");
                        if (badGuysHealth <= 0){
                            console.log( "you killed" + badGuy +'.\n' + badGuy + "left:" + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            } 
                        }else if(userHealth <= 0){
                            console.log(badGuy + "has defeated you. You have been defeated");
                        }
                }
            }
        }
    }
}

while(userHealth > 0){
    userRestore = function(){
        userActive=true;
        userHealth= 40;
    };
    userRestore();
    game();
}
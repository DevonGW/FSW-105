var readlineSync = require('readline-sync');
 
//read Player's Name

var userName = readlineSync.question('May I have your name? ');


const strWelcome = `Welcome ${userName} to the Escape Room Simulation`
console.log(strWelcome);

let isPlayerAlive = true;
let playerHaskey = false;

while(isPlayerAlive === true){
    const myGameMenuOptions =  readlineSync.keyIn('Enter 1 to Put hand in hole \nEnter 2 to Find the key \enter 3 to Open the door:', {limit: '$<1-3>'});

    if (myGameMenuOptions == 1){
    //User Dies
    console.log(`Sorry ${userName}! You are now DEAD, game is over!`);
    isPlayerAlive = false;
    }
    else if(myGameMenuOptions ==2 && playerHaskey== false)
    {
        //First time selecting option 2, player NEVEER had access to the key
        console.log(`${userName} you FOUND the key successfully!`);
    }
    else if (myGameMenuOptions ==2 && playerHaskey== true)
    {
        //Player selected option 2, player has ALREADY had access to the key
        console.log(`${userName} you ALREADY HAD the key from earlier selection`);
    }
    else if (myGameMenuOptions == 3 && playerHaskey == false)
    {
        //First time selection option 3, player does NOT have the key
        console.log(`${userName} - you need to find the first!`)
        playerHaskey= true;
    }
    else if (myGameMenuOptions ==3 && playerHaskey == true)
    {
        //Player selected option 3, player does NOT have the key
        console.log(`${userName}, you already have the key, and you opened the door, GAME IS OVER!`);
        isPlayerAlive = false;

    }
}



//Nicholas Migliorisi  Functions Assignment SDI August 2015  WDDBS

while(true){                                           //Beginning a loop to collect the game type
    var gameType = prompt("What game do you want to play?\nFlorida State Lottery or Powerball?"); //Asking what game they want to play
    if(gameType == "Powerball"){                       //Starting an if else statement
        console.log("Powerball");                      //Printing Powerball to the console if selected game
        break;                                         //Stopping the loop if Powerball is selected
    }else{                                             //If Powerball isn't selected we see if it was FS Lotto
        if(gameType == "Florida State Lottery"){       //Starting another if statement
            console.log("Florida State Lottery");      //Printing Florida State Lottery to the console if selected game
            break;                                     //Breaking the loop if FS Lotto is selected
        }

    }
    if(gameType != "Powerball"||"Florida State Lottery"){ //If neither the Powerball or FS Lotto are chosen
        alert("That is not a valid game! Please try again."); //We alert the user of their error and the loop continues
    }
}

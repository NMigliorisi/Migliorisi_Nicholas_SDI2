//Nicholas Migliorisi  Functions Assignment SDI August 2015  WDDBS

var powerball;
var pbNum;
var fsLotto;


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


function numbersGen(min, max, num){   //creating the function
    var ranNum = [];                  //Using an array to collect numbers

    for(var i = 0; i < num; i++){     //using iteration to collect desired amounts of numbers

        ranNum[i] = Math.random() * (max - min) + min; //randomly selecting numbers in a range TBD
        ranNum[i] = Math.round(ranNum[i]);             //Rounding those numbers to the nearest integer
        if(ranNum[i]==ranNum[i]){     //Starting a new if statment
            ranNum.push(ranNum)       //Keeping numbers from duplicating in the lotto
        }
    }
return ranNum;                        //Retuning the random numbers

}

if(gameType === "Powerball"){        //Checking the game type
    powerball = numbersGen(1, 59, 5); //setting the range and amount of numbers needed
    pbNum = numbersGen(1, 35, 1);    //setting the range for the powerball number
    alert("Your numbers are " + powerball + " with a Powerball number of " + pbNum); //Alerting the player
    console.log(powerball);   //printing the powerball numbers to the console
    console.log(pbNum);       // printing the Powerball to the console

}
if(gameType === "Florida State Lottery"){ //Checking the game type
    fsLotto = numbersGen(1, 53, 6);       //Setting the range and amount of numbers needed
    alert("Your Florida State Lottery numbers are " + fsLotto); //Telling the player their numbers
    console.log(fsLotto);                 //Printing the numbers to the console
}

/* I tested my powerball and got 4,57,46,23,37, with a Powerball number of 23.
My FS Lotto got me 40,22,21,48,31,8.
 */
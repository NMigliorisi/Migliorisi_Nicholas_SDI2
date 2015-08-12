//Nicholas Migliorisi Expressions Assignment SDI August 2015 WDDBS

var scoreOne = Number(prompt("We are trying to find the average score of your teams basket ball team.\n Please enter a score:")); //collecting the first score
var scoreTwo = Number(prompt("Please enter another score:")); //collecting the second score
var scoreThree = Number(prompt("And another score:")); //collection the third score

var scoreTotal = scoreOne + scoreTwo + scoreThree;  //adding together prompt totals

var scoreAverage = scoreTotal / 3; //finding the average of the scores

alert("Your teams average is " + scoreAverage + " points!"); //announcing the average score to the user

console.log(scoreOne); //displaying score one in the console
console.log(scoreTwo); //displaying score two in the console
console.log(scoreThree);//displaying score three in the console
console.log("These are the scores. Below is the total and the average"); //telling the user what they are seeing in the console
console.log(scoreTotal);//displaying the total of the scores in the console
console.log(scoreAverage);//displaying the average score in the console
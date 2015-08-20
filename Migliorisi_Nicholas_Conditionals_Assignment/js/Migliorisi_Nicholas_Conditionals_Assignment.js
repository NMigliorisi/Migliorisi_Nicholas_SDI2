//Nicholas Migliorisi Conditionals Assignment SDI August 2015 WDDBS

var dayOne = prompt("We are doing to see on average how many hours of sleep people get over the weekend. \nFor this study we are including Friday and Monday.  How many hours of sleep did you get on Friday night?"); //Explaining the study and gathering input for the first night of sleep
var dayTwo = prompt("How about Saturday night?");//Gathering input for night two
var dayThree = prompt("And Sunday night?");//Gathering input for night three
var dayFour = prompt("And finally Monday night?");//Gathering input for night four
var forgotDay = ("Woah there, you forgot one! If you got no sleep one night please type in a zero.");//Gathering any forgotten information

if(dayOne == ""){     //This whole block is making sure info is all entered properly
    prompt(forgotDay)
}else{
    dayTwo
}
if(dayTwo == ""){
    prompt(forgotDay)
}else{
    dayThree
}
if(dayThree == ""){
    prompt(forgotDay)
}else{
    dayFour
}
if(dayFour == ""){
    prompt(forgotDay)
}else{
    alert("Thank you!") //If all info is entered the process will continue
}
var nightOne = parseInt(dayOne);
var

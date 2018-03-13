var Basic = require("./BasicCard.js");
var Cloze = require("./ClozeCard.js");
var inquirer = require("inquirer");


//all cards
var card1 = new Basic("What is the name of the Swedish King?", "Carl Gustaf"); 
var card2 = new Basic("What kind of music Sweden is not famous for?", "Classic Music"); 
var card3 = new Basic("How many European countries have a larger area than Sweden?", "4"); 
var card4 = new Basic("What is the average temperature in Stockholm in July?", "23"); 
var card5 = new Basic("When did Sweden become an independent kingdom?", "1523"); 
var card6 = new Cloze("Ice hockey is one of the most popular sports in Sweden.", "Ice hockey");
var card7 = new Cloze("In 1710, a catastrophic plague obliterated about one third of Stockholm’s population.", "plague"); 
var card8 = new Cloze("The total absence of heavy industry makes Stockholm one of the world’s  cleanest metropolises.", "heavy industry"); 
var card9 = new Cloze("The world-famous discount furniture chain IKEA was founded in Sweden in 1943.", "IKEA");
var card10 = new Cloze("Swedes have the longest life expectancy in Europe", "life expectancy"); 


//put al cards in a array, loop over arary, if their input matches the backside/ missing card then give one point. 
//try to put this in for loop so it does this for every card. and checks if the answer is correct. 
inquirer.prompt([
    {
        type: "input",
        message: card9.partial,
        name: "answer"
    }
]).then(function(input){
    console.log(input.answer); 
})
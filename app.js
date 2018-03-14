var Basic = require("./BasicCard.js");
var Cloze = require("./ClozeCard.js");
var inquirer = require("inquirer");


//all cards
var allCards = []; 
var card1 = new Basic("What is the name of the Swedish King?", "carl gustaf"); 
allCards.push(card1); 
var card2 = new Basic("What kind of music Sweden is not famous for?", "classic music"); 
allCards.push(card2);
var card3 = new Basic("How many European countries have a larger area than Sweden?", "4"); 
allCards.push(card3);
var card4 = new Basic("What is the average temperature in Stockholm in July?", "23"); 
allCards.push(card4);
var card5 = new Basic("When did Sweden become an independent kingdom?", "1523"); 
allCards.push(card5);
var card6 = new Cloze("ice hockey is one of the most popular sports in Sweden.", "ice hockey");
allCards.push(card6);
var card7 = new Cloze("In 1710, a catastrophic plague obliterated about one third of Stockholm’s population.", "plague"); 
allCards.push(card7);
var card8 = new Cloze("The total absence of heavy industry makes Stockholm one of the world’s  cleanest metropolises.", "heavy industry");
allCards.push(card8); 
var card9 = new Cloze("The world-famous discount furniture chain ikea was founded in Sweden in 1943.", "ikea");
allCards.push(card9);
var card10 = new Cloze("Swedes have the longest life expectancy in Europe", "life expectancy");
allCards.push(card10);

console.log("This is a flashcard game about Sweden, your answers must be in lowecase :) Good luck!")

var counter = 0; 
 
// Game logic, There are two types of cards, Cloze and Basic. In the constructor for each type i have set i flag for so i can run different inquirer depending on type. The game will keep going untill there are no more questions. 
function askQuestion() {


    if (allCards[counter].type === "basic"){
            inquirer.prompt([
            {
                type: "input",
                message: allCards[counter].front,
                name: "answer"
            }
        ]).then(function(input){
            if (input.answer === allCards[counter].back){
                console.log("-----------");
                console.log("Your answer " + input.answer + " was right"); 
                console.log("-----------");
            }
            
            else {
                console.log("-----------");
                console.log("Wrong the right answer was || " + allCards[counter].back); 
                console.log("-----------"); 
            }
            counter++; 
            if (counter < allCards.length) {
                askQuestion(); 
            }
        })
    }
    if (allCards[counter].type === "cloze") {
        inquirer.prompt([
            {
                type: "input",
                message: allCards[counter].partial,
                name: "answer"
            }
        ]).then(function(input){
            if (input.answer === allCards[counter].cloze){
                console.log("-----------");
                console.log("Well done! " + input.answer + " is right");
                console.log("-----------");
             }
            else {
                console.log("-----------");
                console.log("Wrong the right answer was || " + allCards[counter].cloze)
                console.log("-----------");
            }
            counter++; 
            if (counter < allCards.length) {
                askQuestion(); 
            }
        })
    }
}
askQuestion(); 






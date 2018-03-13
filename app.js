var Basic = require("./BasicCard.js");
var Cloze = require("./ClozeCard.js");

var card1 = new Basic("Frontside!", "Backside"); 
var card2 = new Cloze("George Washington was the first president of the United States.", "George Washington"); 

console.log(card2); 
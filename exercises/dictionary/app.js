var readline = require("readline-sync");

var wordResponse = "":
var definition = "";

var dictionary = {};


//create function for user create dictionary
//saves to object
//no dup words
//returns def

while (wordResponse !== "q" || definitionResponse !=="q") {
    var wordResponse = readline.question("Please enter word into dictionary.");
    wordResponse = wordResponse.toLowerCase();
if(wordResponse === "q"){
    break
    
};
if (dictionary[wordResponse]){
    console.log("the definition for " + wordResponse + " is: " + dictionary);
} else{
    var definitionResponse = readlinesync.question("What is definition of word");
    definitionResponse = definitionResponse.toLowerCase();
    dictionary[wordResponse] = definitionResponse;
} 
}
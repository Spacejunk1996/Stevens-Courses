const readlineSync = require('readline-sync')

const words = {
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

// let Str = readlineSync.question("Please input a string.");
var Str = "This is a string.";
function checkInput(Str) {
    if (typeof(Str) === 'string') {
        console.log(Str);
        return true;
    }
    else {
        throw "Sorry, this is not a string.";
    }
}

const lookupDefinition = function lookupDefinition(Str) {

    checkInput(Str);

}

Object.prototype.getKey = function(key) {

};

Object.prototype.getWord = function(definition) {
    if (checkInput(definition)) {
        for (var key in this) {
            if (this[key] == definition)
                return key
        }
    }
    else {
        throw "Word not found.";
    }
}
let definition = "The action or process of writing computer programs.";
let Definition = words.getWord(definition);

module.exports = {
    lookupDefinition,
    getWord
};
var inquirer = require ('inquirer');
var letter = require ('./letters');

var Word = function () {

	this.checkLetters = function (letter) {
		var correctGuess;

		// checks if a letter given by the user mataches a letter in the array 
		if (this.splitWord.indexOf(letter) === -1) {
			correctGuess = false;
		} else {
			correctGuess = true;
		}

		//replaces the underscore with the given letter if a match in found in the arrary
		if (correctGuess === true) {
			for (var i = 0; i < splitWord.length; i++) {
				splitWord[i].replace("_", letter);

			} else {
				this.remainingGuess--;
				console.log(this.remainingGuesses);
			}

		}
	}

}

// creates instance
var guess = new Word();
guess.newWord();


inquirer.prompt([
	{
		name: "guessLetter",
		type: "input",
		message: "Guess a letter. "
	}
])
.then(function(answer) {
	var answer = answer.guessLetter;

	answer.checkLetters(letter);
});

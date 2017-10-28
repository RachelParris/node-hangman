const Letter = function () {
	this.wordList = ['Gattaca', 'Moana', 'Inception'];

	//Separates the string into separate letters
	this.splitWord = wordList.split("");
	// console.log(this.splitWord);

	this.newWord = function () {
		// Creates underscores for the same number of letters in the array
		this.underscore = Array.from('_'.repeat(this.splitWord.length));

		// console.log(this.underscore);
	}
}

module.exports = Letter;
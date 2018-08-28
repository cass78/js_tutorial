module.exports = Phrase;

// Adds reverse to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content){
	this.content = content;
	
	// returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}
	
	//Returns the letters in the content, eg Hello, World! == helloWorld
	this.letters = function letters() {
		//Below illustrates how functioning code can be condensed to one line
		/* let theLetters = [];
		const letterRegex = /[a-z]/i;
		
		Array.from(this.content).forEach(function(character) {
			if(character.match(letterRegex)) {
				theLetters.push(character);
			}
		}); */
		return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
	}
	
	// returns true for a palindrome, false otherwise
  this.palindrome = function palindrome(){
	  return this.processedContent() === this.processedContent().reverse();
  }
}
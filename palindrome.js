// Adds reverse to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content){
	this.content = content;
	
	// exercise define a processor method
  this.processor = function(string) {
		return string.toLowerCase();
	}
	
	// returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}
	
	// returns true for a palindrome, false otherwise
  this.palindrome = function palindrome(){
	  return this.processedContent() === this.processedContent().reverse();
  }
	
	// Exercise, make the phrase louder
	this.louder = function() {
		return this.content.toUpperCase();
	}
}

// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;
	
	// returns translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

// Here we arrange for TranslatedPhrase to inherit the desired palindrome method directly from Phrase. The way to do this in JavaScript is to set the prototype of the second object type equal to an instance of the first; i.e., we need to set TranslatedPhrase.prototype to new Phrase(). Because the prototype property of TranslatedPhrase has been set to a Phrase object, an instance of TranslatedPhrase automatically has all the methods of a Phrase instance, including palindrome.
TranslatedPhrase.prototype = new Phrase();
	
//exercise email from parts
function emailParts(email){
	let arr = [];
	email = email.toLowerCase();
	arr = email.split("@");
	return arr;
}
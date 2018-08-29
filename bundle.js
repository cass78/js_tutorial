(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("palindromejstutorial");

function palindromeTester(e) {
	e.preventDefault();
	//let string = prompt("Please enter a string for palindrome testing:");
	let phrase = new Phrase(e.target.phrase.value);
	let palindromeResult = document.querySelector("#palindromeResult");

	if(phrase.palindrome()){
		palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let tester = document.querySelector("#palindromeTester");
	tester.addEventListener("submit", function(e) {
		palindromeTester(e);
	});
});
},{"palindromejstutorial":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);

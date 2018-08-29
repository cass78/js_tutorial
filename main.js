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
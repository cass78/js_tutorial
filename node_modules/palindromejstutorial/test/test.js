let assert = require("assert");
let Phrase = require("../index.js");

// below drilling down to the palindrome function for testing
// it(), describe() and assert() are from assert above.
// to run type npm test in the console
describe("Phrase", function() {
	// # indicates an instance method in an object
	describe("#palindrome", function() {
		it("should return false for a non-palindrome", function() {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});
		
		it("should return true for a plain palindrome", function() {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});
		
		it("should return true for a mixed-case palindrome", function() {
			let mixedCase = new Phrase("Racecar");
			assert(mixedCase.palindrome());
		});
		
		it("should return true for a palindrome with punctuation", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert(punctuatedPalindrome.palindrome());
		});
	});
	
	describe("#letters", function() {
		it("should return only letters", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
		});
	})
});
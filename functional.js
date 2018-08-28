//This example shows functional programming techniques using map, filter and reduce on an array.

let states = ["Donegal", "Cork", "North County Dublin", "West Side Galway"];

// first up 5 code blocks highlighting .map(function())
// return a url friendly version of a string
const urlify = (string) => string.toLowerCase().split(/\s+/).join("-");

//urls: imperative version
function imperativeUrls(elements){
	let urls = [];
	elements.forEach(function(element) {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

//urls: functional version using .map (example version)
function functionalUrls(elements) {
	return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// further worded with arrow functions
const functionalUrlsArrow = (elements) => elements.map(element => urlify(element));

console.log(functionalUrlsArrow(states));

//Exercise works, below again is a nested arrow function version
function exercise(arr){
	return arr.map(element => `https://example.com/${urlify(element)}`);
}
const exercise1 = (arr) => arr.map(element => `https://example.com/${urlify(element)}`);
console.log(exercise(states));
console.log(exercise1(states));

//The following is concerned with .filter and filtering out double barreled names from the array
// singles: Imperative version
function imperativeSingles(elements){
	let singles = [];
	elements.forEach(function(element){
		if(element.split(/\s+/).length === 1){
			singles.push(element);
		}
	});
	return singles;
}

console.log(imperativeSingles(states));

// and like above, here is the example functional version
function functionalSingles(elements){
	return elements.filter(element => element.split(/\s+/).length === 1);
}

// and the arrow version
const functionalSinglesArrow = (elements) => elements.filter(element => element.split(/\s+/).length === 1);

console.log(functionalSingles(states));
console.log(functionalSinglesArrow(states));

// Lastly the reduce examples, there's a bit to reduce from https://www.learnenough.com/javascript-tutorial-tutorial/javascript/functional_programming/reduce listing 60: reduce: it’s a function that takes the elements of an array and processes (reduces) them based on some operation (in this case, addition). This is not always the case, though, and as we’ll see in a moment it’s often more helpful to think of reduce as accumulating results and storing them in its first argument, total in the case below.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative version
function imperativeSum(elements){
	let total = 0;
	elements.forEach(function(n){
		total += n;
	});
	return total;
}

console.log(imperativeSum(numbers));

// sum functional version, there was a lot goin on here in the examples, with after => looking like this: { return total += n; }, 0); the zero important but not needed below as its value initially is 0.
function functionalSum(elements){
	return elements.reduce((total, n) => { return total += n; });
}

console.log(functionalSum(numbers));

//second example using the states array above
function imperativeLengths(elements){
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}

console.log(imperativeLengths(states));

/* functional version, The functional solution using reduce is trickier. As with the imperative solution, we have a plain lengths object, but instead of being an auxiliary variable, it’s a parameter to the function
(lengths, state) => {
	lengths[state] = state.length;
	return lengths;
}
Meanwhile, the initial value of the reduce method, instead of being the default 0, is the empty object {}(this equates to the 0 value mentioned above).
reduce((lengths, state) => {
	lengths[state] = state.length;
	return lengths;
}, {}); */
function functionalLengths(elements){
	return elements.reduce((lengths, element) => {
		lengths[element] = element.length;
		return lengths;
	}, {});
}

console.log(functionalLengths(states));
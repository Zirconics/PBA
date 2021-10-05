console.log("JavaScript is working!");

// Assignment 1
// Call happyNewYear(year) in the console to test.
// or enter a number instead of a year.
// e.g. 2014
const year = prompt("Enter current year", "2021");
function happyNewYear(year) {
  for (i = 10; i >= 0; i--) {
    console.log(i);
  }
  console.log(`Happy new ${year}!`);
}

// Assignment 2
// Call factorial(x) in the console to test.
// x = the number the user enters in the console.
function factorial(num) {
  let output = 1;

  for (i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
}

// Assignment 3
// Asks the user for a string and a character to check how many times the character is found in the string.
// call checkForACharacterInSentence(sentence, character) in the console to test.

// User input
const sentence = prompt("Enter a string: ");
const character = prompt("Enter a letter to check: ");

function checkForACharacterInSentence(sentence, character) {
  let count = 0;

  for (let a = 0; a < sentence.length; a++) {
    if (sentence.charAt(a) == character) {
      count++;
    }
  }
  return count;
}

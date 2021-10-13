console.log("JavaScript is working!");

/* 
Assignment 1
Create a function which randomly returns an element from the array lapRound
*/
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
console.log("Assignment 1 - Random lap time: " + lapRounds[Math.floor(Math.random() * lapRounds.length)]);


/*
Assignment 2
Given the allMyRecords array. Print all the values of this array to the console. 
Please take into consideration that this is a 2-dimensional array and for the right answer you need to use a double loop.
*/ 
const allMyRecords = [
	[
		"The Who - Pinball Wizard", 
		"Rolling Stones - Exile on main street", 
		"Police - Message in a bottle"
	],
	[
		"De Dijk - Alle 40 Goed", 
		"Het Goede Doel - Belgie", 
		"Doe Maar - skunk"
	]
];

// Iterates through the outer array
for (i=0; i<allMyRecords.length; i++) {
    // Iterates through the inner arrays
    for (j=0; j<allMyRecords[i].length; j++) {
        console.log("Assignment 2 - Iterate 2d-array: " + allMyRecords[i][j]);
    }
}


/*
Assignment 3
Use a .filter() function to come up with the same results as the filteredLapRoundsWithForLoop() function.

function filteredLapRoundsWithForLoop() {
	let newArray = [];
	for(let i = 0; i < lapRounds.length; i++) 
	{
		if (lapRounds[i] < 4) 
		{
			newArray.push(lapRounds[i]);
		}
	}
	return newArray;
}
*/

// Returns everything with a value less than 4
function filteredLapRoundsWithForLoop(value) {
    return value < 4;
}

console.log("Assignment 3 - Filtered laps: " + lapRounds.filter(filteredLapRoundsWithForLoop));


/*
Assignment 4
Use the wiki page above to learn how a BubbleSort algorithm should work. 
Then create a function called `bubbleSort(input)` that accepts an array as `input` and returns an array containing 
all the values of `input` but sorted in ascending order. Use the `lapRounds` array from the previous exercise to test, like:

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

function bubbleSort(input) {
  // ...
}

// This should log: [2.79, 2.88, 2.99, 3.00, 3.01, 3.10, 4.01, 4.12]
console.log(bubbleSort(lapRounds));
*/

function bubbleSort(input) {
    // Loops through the entire array
    for (i=0; i<input.length; i++){
        for (j=0; j<input.length; j++) {
            // Checks if the current value is higher than the next value
            if (input[j] > input[j + 1]) {
                // Swap the value with the next value
                let temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }
    return input;
  }
  
  // This should log: [2.79, 2.88, 2.99, 3.00, 3.01, 3.10, 4.01, 4.12]
  console.log("Assignment 4 - BubbleSort array: " + bubbleSort(lapRounds));
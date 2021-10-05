console.log("JavaScript is working!");

// Assignment 1
const year = prompt("Enter current year", "2021")
function happyNewYear(year) {
    for (i=10; i>=0; i--) {
        console.log(i);
    }
    console.log(`Happy new ${year}!`)
}


// Assignment 2
function factorial(num) {
    let output = 1;

    for (i=1; i<=num; i++) {
        output *= i; 
    }
    return output;
}

// Assignment 3
function checkForACharacterInSentence(sentence, character) {

}
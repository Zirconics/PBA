console.log("JavaScript is working!");

// Assignment 1
let highestNumber = 400;
let lowestNumber = 100;

while (highestNumber >= lowestNumber) {
  if (highestNumber % 3 == 0) {
    console.log(highestNumber);
    highestNumber--;
  } else {
      highestNumber--;
  }
}

// Assignment 2
// Code snippet from bouncing ball project
let maxRadius = 15;
let colour = "red";
let radius = Math.floor(Math.random() * maxRadius);
let xVelocity = 5; // the speed of a ball on the x-axis
let yVelocity = 6; // the speed of a ball on the y-axis

for (let i = 0; i < 5; i++) {
  createNewBall(radius, "green", xVelocity, yVelocity);
}

// Assignment 3
let niceNumber = [2, 4, 8, 9, 12, 13];
let total = 0;

for (i = 0; i < niceNumber.length; i++) {
  total += niceNumber[i];
}
console.log(total);

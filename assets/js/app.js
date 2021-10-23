console.log("JavaScript is working!");

/*
Code made during class
*/
let soccerTeam = [
  {
    firstName: "Christiano",
    lastName: "Ronaldo",
    nickname: "Portugal #1",
    yearOfBirth: 1980,
    currentClub: {
      Club: "Juventus",
      City: "Lissabon",
    },
    clubs: ["FC Barcelona", "Juventus"],
    redCards: 30,
    yellowCards: 100,
    appearances: 56,
  },
  {
    firstName: "Jay",
    lastName: "Groenendijk",
    nickname: "BayBlade",
    yearOfBirth: 2003,
    currentClub: {
      Club: "HZ",
      City: "Middelburg",
    },
    clubs: ["HZ"],
    redCards: 9999,
    yellowCards: 1700,
    appearances: 56,
  },
  {
    firstName: "Diego",
    lastName: "Ponte",
    nickname: "Shadowblack",
    yearOfBirth: 2003,
    currentClub: {
      Club: "HZ",
      City: "Middelburg",
    },
    clubs: ["HZ"],
    redCards: 9999,
    yellowCards: 9999,
    appearances: 1,
  },
  {
    firstName: "Kevin",
    lastName: "Oreel",
    nickname: "Zirconics",
    yearOfBirth: 2001,
    currentClub: {
      Club: "HZ",
      City: "Middelburg",
    },
    clubs: ["HZ", "Avans", "VV-Yerseke"],
    redCards: 9999,
    yellowCards: 9999,
    appearances: 1,
  },
  {
    firstName: "Rimmert",
    lastName: "Zelle",
    nickname: "Voetballert",
    yearOfBirth: 1978,
    currentClub: {
      Club: "HZ",
      City: "Middelburg",
    },
    clubs: ["HZ"],
    redCards: 9999,
    yellowCards: 9999,
    appearances: 1,
  },
];
console.log(soccerTeam);

/*
Assignment 1
Restructure the given values to an object array and assign it to a variable called `drivers`. 
Try to figure out what keys best to use and how to set up the object.

Then, create a function called `averageLapTime(drivers)` that accepts the object array as a parameter and returns a number that represents 
the average of all the lap times of all the drivers.

const driver1 = 'Max';
const teamMax = 'Redbull'
const lapTimesMax = [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];

const driver2 = 'Lewis';
const teamLewis = 'Mercedes'
const lapTimesLewis = [55.90, 63.10, 63.1, 53.01, 64.79, 52.80, 52.09, 54.11];
*/

let drivers = [
  {
    name: "Max",
    team: "Redbull",
    laptimes: [55.99, 63.0, 63.01, 54.01, 62.79, 52.88, 53.1, 54.12],
  },
  {
    name: "Lewis",
    team: "Mercedes",
    laptimes: [55.9, 63.1, 63.1, 53.01, 64.79, 52.8, 52.09, 54.11],
  },
];

function averageLapTime(drivers) {
    // Loops through the drivers array.
  for (i = 0; i <= drivers.length; i++) {
      // calculates the sum of all laps, then it calculates the average lap
    let avgTime = drivers[i].name + ": " + drivers[i].laptimes.reduce((previousValue, currentValue) => previousValue + currentValue) / drivers[i].laptimes.length;
    console.log(avgTime);
  }
}
// console.log(averageLapTime(drivers));


/*
Assignment 2
Given is the array of objects `teachers`. Now, do the following:

1. Create a function`logProfessions(teachers)` that accepts the `teachers` array as a parameter and logs `'{name} has a 
profession as a {profession} and he likes to work on a {brand} computer'` to the console for each object within the teachers array.

2. Create a function `addRandomSalaryInfo(teachers)` that accepts the `teachers` array as a parameter and adds two properties to each existing 
objects: `hoursPerWeek` and `salary`, where `salary` is the monthly salary. Use `Math.random()` to assign random values in a certain range:
    1. `hoursPerWeek` between 16 an 40 hours. It would be nice (but not required) if this were increments of 4 hours. So, 16, 20, 24, etc.
    2. `salary` between €1,000 and €10.000 

3. Create a function`logSalaryPerHour(teachers)` that accepts the `teachers` array as a parameter and calculates the hourly rate of a teacher 
and logs it to the console like: *Frans has an hourly rate of €514.26*.

4. Create a function `normalizeSalaries(teachers, normalizedHourlyRate)` that accepts the `teachers` array as a parameter and updates each salary so
 its hourly rate should equal the `normalizedHourlyRate` when it is calculated again in the `logSalaryPerHour` function.
*/
const teachers = [
  {
    name: "Loek",
    profession: "Teacher",
    brand: "Linux",
  },
  {
    name: "Elio",
    profession: "Teacher",
    brand: "Windows",
  },
  {
    name: "Daan",
    profession: "Teacher",
    brand: "Arduino",
  },
  {
    name: "Frans",
    profession: "Teacher",
    brand: "Windows",
  },
  {
    name: "Rimmert",
    profession: "Teacher",
    brand: "Apple",
  },
];

function logProfessions(teachers) {
// Loops through the teacher array.
  for (i = 0; i <= teachers.length; i++)
  // Prints all the data for each item.
    console.log(`${teachers[i].name} has a profession as a ${teachers[i].profession} and he likes to work on a ${teachers[i].brand} computer`);
}
// console.log(logProfessions(teachers))


function addRandomSalaryInfo(teachers) {
  teachers.forEach(function(teachers) {
    teachers.hoursPerWeek = Math.floor(Math.random() * (40 - 16) + 16);
    teachers.salary = salary = Math.floor(Math.random() * (10000 - 1000) + 1000);
  });
  console.log(teachers)
}
// addRandomSalaryInfo(teachers)


/*
Assignment 3
Copy and update your BubbleSort implementation, 
so it can sort the teachers array in the previous assignment. Sort it by name.
*/
function bubbleSort(teachers) {
    // Loops through the entire array
    for (i=0; i<teachers.length; i++){
        for (j=0; j<teachers.length; j++) {
            // Checks if the current value is higher than the next value
            teachers.sort(function(a, b) {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0
            })
        }
    }
    return teachers;
  }

console.log(bubbleSort(teachers))
  
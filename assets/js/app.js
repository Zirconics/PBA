console.log("JavaScript is working!");


// Assignment 1
// Call checkName("Alice") or checkName("Bob") in the console to check.
let name = "Alice";

function checkName(name) {
    if (name === "Alice" || name === "Bob") {
        return "Nice greetings!";
    } else {
        return "Hello";
    }
}


// Assignment 2
// Call checkThings(purchasedBook, job, inTrain) in the console to check.
let purchasedBook = true;
let job = 'teacher';
let inTrain = true;

function checkThings(purchasedBook, job, inTrain) {
    if (purchasedBook == true && job == 'teacher' && inTrain == true) {
        return "Finally I can enjoy my book!";
    } else {
        return "Guess i'll do some work";
    }
}


// Assignment 3
// call checkGrade() in the console to check.
let grade = 8;

function checkGrade(grade) {
    if (grade >= 0 && grade <= 10) {
        if (grade < 6) {
            return "Insufficient";
        } else if (grade < 7) {
            return "Sufficient";
        } else if (grade < 9) {
            return "Good";
        } else {
            return "Excellent"
        }
    } else {
        return "Please enter a grade between 0 and 10."
    }
}


// Assignment 4
// call returnDays() in the console to check.
let year = 2022;
let month = 2;

function returnDays(year, month) {
    // Checks if the given year and month are valid (within the ranges of this code).
    if (year >= 2020 && year <= 2030 && month >= 1 && month <= 12) {
        // All leap years between 2020 and 2030.
        if (year == 2020 || year == 2024 || year == 2028) {
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                return "Month " + month + " has 31 days";
            } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                return "Month " + month + " has 30 days";
            } else if (month == 2) {
                return "Month " + month + " has 29 days";
            }
            // All common years between 2020 and 2030
        } else if (year == 2021 || year == 2022 || year == 2023 || year == 2025 || year == 2026 || year == 2027 || year == 2029 || year == 2030) {
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                return "Month " + month + " has 31 days";
            } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                return "Month " + month + " has 30 days";
            } else if (month == 2) {
                return "Month " + month + " has 28 days";
            }
        }
    } else {
        return "Please enter a year between 2020-2030 and a month between 1-12"
    }
}
// Prompt the user to enter their score
let score = parseInt(prompt("Enter your score:"));

// Identify their grade based on their score result
let grade;
if (score >= 90) {
    grade = "Excellent";
} else if (score >= 80) {
    grade = "Good";
} else if (score >= 70) {
    grade = "Fair";
} else {
    grade = "Needs Improvement";
}

// Display output
console.log("Your grade is:", grade);

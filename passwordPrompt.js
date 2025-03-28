// Define the correct password
let correctPassword = "Divina_1721";
let password; 

// Continue until you enter the correct password
do {
    password = prompt("Enter your password:");

    if (password !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (password !== correctPassword);

console.log("Access granted.");
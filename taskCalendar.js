// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week: ").toUpperCase();

// Identify the task based on the day
switch (day) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Do a study topic tomorrow.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Work on your project.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Review all your topics in all subjects.");
        break;
    case "friday":
        console.log("Your task for Friday is: Relax and Chillin.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Do household chores.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Go to Church and Travel.");
        break;
    default:
        console.log("Invalid input!");
}
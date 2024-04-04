#! /usr/bin/env node
console.log("\n **Hi!,Welcome to the Number Guessing Game.**\n ");
import inquirer from "inquirer";
// Taking input from the user.
const answere = await inquirer.prompt([{
        name: "User_guessing_no",
        type: "number",
        message: "Please guessed the number between 1 to 10 :",
    }]);
// Generate an random number
let random_number = Math.floor(Math.random() * 10);
// comparing the number
if (answere.User_guessing_no === random_number) {
    console.log("Congratzz!!, You Guessed Correct No!");
}
else {
    console.log("OOPS, you guessed the wrong number.");
}

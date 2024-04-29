#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Inter your first number", name: "firstNumber", type: "number"
    },
    {
        message: "Inter your second number", name: "secondNumber", type: "number"
    },
    {
        message: "Select one of the operators", name: "operator", type: "list", choices: [
            "Addition", "Subtraction", "Multiplication", "Division",
        ]
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Inter a valid operator");
}

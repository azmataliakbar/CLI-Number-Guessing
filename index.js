#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// 1) computer will generate a random number, we can decide range of number.
// 2) user input for guessing number, user will type his number in between range.
// 3) computer will compare user input number with computer generated number and show result.
function rainbowText(text) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: rainbowText("\n*** Welcome To Number Guessing Game *** \nPlease guess a number between 1 to 5 : ")
    },
]);
//console.log(rainbowText("\n *** Welcome To Number Guessing Game *** "));
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.italic.bold.greenBright("\nCongratulation! You guessed a correct number."));
}
else {
    console.log(chalk.italic.bold.yellowBright("\nPlease try again, You guessed a wrong number."));
}

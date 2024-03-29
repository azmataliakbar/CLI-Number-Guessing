#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
// 1) computer will generate a random number, we can decide range of number.
// 2) user input for guessing number, user will type his number in between range.
// 3) computer will compare user input number with computer generated number and show result.
function rainbowText(text) {
    const rainbowColors = [
        chalk_1.default.red.bold.italic,
        chalk_1.default.yellow.bold.italic,
        chalk_1.default.green.bold.italic,
        chalk_1.default.blue.bold.italic,
        chalk_1.default.magenta.bold.italic,
        chalk_1.default.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: rainbowText("\n*** Welcome To Number Guessing Game *** \nPlease guess a number between 1 to 5 : ")
    },
]);
//console.log(rainbowText("\n *** Welcome To Number Guessing Game *** "));
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk_1.default.italic.bold.greenBright("\nCongratulation! You guessed a correct number."));
}
else {
    console.log(chalk_1.default.italic.bold.yellowBright("\nPlease try again, You guessed a wrong number."));
}

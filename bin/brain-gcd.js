#!/usr/bin/env node

import getRandomNumber from './src/randomNumber.js';
import {
  rightAnswer, askName, greeting, letsTryAgain, congrat,
} from './src/cli.js';
import askForAnswer from './src/answer.js';

console.log('Welcome to the Brain Games!');
askName();
greeting();
console.log('Find the greatest common divisor of given numbers.');

const divisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  return divisor(num2, num1 % num2);
};

const gameOfGcd = () => {
  let result = 0;
  while (result < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const findGcd = divisor(num1, num2);

    const question = `Question: ${num1} ${num2}`;

    console.log(question);

    const answer = askForAnswer();
    const expression = String(findGcd);
    if (answer === expression) {
      console.log(rightAnswer());
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expression}. \n${letsTryAgain()}`);
      process.exit();
    }
  }
};

gameOfGcd();
console.log(congrat());

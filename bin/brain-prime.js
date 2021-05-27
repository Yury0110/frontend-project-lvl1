#!/usr/bin/env node

import getRandomPrime from './src/generateRandomPrime.js';
import {
  rightAnswer, askName, greeting, letsTryAgain, congrat,
} from './src/cli.js';
import askForAnswer from './src/answer.js';

console.log('Welcome to the Brain Games!');
askName();
greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getRandNum = () => Math.floor(Math.random() * 3571) + 1;

const gameOfPrime = () => {
  let result = 0;
  while (result < 3) {
    const randNum = getRandNum();
    const randomPrime = String(getRandomPrime(randNum));
    console.log(`Question: ${randNum}`);
    const answer = askForAnswer();
    if (answer === randomPrime) {
      console.log(rightAnswer());
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${randomPrime}. \n${letsTryAgain()}`);
      process.exit();
    }
  }
};
congrat();
gameOfPrime();

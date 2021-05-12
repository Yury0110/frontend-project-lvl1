#!/usr/bin/env node

import getRandomNumber from './src/randomNumber.js';
import { rightAnswer, wrongAnswer1, wrongAnswer2, incorrectAnswer, congrat } from './src/cli.js';
import askForAnswer from './src/answer.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const runNewRound = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = askForAnswer();
  if (answer === 'yes') {
    if (randomNumber % 2 === 0) {
      console.log(rightAnswer);
      return true;
    }
    if (randomNumber % 2 !== 0) {
      console.log(wrongAnswer1);
      return false;
    }
  }
  if (answer === 'no') {
    if (randomNumber % 2 === 0) {
      console.log(wrongAnswer2);
      return false;
    }
    if (randomNumber % 2 !== 0) {
      console.log(rightAnswer);
      return true;
    }
  }
  console.log(incorrectAnswer);
  return false;
};

const gamesOfParity = () => {
  let rightAnswersCount = 0;
  while (rightAnswersCount < 3) {
    const result = runNewRound();
    if (result === true) {
      rightAnswersCount += 1;
    } else if (result === false) {
      rightAnswersCount = 0;
    }
  }
};
gamesOfParity();

console.log(congrat);

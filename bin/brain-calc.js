#!/usr/bin/env node

import { askName, greeting, congrat, letsTryAgain } from './src/cli.js';
import randomExpression from './src/randomOperator.js';
import askForAnswer from './src/answer.js';

console.log('Welcome to the Brain Games!');
askName();
greeting();
console.log('What is the result of the expression?');

const runNewRound = () => {
  const question = randomExpression();
  console.log(question);
  const solutionOfExpression = String(eval(question));
  const answer = askForAnswer();

  if (answer === solutionOfExpression) {
    console.log('Correct!');
    return true;
  } 
  if (answer !== solutionOfExpression) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${solutionOfExpression}. \n${letsTryAgain()}`);
    return false;
  }
};

const gamesOfCalculate = () => {
  let rightAnswersCount = 0;
  while (rightAnswersCount < 3) {
    const result = runNewRound();
    if (result === true) {
      rightAnswersCount += 1;
    } else {
      process.exit();
    }
  }
};

gamesOfCalculate();

console.log(congrat());

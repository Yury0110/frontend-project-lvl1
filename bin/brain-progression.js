#!/usr/bin/env node

import getMissElement from './src/rNprogression.js';
import {
  rightAnswer, askName, greeting, letsTryAgain, congrat,
} from './src/cli.js';
import askForAnswer from './src/answer.js';
import arithProgr from './src/rNprogression.js';

console.log('Welcome to the Brain Games!');
askName();
greeting();
console.log('What number is missing in the progression?');

const findMissingNumber = (arr) => {
  const arrayLength = arr.length;
  const diff1 = arr[1] - arr[0];
  const diff2 = arr[arrayLength - 1] - arr[arrayLength - 2];
  if (diff1 !== diff2) {
    if (diff1 === 2 * diff2) {
      return arr[0] + diff2;
    }
    return arr[arrayLength - 1] - diff1;
  }
  for (let i = 1; i < arrayLength - 2; i += 1) {
    if (arr[i + 1] - arr[i] !== diff1) {
      return arr[i] + diff1;
    }
  }
  return arr[0];
};

const gameOfProgression = () => {
  let result = 0;
  while (result < 3) {
    const arr = arithProgr();

    const joinedArray = arr.join(' ');

    const question = () => `Question: ${joinedArray}`;

    console.log(question());

    const answer = askForAnswer();

    const expression = String(findMissingNumber(arr));
    if (answer === expression) {
      console.log(rightAnswer());
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expression}. \n${letsTryAgain()}`);
      process.exit();
    }
  }
};

gameOfProgression();
console.log(congrat());

import generateRandomNumber from '../utils.js';
import processOfGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const divisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  return divisor(num2, num1 % num2);
};
const compareAnswer = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const question = `${num1} ${num2}`;
  const rightAnswer = String(divisor(num1, num2));
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rule);
};

export default startGame;

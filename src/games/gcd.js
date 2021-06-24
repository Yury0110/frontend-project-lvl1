import randomNumber from '../randomNumber.js';
import processOfGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

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
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${num2}`;
  const rightAnswer = String(divisor(num1, num2));
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rules);
};

export default startGame;

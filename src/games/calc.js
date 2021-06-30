import processOfGame from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

export const getRandomOperator = (ops) => {
  const opIndex = Math.round(Math.random() * (ops.length - 1));
  const operator = ops[opIndex];
  return operator;
};

const ops = ['+', '-', '*'];

const compareAnswer = () => {
  const question = `${generateRandomNumber()} ${getRandomOperator(ops)} ${generateRandomNumber()}`;
  // eslint-disable-next-line no-eval
  const rightAnswer = String(eval(question));
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rule);
};

export default startGame;

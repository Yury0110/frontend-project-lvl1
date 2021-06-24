import processOfGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'What is the result of the expression?';

export const getRandomOperator = (ops) => {
  const opIndex = Math.round(Math.random() * (ops.length - 1));
  const operator = ops[opIndex];
  return operator;
};

const ops = ['+', '-', '*'];

const compareAnswer = () => {
  const question = `${randomNumber()} ${getRandomOperator(ops)} ${randomNumber()}`;
  // eslint-disable-next-line no-eval
  const rightAnswer = String(eval(question));
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rules);
};

export default startGame;

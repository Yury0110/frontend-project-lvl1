import randomNumber from './randomNumber.js';

const getRandomOperator = (ops) => {
  const opIndex = Math.round(Math.random() * (ops.length - 1));
  const operator = ops[opIndex];
  return operator;
};

const ops = ['+', '-', '*'];

const randomExpression = () => `Question: ${randomNumber()} ${getRandomOperator(ops)} ${randomNumber()}`;

export default randomExpression;

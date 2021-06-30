import processOfGame from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const compareAnswer = () => {
  const question = generateRandomNumber();
  const rightAnswer = isNumberEven(question);
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rule);
};

export default startGame;

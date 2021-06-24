import processOfGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const compareAnswer = () => {
  const question = randomNumber();
  const rightAnswer = isNumberEven(question);
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rules);
};

export default startGame;

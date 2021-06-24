import processOfGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomPrime = (randNum) => {
  let answer = 'yes';
  if (randNum === 1 || randNum === 2) {
    return answer;
  }
  for (let i = 2; i < randNum; i += 1) {
    if (randNum % i === 0) {
      answer = 'no';
      break;
    }
  }
  return answer;
};

const getRandNum = () => Math.floor(Math.random() * 3571) + 1;

const compareAnswer = () => {
  const question = getRandNum();
  const rightAnswer = getRandomPrime(question);
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rules);
};

export default startGame;

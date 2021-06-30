import processOfGame from '../index.js';

const rule = 'What number is missing in the progression?';

const randomNumber10 = () => Math.floor(Math.random() * 10) + 1;

const randomNumber50 = () => Math.floor(Math.random() * 50) + 1;

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomElement = getRandomArbitrary(2, 8);

const arithProgr = () => {
  const array = [];
  const randNumb10 = randomNumber10();
  const randNumb50 = randomNumber50();

  for (let i = randNumb50; array.length < 10; i += randNumb10) {
    array.push(i);
  }
  array[randomElement] = '..';
  return array;
};

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

const compareAnswer = () => {
  const array = arithProgr();
  const question = array.join(' ');
  const rightAnswer = String(findMissingNumber(array));
  return [question, rightAnswer];
};

const startGame = () => {
  processOfGame(compareAnswer, rule);
};

export default startGame;

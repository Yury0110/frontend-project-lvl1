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

export default arithProgr;

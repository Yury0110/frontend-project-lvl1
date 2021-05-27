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
export default getRandomPrime;

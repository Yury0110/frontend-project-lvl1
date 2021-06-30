import readlineSync from 'readline-sync';

const processOfGame = (generateNewRound, rule) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');

  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let rightAnswerCount = 0; rightAnswerCount < 3; rightAnswerCount += 1) {
    const [question, rightAnswer] = generateNewRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default processOfGame;

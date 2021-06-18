import {
  askName, greeting, letsTryAgain, congrat, askForAnswer,
} from './cli.js';

const processOfGame = (gamesOption, rules) => {
  console.log('Welcome to the Brain Games!');

  askName();

  greeting();

  console.log(rules);

  let result = 0;
  while (result < 3) {
    const [question, rightAnswer] = gamesOption();
    console.log(`Question: ${question}`);
    const answer = askForAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. \n${letsTryAgain()}`);
      process.exit();
    }
  }
  console.log(congrat());
};

export default processOfGame;

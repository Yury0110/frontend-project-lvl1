import readlineSync from 'readline-sync';

const processOfGame = (gamesOption, rules) => {
  console.log('Welcome to the Brain Games!');

  let name;

  const askName = () => { name = readlineSync.question('May I have your name?'); };

  askName();

  const greeting = () => console.log(`Hello, ${name}!`);

  greeting();

  console.log(rules);

  let result = 0;
  while (result < 3) {
    const [question, rightAnswer] = gamesOption();
    console.log(`Question: ${question}`);
    const askForAnswer = () => readlineSync.question('Your answer:');
    const answer = askForAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default processOfGame;

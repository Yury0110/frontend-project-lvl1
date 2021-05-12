import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?');

const greeting = `Hello, ${name}!`;

export default greeting;

export const rightAnswer = 'Correct!'; 
export const wrongAnswer1 = `'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}!`;
export const wrongAnswer2 = `'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name}!`;
export const congrat = `Congratulations ${name}!`;
export const incorrectAnswer = 'Incorrect answer!';
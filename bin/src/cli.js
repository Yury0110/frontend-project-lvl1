import readlineSync from 'readline-sync';

let name;
export const askName = () => { name = readlineSync.question('May I have your name?'); };

const greeting = `Hello, ${name}!`;

export default greeting;

export const rightAnswer = () => 'Correct!';
export const yesIsWrongAnswer = () => `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`;
export const noIsWrongAnswer = () => `'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`;
export const congrat = () => `Congratulations ${name}!`;
export const incorrectAnswer = () => 'Incorrect answer!';

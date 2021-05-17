import readlineSync from 'readline-sync';

let name;
export const askName = () => { name = readlineSync.question('May I have your name?'); };

export const greeting = () => console.log(`Hello, ${name}!`);

export const rightAnswer = () => 'Correct!';
export const yesIsWrongAnswer = () => `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`;
export const noIsWrongAnswer = () => `'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`;
export const congrat = () => `Congratulations, ${name}!`;
export const incorrectAnswer = () => 'Incorrect answer!';
export const letsTryAgain = () => `Let's try again, ${name}!`;

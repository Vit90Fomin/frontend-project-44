import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (number1, number2) => (number1 !== 0 ? calculateGCD(number2 % number1, number1) : number2);

const getRound = () => {
  const result = [];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;

  const correctAnswer = calculateGCD(number1, number2);

  result.push(question);
  result.push(correctAnswer.toString());

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

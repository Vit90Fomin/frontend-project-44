import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const condition = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => (num1 !== 0 ? calculateGCD(num2 % num1, num1) : num2);

const getRound = () => {
  const result = [];
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;

  const correctAnswer = calculateGCD(num1, num2);

  result.push(question);
  result.push(correctAnswer.toString());

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

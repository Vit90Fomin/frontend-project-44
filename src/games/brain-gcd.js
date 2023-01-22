import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (randomNumber1, randomNumber2) => {
  if (!randomNumber2) {
    return randomNumber1;
  }
  return calculateGCD(randomNumber2, randomNumber1 % randomNumber2);
};

const getRound = () => {
  const result = [];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  const question = `${randomNumber1} ${randomNumber2}`;

  const answer = calculateGCD(randomNumber1, randomNumber2);

  result.push(question);
  result.push(answer.toString());

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

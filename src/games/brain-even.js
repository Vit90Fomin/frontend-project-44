import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const result = [];

  const randomNumber = getRandomNumber(1, 100);

  const question = randomNumber;

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  result.push(question);
  result.push(correctAnswer);

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

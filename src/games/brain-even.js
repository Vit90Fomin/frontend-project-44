import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumberIsEven = (number) => number % 2 === 0;

const getRound = () => {
  const result = [];

  const randomNumber = getRandomNumber(1, 100);

  const question = randomNumber;

  const answer = checkNumberIsEven(question) ? 'yes' : 'no';

  result.push(question);
  result.push(answer);

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

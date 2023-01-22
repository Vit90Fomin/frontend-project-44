import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrimeNumber = (number) => {
  let result = true;
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const getRound = () => {
  const result = [];

  const question = getRandomNumber(1, 100);

  const answer = checkIsPrimeNumber(question) ? 'yes' : 'no';

  result.push(question);
  result.push(answer);

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

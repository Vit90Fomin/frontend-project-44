import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What number is missing in the progression?';

const randomProgression = (firstNumber, progressionStep, progressionLength) => {
  const progressionArray = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = firstNumber + progressionStep;
    progressionArray.push(nextNumber);
  }

  return progressionArray;
};

const getRound = () => {
  const result = [];
  const firstNumber = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const changeRandomIndex = '..';

  const question = randomProgression(firstNumber, progressionStep, progressionLength);

  const answer = question[randomIndex].toString();

  question[randomIndex] = changeRandomIndex;

  result.push(question.join(' '));
  result.push(answer);

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const condition = 'What number is missing in the progression?';

const getProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = firstNumber + progressionStep;
    progression.push(nextNumber);
  }

  return progression;
};

const getRound = () => {
  const result = [];
  const firstNumber = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const changeRandomIndex = '..';

  const question = getProgression(firstNumber, progressionStep, progressionLength);

  const correctAnswer = question[randomIndex].toString();

  question[randomIndex] = changeRandomIndex;

  result.push(question.join(' '));
  result.push(correctAnswer);

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

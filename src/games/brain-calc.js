import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What is the result of the expression?';

const calculate = (randomOperator, randomNumber1, randomNumber2) => {
  switch (randomOperator) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      console.log(`unknown operator status: '${randomOperator}'!`);
  }
};

const getRound = () => {
  const result = [];
  const setOperators = ['+', '-', '*'];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const numberOperator = getRandomNumber(0, setOperators.length - 1);
  const randomOperator = setOperators[numberOperator];

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  const answer = calculate(randomOperator, randomNumber1, randomNumber2);

  result.push(question);
  result.push(answer.toString());

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

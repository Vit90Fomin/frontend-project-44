import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const condition = 'What is the result of the expression?';

const calculate = (operator, number1, number2) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      console.log(`unknown operator: '${operator}'!`);
  }
  return rightAnswer;
};

const getRound = () => {
  const result = [];
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const numberOperator = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[numberOperator];

  const question = `${number1} ${randomOperator} ${number2}`;

  const correctAnswer = calculate(randomOperator, number1, number2);

  result.push(question);
  result.push(correctAnswer.toString());

  return result;
};

const launchGame = () => {
  startGame(condition, getRound);
};

export default launchGame;

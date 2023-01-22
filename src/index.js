import readlineSync from 'readline-sync';

const roundCouter = 3;

const startGame = (condition, getRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(condition);

  for (let i = 0; i < roundCouter; i += 1) {
    const [question, answer] = getRound();

    console.log('Question:', question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;

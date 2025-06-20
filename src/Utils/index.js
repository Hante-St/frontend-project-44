import readlineSync from 'readline-sync';
import getTheName from './cli.js';

const runGame = (gameDescription, genarateQuestionAndAnswer) => {
  const userName = getTheName();

  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = genarateQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userName}', '${usersAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;

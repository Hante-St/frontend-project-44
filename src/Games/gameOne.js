import runGame from '../Utils/index.js';
import getRandomInt from '../Utils/getRandomInt.js';

const Even = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameOne = () => {
  const number = getRandomInt(0, 20);
  const correctAnswer = Even(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => runGame(gameDescription, gameOne);

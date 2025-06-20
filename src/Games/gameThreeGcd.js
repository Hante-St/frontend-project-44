import runGame from '../Utils/index.js';
import getRandomInt from '../Utils/getRandomInt.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (numberOne, numberTwo) => {
  const question = `${numberOne} ${numberTwo}`;
  let correctAnswer = 1;

  const arr1 = [];
  const arr2 = [];
  let i = 1;

  while (i <= numberOne) {
    if (numberOne % i === 0) {
      arr1.push(i);
    }
    i += 1;
  }

  let f = 1;
  while (f <= numberTwo) {
    if (numberTwo % f === 0) {
      arr2.push(f);
    }
    f += 1;
  }

  let m = 0;

  while (m < arr1.length) {
    if (arr2.includes(arr1[m])) {
      correctAnswer = arr1[m];
    }
    m += 1;
  }

  return [question, correctAnswer];
};

const gameTwo = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const [question, correctAnswer] = gcd(numberOne, numberTwo);
  return [question, String(correctAnswer)];
};

export default () => runGame(gameDescription, gameTwo);

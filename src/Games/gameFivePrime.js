import runGame from "../Utils/index.js";
import getRandomInt from "../Utils/getRandomInt.js";

const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const Prime = (number) => {
  const question = `${number}`
  let correctAnswer = 'yes'
  if (number < 2) {
    correctAnswer = "no"
  return [question, correctAnswer]
}
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      correctAnswer = "no"
      break
    }
  }
  return [question, correctAnswer]
};

const gameFive = () => {
  const number = getRandomInt(0, 100)
  const [question, correctAnswer] = Prime(number)
  return [question, String(correctAnswer)]
}

export default () => runGame(gameDescription, gameFive)

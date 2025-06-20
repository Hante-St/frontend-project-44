import runGame from '../Utils/index.js'
import getRandomInt from '../Utils/getRandomInt.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const Prime = (number) => {
  const question = `${number}`
  let correctAnswer = 0
  if (number >= 2 && number % 2 !== 0 && number % 3 !== 0) {
    correctAnswer = 'yes'
  } 
  else {
    correctAnswer = 'no'
  }
  return [question, correctAnswer]
}

const gameFive = () => {
  const number = getRandomInt(0, 100)
  const [question, correctAnswer] = Prime(number)
  return [question, String(correctAnswer)]
}

export default () => runGame(gameDescription, gameFive)

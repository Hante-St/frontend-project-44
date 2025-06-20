import runGame from '../Utils/index.js'
import getRandomInt from '../Utils/getRandomInt.js'

const gameDescription = 'What is the result of the expression?'

const randomExp = ['+', '-', '*']
const Calc = (numberOne, numberTwo) => {
  const randomIndex = Math.floor(Math.random() * randomExp.length)
  const question = `${numberOne} ${randomExp[randomIndex]} ${numberTwo}`
  let correctAnswer = 0
  if (randomIndex === 0) {
    correctAnswer = numberOne + numberTwo
  }
  else if (randomIndex === 1) {
    correctAnswer = numberOne - numberTwo
  }
  else if (randomIndex === 2) {
    correctAnswer = numberOne * numberTwo
  }
  return [question, correctAnswer]
}

const gameTwo = () => {
  const numberOne = getRandomInt(0, 20)
  const numberTwo = getRandomInt(0, 20)
  const [question, correctAnswer] = Calc(numberOne, numberTwo)
  return [question, String(correctAnswer)]
}

export default () => runGame(gameDescription, gameTwo)

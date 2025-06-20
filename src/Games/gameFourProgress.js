import runGame from '../Utils/index.js'
import getRandomInt from '../Utils/getRandomInt.js'

const gameDescription = 'What number is missing in the progression?'

const progress = (firstNumber, step, questionNumber) => {
  const arr = []

  arr.push(firstNumber)

  let i = 1
  let firstNumber1 = firstNumber
  while (i < 8) {
    firstNumber1 += step
    arr.push(firstNumber1)
    i += 1
  }

  const arrQuestion = []
  let m = 0
  while (m < arr.length) {
    if (m === questionNumber) {
      arrQuestion.push('..')
    }
    else {
      arrQuestion.push(arr[m])
    }
    m += 1
  }
  const output = Array.from(arrQuestion).join(' ')
  const question = `${output}`
  const correctAnswer = arr[questionNumber]

  return [question, correctAnswer]
}

const gameFour = () => {
  const firstNumber = getRandomInt(0, 20)
  const step = getRandomInt(2, 10)
  const questionNumber = getRandomInt(0, 7)
  const [question, correctAnswer] = progress(firstNumber, step, questionNumber)
  return [question, String(correctAnswer)]
}

export default () => runGame(gameDescription, gameFour)

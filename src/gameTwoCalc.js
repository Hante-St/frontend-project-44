import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameTwoCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello,', name);
  console.log('What is the result of the expression?');
  const randomExp = ['+', '-', '*'];
  let i = 0;
  while (i < 3) {
    let numberOne = getRandomInt(0, 10);
    let numberTwo = getRandomInt(0, 10);
    let randomIndex = Math.floor(Math.random() * randomExp.length);
    console.log('Question: ', numberOne, randomExp[randomIndex], numberTwo);
    let usersAnswer = readlineSync.question('Answer: ');
    if (randomIndex === 0) {
      let rightAnswer = numberOne + numberTwo;
      if (Number(usersAnswer) === Number(rightAnswer)) {
        console.log('Correct!');
      } else {
        console.log("'", usersAnswer, "'", "is wrong answer ;(. Correct answer was ", "'", rightAnswer, "'");
        return false;
      }
    } else if (randomIndex === 1) {
      let rightAnswer = numberOne - numberTwo;
      if (Number(usersAnswer) === Number(rightAnswer)) {
        console.log('Correct!');
      } else {
        console.log("'", usersAnswer, "'", "is wrong answer ;(. Correct answer was ", "'", rightAnswer, "'");
        return false;
      }
    } else if (randomIndex === 2) {
      let rightAnswer = numberOne * numberTwo;
      if (Number(usersAnswer) === Number(rightAnswer)) {
        console.log('Correct!');
      } else {
        console.log("'", usersAnswer, "'", "is wrong answer ;(. Correct answer was ", "'", rightAnswer, "'");
        return false;
      }
    };
    i = i + 1;
  };
  console.log("Congratulations, ", name);
};

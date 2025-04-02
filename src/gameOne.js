import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameOne = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello,", name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswer = "";
  for (let i = 0; i < 3; i += 1) {
    let mathRandom = getRandomInt(0, 20);
    console.log("Question: ", mathRandom);
    const rightAnswer = mathRandom/2>=0 ? "yes" : "no";
        
    let usersAnswer = readlineSync.question("Answer: ");
    if (usersAnswer === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(usersAnswer, "is wrong answer ;(. Correct answer was ", rightAnswer);
      console.log("Let's try again, ", name, "!");
      return false;
    };
  };
  console.log("Congratulations, ", name, "!");
return true;
};

export default gameOne;

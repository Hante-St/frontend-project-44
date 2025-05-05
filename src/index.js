import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const playersName = () => {
const name = readlineSync.question('May I have your name? ');
};

const hello = () => {
console.log('Hello,', name);
};

const bye = () => {
  console.log('Congratulations, ' + name);
};

export { welcome, playersName, hello, bye };
import readlineSync from 'readline-sync';

const getTheName = () => {

    const name = readlineSync.question('May I have your name? ');
    console.log('Hello,', name);
};
export default getTheName;
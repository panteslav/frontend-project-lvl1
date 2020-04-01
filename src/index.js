import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const greet = () => {
  console.log(`Hello, ${userName}!`);
};

const playEven = () => {
  const printQuestion = (num) => console.log(`Question: ${num}`);
  const isEven = (num) => (num % 2) ? false : true;
  const getAnswer = () => readlineSync.question(`Your answer: `);
  printAnswer = (answer) => console.log(`Your answer: ${answer}`);
  
  const evaluateUserAnswer = (userAnswer, correctAnswer) => {
    if (!(userAnswer === correctAnswer)) {
      console.log(`${userAnswer} is a wrong answer ;(. Correct answer is `)
    }
  
      };

  commentOnUserAnswer = (answer) => {
    if (!answer) {

    }

    console.log('Correct!');
      correct += 1;
  }





  const giveInstruction = console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getCorrectAnswer = (num) => isEven(num) ? 'yes' : 'no';

  let correct = 0;
  while (correct < 3) {
    const random = Math.random();
    const userAnswer = readlineSync.question(`Question: ${random}`);

    
    if(isEven(+answer)) {

    } 
  }
  
};

export {
  greet as default, ,
};

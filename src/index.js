import readlineSync from 'readline-sync';
// import _ from 'lodash';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const greet = () => {
  console.log(`Hello, ${userName}!`);
};

const playGame = (instructionText, questionExpression, correctCondition) => {
  let correctCount = 0;
  const printInstruction = () => console.log(instructionText);

  const playRound = () => {
    const currentQuestionExpression = questionExpression();
    const correctAnswer = correctCondition(currentQuestionExpression);

    const printQuestion = () => console.log(`Question: ${currentQuestionExpression}`);
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const evaluateUserAnswer = () => {
      const userAnswer = getUserAnswer();
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
        return;
      }

      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`);
      correctCount = 0;
    };

    printQuestion();
    evaluateUserAnswer();
  };


  printInstruction();
  while (correctCount < 3) {
    playRound();
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  greet as default, playGame,
};


// import readlineSync from 'readline-sync';
// import _ from 'lodash';

// const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

// const greet = () => {
//   console.log(`Hello, ${userName}!`);
// };


// const playGame = (instructionText, questionGeneration, correctCondition) => {
//   let correctCount = 0;

//   const printInstruction = () => console.log(instructionText);
//   const playRound = () => {
//     const questionExpression = _.random(1, 1000);
//     const getCorrectAnswer = () => {
//       if (questionExpression % 2) {
//         return 'no';
//       }
//       return 'yes';
//     };
//     const correctAnswer = getCorrectAnswer();
//     let userAnswer;

//     const getUserAnswer = () => {
//       userAnswer = readlineSync.question('Your answer: ');
//     };
//     const printQuestion = () => console.log(`Question: ${questionExpression}`);
//     const evaluateUserAnswer = () => {
//       if (userAnswer.toLowerCase() === correctAnswer) {
//         console.log('Correct!');
//         correctCount += 1;
//         return;
//       }

//       console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`);
//       correctCount = 0;
//     };

//     printQuestion();
//     getUserAnswer();
//     evaluateUserAnswer();
//   };


//   printInstruction();
//   while (correctCount < 3) {
//     playRound();
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

// export {
//   greet as default, playGame,
// };

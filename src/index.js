import readlineSync from 'readline-sync';

// general logic
export default (instructionText, getQuestionExpression, getCorrectAnswer) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nPlease, type in your name here ...  ');
  const greet = () => {
    console.log(`Hello, ${userName}!`);
  };

  let correctCount = 0;

  const printInstruction = () => console.log(instructionText);

  const play = () => {
    const currentQuestionExpression = getQuestionExpression();
    const correctAnswer = getCorrectAnswer(currentQuestionExpression);

    const printQuestion = () => console.log(`Question: ${currentQuestionExpression}`);
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const evaluateUserAnswer = () => {
      const userAnswer = getUserAnswer();
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
        return;
      }

      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`);
      correctCount = 0;
    };

    printQuestion();
    evaluateUserAnswer();

    while (correctCount < 3) play();
  };

  const printCongratulations = () => {
    console.log(`Congratulations, ${userName}!`);
  };

  greet();
  printInstruction();
  play();
  printCongratulations();
};

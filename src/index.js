import readlineSync from 'readline-sync';

const WIN_SCORE = 3;

export default (instructionText, getQnA) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nPlease, type in your name here ...  ');
  const greet = () => {
    console.log(`Hello, ${userName}!`);
  };

  let correctCount = 0;

  const printInstruction = () => console.log(instructionText);

  const play = () => {
    const [question, answer] = getQnA();

    const printQuestion = () => console.log(`Question: ${question}`);
    const getUserAnswer = () => readlineSync.question('Your answer: ');

    const evaluateUserAnswer = () => {
      const userAnswer = getUserAnswer();
      if (userAnswer === answer) {
        console.log('Correct!');
        correctCount += 1;
        return;
      }

      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer is "${answer}".\nLet's try again, ${userName}!`);
      correctCount = 0;
    };

    printQuestion();
    evaluateUserAnswer();

    while (correctCount < WIN_SCORE) {
      play();
    }
  };

  const printCongratulations = () => {
    console.log(`Congratulations, ${userName}!`);
  };

  greet();
  printInstruction();
  play();
  printCongratulations();
};

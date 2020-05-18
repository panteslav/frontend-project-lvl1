import readlineSync from 'readline-sync';

const WIN_SCORE = 3;

export default (instructionText, getQnA) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('Please, type in your name here ...  ');
  console.log(`Hello, ${userName}!`);
  console.log(instructionText);

  let currentScore = 0;
  const play = () => {
    const [question, answer] = getQnA();

    const evaluateUserAnswer = () => {
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== answer) {
        console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer is "${answer}".`);
        console.log(`Let's try again, ${userName}!`);
        currentScore = 0;
        return;
      }

      console.log('Correct!');
      currentScore += 1;
    };

    console.log(`Question: ${question}`);
    evaluateUserAnswer();

    while (currentScore < WIN_SCORE) {
      play();
    }
  };

  play();
  console.log(`Congratulations, ${userName}!`);
};

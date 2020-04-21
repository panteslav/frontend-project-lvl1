import readlineSync from 'readline-sync';
import _ from 'lodash';

// general logic
const userName = readlineSync.question('Welcome to the Brain Games!\nPlease, type in your name here ...  ');

const greet = () => {
  console.log(`Hello, ${userName}!`);
};

const playGame = (instructionText, questionExpression, defineCorrectAnswer) => {
  let correctCount = 0;
  const printInstruction = () => console.log(instructionText);

  const playNewRound = () => {
    const currentQuestionExpression = questionExpression();
    const correctAnswer = defineCorrectAnswer(currentQuestionExpression);

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
    playNewRound();
  }
  console.log(`Congratulations, ${userName}!`);
};

// brain-even specific logic
const playEven = () => {
  const instructionText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionExpression = () => _.random(1, 1000);

  const defineCorrectAnswer = (expression) => {
    if (expression % 2) {
      return 'no';
    }
    return 'yes';
  };

  playGame(instructionText, questionExpression, defineCorrectAnswer);
};

// brain-calc specific logic
const playCalc = () => {
  const symbols = ['+', '-', '*'];
  const getRandomSymbol = () => symbols[_.random(2)];

  const instructionText = 'What is the result of the expression?';
  const questionExpression = () => `${_.random(1, 1000)} ${getRandomSymbol()} ${_.random(1, 1000)}`;
  const defineCorrectAnswer = (expression) => {
    const elements = expression.split(' ');
    const [firstNum, symbol, secondNum] = elements;
    let answer;

    switch (symbol) {
      case '+':
        answer = +firstNum + +secondNum;
        break;
      case '-':
        answer = firstNum - secondNum;
        break;
      case '*':
        answer = firstNum * secondNum;
        break;
      default: throw new Error(`error parsing expression ${firstNum} ${symbol} ${secondNum}`);
    }

    return answer.toString();
  };

  playGame(instructionText, questionExpression, defineCorrectAnswer);
};

// brain-gcd specific logic
const playGCD = () => {
  const instructionText = 'Find the greatest common divisor of given numbers.';
  const questionExpression = () => `${_.random(1, 100)}, ${_.random(1, 100)}`;
  const defineCorrectAnswer = (expression) => {
    const [num1, num2] = expression.split(' ');

    const findGCD = (n1, n2) => {
      let x = parseInt(n1, 10);
      let y = parseInt(n2, 10);

      while (x && y) {
        if (x > y) x %= y;
        else y %= x;
      }

      return x || y;
    };

    return findGCD(num1, num2).toString();
  };


  playGame(instructionText, questionExpression, defineCorrectAnswer);
};

// brain-gcd specific logic
const playProgression = () => {
  const removeOneElement = (arr) => {
    const array = arr;
    array[_.random(0, array.length)] = '..';
    return array;
  };

  const generateProgression = () => {
    const progression = [];
    const firstNum = _.random(0, 500);
    const ratio = _.random(0, 500);

    for (let i = 0, n = firstNum; i < 10; i += 1, n += ratio) {
      progression.push(n);
    }
    return removeOneElement(progression).join(' ');
  };

  const instructionText = 'What number is missing in the progression?';
  const questionExpression = () => generateProgression();
  const defineCorrectAnswer = (expression) => {
    const arr = expression.split(' ');
    const blankPosition = arr.indexOf('..', 0);
    let correctAnswer;
    const ratio = blankPosition > 5 ? arr[1] - arr[0] : arr[9] - arr[8];


    if (blankPosition > 5) correctAnswer = +arr[blankPosition - 1] + ratio;
    else correctAnswer = arr[blankPosition + 1] - ratio;

    return correctAnswer.toString();
  };

  playGame(instructionText, questionExpression, defineCorrectAnswer);
};

// brain-prime specific logic
const playPrime = () => {
  const instructionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionExpression = () => `${_.random(0, 1000)}`;
  const defineCorrectAnswer = (expression) => {
    const isPrime = (exp) => {
      const num = parseInt(exp, 10);

      let answer = true;
      if (num === 1) return 'yes';

      for (let i = 2; i < Math.ceil(num / 2); i += 1) {
        if (num % i === 0) answer = false;
      }

      return answer === true ? 'yes' : 'no';
    };

    return isPrime(expression);
  };

  playGame(instructionText, questionExpression, defineCorrectAnswer);
};

export {
  greet as default, playEven, playCalc, playGCD, playProgression, playPrime,
};

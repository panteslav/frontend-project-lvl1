// brain-prime specific logic
import _ from 'lodash';
import playGame from '../index.js';

const instructionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionExpression = () => `${_.random(0, 1000)}`;
const getCorrectAnswer = (expression) => {
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

export default () => {
  playGame(instructionText, getQuestionExpression, getCorrectAnswer);
};

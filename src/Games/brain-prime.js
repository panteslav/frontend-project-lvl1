// brain-prime specific logic
import _ from 'lodash';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num === 1) return true;

  let answer = true;
  for (let i = 2; i < Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      answer = false;
      break;
    }
  }

  return answer;
};

const instructionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionExpression = () => `${_.random(0, 1000)}`;
const getCorrectAnswer = (expression) => {
  const num = parseInt(expression, 10);

  return isPrime(num) ? 'yes' : 'no';
};

export default () => {
  playGame(instructionText, getQuestionExpression, getCorrectAnswer);
};

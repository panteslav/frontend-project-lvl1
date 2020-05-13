// brain-prime specific logic
import _ from 'lodash';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;

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

const getQnA = () => {
  const questionExpression = _.random(0, 1000);
  const correctAnswer = isPrime(questionExpression) ? 'yes' : 'no';

  return [questionExpression, correctAnswer];
};


export default () => {
  playGame(instructionText, getQnA);
};

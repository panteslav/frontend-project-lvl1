// brain-prime specific logic
import _ from 'lodash';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < Math.ceil(num / 2) + 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};


const instructionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQnA = () => {
  const question = _.random(0, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};


export default () => {
  playGame(instructionText, getQnA);
};

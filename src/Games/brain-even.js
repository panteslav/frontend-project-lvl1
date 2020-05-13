import _ from 'lodash';
import playGame from '../index.js';

const instructionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2) {
    return false;
  }
  return true;
};

const getQnA = () => {
  const question = _.random(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

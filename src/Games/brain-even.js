import _ from 'lodash';
import playGame from '../index.js';

const instructionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQnA = () => {
  const question = _.random(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

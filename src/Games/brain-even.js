// brain-even specific logic
import _ from 'lodash';
import playGame from '../index.js';

const instructionText = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionExpression = () => _.random(1, 1000);

const getCorrectAnswer = (expression) => {
  if (expression % 2) {
    return 'no';
  }
  return 'yes';
};

export default () => {
  playGame(instructionText, getQuestionExpression, getCorrectAnswer);
};

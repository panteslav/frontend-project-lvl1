// brain-progression specific logic
import _ from 'lodash';
import playGame from '../index.js';

const removeOneElement = (arr) => {
  const array = arr;
  array[_.random(0, array.length)] = '..';
  return array;
};

const progressionLength = 10;

const generateProgression = () => {
  const progression = [];
  const firstNum = _.random(0, 500);
  const ratio = _.random(0, 500);

  for (let i = 0, n = firstNum; i < progressionLength; i += 1, n += ratio) {
    progression.push(n);
  }
  return removeOneElement(progression).join(' ');
};

const defineRatio = (progression, blank) => {
  if (blank > (progressionLength / 2)) {
    return progression[1] - progression[0];
  }

  return progression[9] - progression[8];
};

const instructionText = 'What number is missing in the progression?';
const getQuestionExpression = () => generateProgression();
const defineCorrectAnswer = (expression) => {
  const elements = expression.split(' ');
  const [firstElement, secondElement] = elements;
  const blankPosition = elements.indexOf('..', 0);
  const ratio = defineRatio(elements, blankPosition);

  let correctAnswer;
  if (blankPosition === 0) {
    correctAnswer = secondElement - ratio;
  } else correctAnswer = +firstElement + blankPosition * ratio;

  return correctAnswer.toString();
};

export default () => {
  playGame(instructionText, getQuestionExpression, defineCorrectAnswer);
};

// brain-progression specific logic
import _ from 'lodash';
import playGame from '../index.js';

export default () => {
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

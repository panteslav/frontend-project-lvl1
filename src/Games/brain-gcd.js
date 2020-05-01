// brain-gcd specific logic
import _ from 'lodash';
import playGame from '../index.js';

const findGCD = (num1, num2) => {
  let x = parseInt(num1, 10);
  let y = parseInt(num2, 10);

  while (x && y) {
    if (x > y) x %= y;
    else y %= x;
  }

  return x || y;
};

const instructionText = 'Find the greatest common divisor of given numbers.';
const getQuestionExpression = () => `${_.random(1, 100)}, ${_.random(1, 100)}`;
const getCorrectAnswer = (expression) => {
  const [num1, num2] = expression.split(' ');

  return findGCD(num1, num2).toString();
};

export default () => {
  playGame(instructionText, getQuestionExpression, getCorrectAnswer);
};

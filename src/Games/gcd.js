import _ from 'lodash';
import playGame from '../index.js';

const findGCD = (num1, num2) => {
  let x = num1;
  let y = num2;

  while (x && y) {
    if (x > y) {
      x %= y;
    } else y %= x;
  }

  return x || y;
};

const instructionText = 'Find the greatest common divisor of given numbers.';

const getQnA = () => {
  const firstOperand = _.random(1, 100);
  const secondOperand = _.random(1, 100);

  const answer = findGCD(firstOperand, secondOperand).toString();
  const question = [firstOperand, secondOperand].join(', ');

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

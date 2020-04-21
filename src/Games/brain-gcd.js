// brain-gcd specific logic
import _ from 'lodash';
import playGame from '../index.js';

export default () => {
  const instructionText = 'Find the greatest common divisor of given numbers.';
  const getQuestionExpression = () => `${_.random(1, 100)}, ${_.random(1, 100)}`;
  const getCorrectAnswer = (expression) => {
    const [num1, num2] = expression.split(' ');

    const findGCD = (n1, n2) => {
      let x = parseInt(n1, 10);
      let y = parseInt(n2, 10);

      while (x && y) {
        if (x > y) x %= y;
        else y %= x;
      }

      return x || y;
    };

    return findGCD(num1, num2).toString();
  };

  playGame(instructionText, getQuestionExpression, getCorrectAnswer);
};

import _ from 'lodash';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[_.random(operators.length - 1)];

const calculate = (firstOperand, operator, secondOperand) => {
  let answer;

  switch (operator) {
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default: throw new Error(`error while parsing expression ${firstOperand} ${operator} ${secondOperand}`);
  }

  return answer;
};

const instructionText = 'What is the result of the expression?';

const getQnA = () => {
  const firstOperand = _.random(1, 1000);
  const operator = getRandomOperator();
  const secondOperand = _.random(1, 1000);

  const question = [firstOperand, operator, secondOperand].join(' ');
  const answer = calculate(firstOperand, operator, secondOperand).toString();

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

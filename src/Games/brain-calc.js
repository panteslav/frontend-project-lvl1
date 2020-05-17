import _ from 'lodash';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[_.random(operators.length - 1)];

const getCorrectAnswer = ([firstNum, operator, secondNum]) => {
  let answer;

  switch (operator) {
    case '+':
      answer = +firstNum + +secondNum;
      break;
    case '-':
      answer = firstNum - secondNum;
      break;
    case '*':
      answer = firstNum * secondNum;
      break;
    default: throw new Error(`error while parsing expression ${firstNum} ${operator} ${secondNum}`);
  }

  return answer.toString();
};

const instructionText = 'What is the result of the expression?';

const getQnA = () => {
  const firstOperand = _.random(1, 1000);
  const operator = getRandomOperator();
  const secondOperand = _.random(1, 1000);

  const questionElements = [firstOperand, operator, secondOperand];

  const answer = getCorrectAnswer(questionElements);
  const question = questionElements.join(' ');

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

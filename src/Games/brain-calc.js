// brain-calc specific logic
import _ from 'lodash';
import playGame from '../index.js';

const symbols = ['+', '-', '*'];
const getRandomSymbol = () => symbols[_.random(symbols.length - 1)];

const instructionText = 'What is the result of the expression?';
const getQuestionExpression = () => `${_.random(1, 1000)} ${getRandomSymbol()} ${_.random(1, 1000)}`;
const getCorrectAnswer = (expression) => {
  const elements = expression.split(' ');
  const [firstNum, symbol, secondNum] = elements;
  let answer;

  switch (symbol) {
    case '+':
      answer = +firstNum + +secondNum;
      break;
    case '-':
      answer = firstNum - secondNum;
      break;
    case '*':
      answer = firstNum * secondNum;
      break;
    default: throw new Error(`error while parsing expression ${firstNum} ${symbol} ${secondNum}`);
  }

  return answer.toString();
};

export default () => {
  playGame(instructionText, getQuestionExpression, getCorrectAnswer);
};

import _ from 'lodash';
import playGame from '../index.js';

const symbols = ['+', '-', '*'];
const getRandomSymbol = () => symbols[_.random(symbols.length - 1)];

const getCorrectAnswer = ([firstNum, symbol, secondNum]) => {
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

const instructionText = 'What is the result of the expression?';

const getQnA = () => {
  const firstOperand = _.random(1, 1000);
  const operator = getRandomSymbol();
  const secondOperand = _.random(1, 1000);

  const questionElements = [firstOperand, operator, secondOperand];

  const answer = getCorrectAnswer(questionElements);
  const question = questionElements.join(' ');

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

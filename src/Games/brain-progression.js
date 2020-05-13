import _ from 'lodash';
import playGame from '../index.js';

const PROGRESSION_LENGTH = 10;

const generateProgression = () => {
  const progression = [];
  const firstNum = _.random(0, 500);
  const ratio = _.random(0, 500);

  for (let i = 0, n = firstNum; i < PROGRESSION_LENGTH; i += 1, n += ratio) {
    progression.push(n);
  }
  return progression;
};

const handleProgression = (progression) => {
  const numbers = progression;
  const randomPosition = _.random(0, numbers.length - 1);
  const elementToRemove = numbers[randomPosition];
  numbers[randomPosition] = '..';

  return [numbers, elementToRemove];
};

const instructionText = 'What number is missing in the progression?';

const getQnA = () => {
  const baseProgression = generateProgression();
  let [question, answer] = handleProgression(baseProgression);
  question = question.join(' ');
  answer = answer.toString();

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

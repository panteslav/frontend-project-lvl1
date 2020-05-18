import _ from 'lodash';
import playGame from '../index.js';

const PROGRESSION_LENGTH = 10;

const generateProgression = (start, ratio, length) => {
  const progression = [];
  for (let i = 0, n = start; i < length; i += 1, n += ratio) {
    progression.push(n);
  }

  return progression;
};

const instructionText = 'What number is missing in the progression?';

const getQnA = () => {
  const firstNum = _.random(0, 500);
  const ratio = _.random(0, 500);
  const progression = generateProgression(firstNum, ratio, PROGRESSION_LENGTH);

  const randomPosition = _.random(0, progression.length - 1);
  const answer = progression.splice(randomPosition, 1, '..').toString();
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
};

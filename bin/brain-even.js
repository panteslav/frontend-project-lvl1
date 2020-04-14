#!/usr/bin/env node
import _ from 'lodash';
import greet, { playGame } from '../src/index.js';

const instructionText = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionExpression = () => _.random(1, 1000);

const correctCondition = (expression) => {
  if (expression % 2) {
    return 'no';
  }
  return 'yes';
};

greet();
playGame(instructionText, questionExpression, correctCondition);

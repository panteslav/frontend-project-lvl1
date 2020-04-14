#!/usr/bin/env node
import _ from 'lodash';
import greet, { playGame } from '../src/index.js';

const instructionText = 'What is the result of the expression?';
const questionExpression = () => `${_.random(1, 1000)} + ${_.random(1, 1000)}`;

const correctCondition = (expression) => eval(expression).toString();

greet();
playGame(instructionText, questionExpression, correctCondition);

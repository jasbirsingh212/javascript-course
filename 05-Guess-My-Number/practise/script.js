// @ts-nocheck
'use strict';

let score = 20;
let highscore = 0;
let guessAnswer = Math.trunc(Math.random() * 30) + 1;

const displayMessage = (className, message) => {
  document.querySelector(className).innerHTML = message;
};

const bodyStyle = color => {
  document.querySelector('body').style.background = color;
};

const getValue = () => {
  return document.querySelector('.guess').value;
};

const handleBtnCheck = () => {
  const guessValue = Number(getValue());

  if (!guessValue) {
    displayMessage('.message', 'No Value Entered');
  } else {
    if (guessValue === guessAnswer) {
      displayMessage('.message', 'Correct Answer');
      bodyStyle('#60b347');
      document.querySelector('.guess').disabled = true;
      displayMessage('.number', String(guessAnswer));
      document.querySelector('.number').style.color = 'red';

      if (score > highscore) {
        highscore = score;
        displayMessage('.highscore', String(highscore));
      }
    } else {
      displayMessage(
        '.message',
        `${guessValue > guessAnswer ? 'TOO HIGH' : 'TOO LOW'}`
      );
      if (score > 1) {
        score--;
        displayMessage('.score', String(score));
      }
    }
  }
};

const handleBtnAgain = () => {
  score = 20;
  guessAnswer = Math.trunc(Math.random() * 30) + 1;
  displayMessage('.score', String(score));
  displayMessage('.message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  bodyStyle('#222');
  document.querySelector('.guess').disabled = false;
  displayMessage('.number', '?');
  document.querySelector('.number').style.color = '#222';
};

document.querySelector('.check').addEventListener('click', handleBtnCheck);
document.querySelector('.again').addEventListener('click', handleBtnAgain);

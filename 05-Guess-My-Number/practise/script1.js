'use strict';

let guessNumber,
  score = 20,
  highScore = 0;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const inputGuessNumber = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const showGuessNumber = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');

const displayMessage = msg => (messageElement.textContent = msg);
const bodyColorChange = color => (bodyElement.style.backgroundColor = color);
const showGuessNumberChange = number => (showGuessNumber.textContent = number);
const displayHighScore = number => (highScoreElement.textContent = number);
const displayScore = number => (scoreElement.textContent = number);

const getRandomNumber = () => Math.trunc(Math.random() * 30) + 1;
guessNumber = getRandomNumber();

const handleCheckClick = () => {
  const userInput = inputGuessNumber.value;

  if (userInput === '') {
    displayMessage('Please Enter Some Number Btw 1 to 30.');
    return;
  }

  const userNumber = Number(userInput);

  if (score <= 0) {
    displayMessage('You lost the game !');
    return;
  }

  if (userNumber === guessNumber) {
    bodyColorChange('green');
    showGuessNumberChange(guessNumber);
    displayMessage('Correct Number Guessed ⭐!');

    if (score > highScore) {
      highScore = score;
      displayHighScore(score);
      score--;
    }

    btnCheck.removeEventListener('click', handleCheckClick);
  } else if (userNumber > guessNumber) {
    displayMessage('Too High !');
    score--;
    displayScore(score);
  } else {
    displayMessage('Too Low !');
    score--;
    displayScore(score);
  }
};

const handleAgainClick = () => {
  bodyColorChange('#222');
  showGuessNumberChange('?');
  displayMessage('Start guessing...');
  highScore = 0;
  score = 20;
  displayHighScore(highScore);
  displayScore(score);
  inputGuessNumber.value = '';
  guessNumber = getRandomNumber();
  btnCheck.addEventListener('click', handleCheckClick);
};

btnCheck.addEventListener('click', handleCheckClick);
btnAgain.addEventListener('click', handleAgainClick);

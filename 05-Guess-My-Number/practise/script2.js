let score = 20,
  highScore = 0,
  guessNumber = 0;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const inputGuessNumber = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const showGuessNumber = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');

const getInputValue = () => Number(inputGuessNumber.value);
const displayMessage = msg => (messageElement.textContent = msg);
const displayScore = number => (scoreElement.textContent = number);
const displayHighScore = number => (highScoreElement.textContent = number);
const bodyColorChange = color => (bodyElement.style.backgroundColor = color);
const showGuessNumberChange = number => (showGuessNumber.textContent = number);
const guessNumberFunction = () => Math.trunc(Math.random() * 30) + 1;

guessNumber = guessNumberFunction();

const handleCheckClick = () => {
  if (score <= 1) {
    displayMessage('You Lost the Game!');
    bodyColorChange('red');
    btnCheck.disabled = true;
    inputGuessNumber.disabled = true;
    displayScore(--score);
    return;
  }

  const userInput = getInputValue();

  if (userInput <= 0 || userInput > 30) {
    displayMessage('Please Enter Some Number Btw 1 to 30.');
    return;
  }

  if (userInput === guessNumber) {
    bodyColorChange('green');
    showGuessNumberChange(guessNumber);
    displayMessage('Correct Number Guessed ⭐!');
    btnCheck.disabled = true;
    inputGuessNumber.disabled = true;

    if (score > highScore) {
      highScore = score;
      displayHighScore(--highScore);
    }
  } else if (userInput > guessNumber) {
    displayMessage('Number is Too High! 📈');
  } else {
    displayMessage('Number is Too Low! 📉');
  }
  displayScore(--score);
};

const handleAgainClick = () => {
  score = 20;
  guessNumber = guessNumberFunction();
  displayScore(score);
  showGuessNumberChange('?');
  displayMessage('Start Guessing...');
  bodyColorChange('#222');
  inputGuessNumber.value = '';
  btnCheck.disabled = false;
  inputGuessNumber.disabled = false;
};

btnCheck.addEventListener('click', handleCheckClick);
btnAgain.addEventListener('click', handleAgainClick);

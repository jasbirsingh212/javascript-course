'use strict';

let player1Score = 0,
  player1CurrentScore = 0,
  player2Score = 0,
  player2CurrentScore = 0,
  arrPlayerCurrentScore = [player1CurrentScore, player2CurrentScore],
  arrPlayerScore = [player1Score, player2Score],
  rollDice = 0,
  activePlayer = 0;

const getElementByQuery = identifier => document.querySelector(identifier);

const player1Section = getElementByQuery('.player--0');
const player2Section = getElementByQuery('.player--1');
const arrPlayer = [player1Section, player2Section];

const player1ScoreElement = getElementByQuery('#score--0');
const player2ScoreElement = getElementByQuery('#score--1');

const player1CurrentScoreElement = getElementByQuery('#current--0');
const player2CurrentScoreElement = getElementByQuery('#current--1');

const btnRollDice = getElementByQuery('.btn--roll');
const btnNewGame = getElementByQuery('.btn--new');
const btnHoldScore = getElementByQuery('.btn--hold');

const imgDice = getElementByQuery('.dice');

const getDiceRoll = () => Math.trunc(Math.random() * 6) + 1;

const setDiceImage = roll => {
  imgDice.classList.remove('hide');

  switch (roll) {
    case 1:
      imgDice.src = './dice-1.png';
      break;
    case 2:
      imgDice.src = './dice-2.png';
      break;
    case 3:
      imgDice.src = './dice-3.png';
      break;
    case 4:
      imgDice.src = './dice-4.png';
      break;
    case 5:
      imgDice.src = './dice-5.png';
      break;
    default:
      imgDice.src = './dice-6.png';
      break;
  }
};

const updateActivePlayer = () => {
  player1Section.classList.toggle('player--active');
  player2Section.classList.toggle('player--active');
};

const updateCurrentScore = (activePlayer, diceRolledValue) => {
  arrPlayerCurrentScore[activePlayer] += diceRolledValue;
  getElementByQuery(`#current--${activePlayer}`).textContent =
    arrPlayerCurrentScore[activePlayer];
};

const updateScore = activePlayer => {
  arrPlayerScore[activePlayer] += arrPlayerCurrentScore[activePlayer];
  getElementByQuery(`#score--${activePlayer}`).textContent =
    arrPlayerScore[activePlayer];
};

const updateWinner = () => {
  arrPlayer[activePlayer].classList.add('player--winner');
};

const removeWinner = () => {
  arrPlayer[0].classList.remove('player--winner');
  arrPlayer[1].classList.remove('player--winner');
};

const handleDisableRollDiceBtn = action => {
  btnRollDice.disabled = action;
};

const switchActivePlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const handleDisableHoldBtn = action => {
  btnHoldScore.disabled = action;
};

const handleRollDice = () => {
  const diceRolledValue = getDiceRoll();
  setDiceImage(diceRolledValue);

  if (diceRolledValue === 1) {
    arrPlayerCurrentScore[activePlayer] = 0;
    updateCurrentScore(activePlayer, 0);
    //activePlayer = activePlayer === 0 ? 1 : 0;
    switchActivePlayer();
    updateActivePlayer();
  } else {
    updateCurrentScore(activePlayer, diceRolledValue);
  }
};

const handleNewGame = () => {
  ((player1Score = 0),
    (player1CurrentScore = 0),
    (player2Score = 0),
    (player2CurrentScore = 0),
    (arrPlayerCurrentScore = [player1CurrentScore, player2CurrentScore]),
    (arrPlayerScore = [player1Score, player2Score]),
    (rollDice = 0),
    (activePlayer = 0));
  // btnHoldScore.disabled = false;
  handleDisableHoldBtn(false);

  // btnRollDice.disabled = false;
  handleDisableRollDiceBtn(false);

  updateActivePlayer();
  removeWinner();
  updateCurrentScore(0, 0);
  updateCurrentScore(1, 0);
  updateScore(0);
  updateScore(1);
};

const handleHoldScore = () => {
  updateScore(activePlayer);
  if (arrPlayerScore[activePlayer] >= 100) {
    updateWinner(activePlayer);
    // btnHoldScore.disabled = true;
    handleDisableHoldBtn(true);

    // btnRollDice.disabled = true;
    handleDisableRollDiceBtn(true);
    return;
  }
  updateCurrentScore(activePlayer, -arrPlayerCurrentScore[activePlayer]);
  // activePlayer = activePlayer === 0 ? 1 : 0;
  switchActivePlayer();
  updateActivePlayer();
};

btnRollDice.addEventListener('click', handleRollDice);
btnNewGame.addEventListener('click', handleNewGame);
btnHoldScore.addEventListener('click', handleHoldScore);

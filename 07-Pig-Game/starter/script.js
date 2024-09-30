'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

// Selecting buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  //setting text content to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // reset the current score not to continue from the previous instance
  currentScore = 0;
  // switching the players
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Setting starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
// hidding the dice element(image) at the beginning of the game.
diceEl.classList.add('hidden');

// Rolling the dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    // manipulating the source el from the html
    diceEl.src = `dice-${dice}.png`;

    // 3. Checked for rolled 1: if true,
    if (dice !== 1) {
      // Add dice to the currents score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// Holding the score

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    //   scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.Check if player's score is >= 100;
    // Finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
      // Switch to the next player
    }
  }
});

// Resetting the game
btnNew.addEventListener('click', function () {
  // Resetting all scores to 0
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textcontent = 0;

  // Hidding the dice element
  diceEl.classList.add('hidden');

  // Setting player one as acive player
  player0El.classList.add('.player--active');
});

'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--new')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const scores = [0, 0]
let currentScore = 0
let activePlayer = 0


// Setting conditions
score0El.textContent = 0;
score1El.textContent = 0; 
diceEl.classList.add('hidden');


// Rolling the dice functionality

btnRoll.addEventListener('click', function(){
   
    // 1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1

    // 2. Display the dice 
    diceEl.classList.remove('hidden');
    // manipulating the source el from the html
    diceEl.src = `dice-${dice}.png`
    console.log(dice);  

    // 3. Checked for rolled 1: if true, 
    if(dice !== 1){
        // Add dice to the currents score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
       
    }else{
        // switch to the next player
           //setting text content to 0
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0
    
        player1.classList.remove('player--active')
        player2.classList.add('player--active')
    }
})

 
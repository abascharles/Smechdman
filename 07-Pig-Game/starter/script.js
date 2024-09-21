'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--new')

// Generating a randon number for the dice roll.
const dice = Math.trunc(Math.random() * 6 + 1)
console.log(dice)

// Setting conditions
score0El.textContent = 0;
score1El.textContent = 0; 
diceEl.classList.add('hidden');


// Rolling the dice
btnRoll.addEventListener('click', function(){
    diceEl.classList.remove('hidden');
     
})

 
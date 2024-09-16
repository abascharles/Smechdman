'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!; '

// document.querySelector('.number').textContent = '13'
// document.querySelector('.score').textContent = '10'

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);\

///////////////////////////////////////////////////////
// Secret Number
let secretNumber = Math.trunc(Math.random() *20) +1;

// Declaring the score to inc/dec later
let score = 20
let highscore = 0


// Listening to events
document.querySelector('.check').addEventListener('click', function(){
 const guess = Number(document.querySelector('.guess').value);

// Implementing the game logic
// When there is no input
 if(!guess){
   document.querySelector('.message').textContent = 'No number!⛔'
// When player wins
 }else if(guess === secretNumber){
   document.querySelector('.message').textContent = '🎉Correct Number!'
   document.querySelector('.number').textContent = secretNumber

// Manupulating css styles
document.querySelector('body').style.backgroundColor = '#60b347'
document.querySelector('.number').style.width = '30rem'

//high score implementation
if(score > highscore){
  highscore = score;
  document.querySelector('.highscore').textContent = highscore
}

// When guess is too high
 }else if(guess > secretNumber){
   if(score > 1 ){
   document.querySelector('.message').textContent = '📈 Too High!'
   // decreasing the score and displaying it. 
   score--
   document.querySelector('.score').textContent = score
   }else{
   document.querySelector('.message').textContent = '💥You Lost the game'
   document.querySelector('.score').textContent = 0
   }

  // When guess is too low
 }else if(guess < secretNumber){
     if(score > 1 ){
   document.querySelector('.message').textContent = '📉 Too Low!'
   // decresing the score and displaying it. 
   score--
   document.querySelector('.score').textContent = score
   }else{
   document.querySelector('.message').textContent = '💥You Lost the game'
   document.querySelector('.score').textContent = 0
   }
 }
});

// Resetting the game
document.querySelector('.again').addEventListener('click', function(){
score = 20;
//new secret number 
secretNumber = Math.trunc(Math.random() *20) +1;
document.querySelector('.message').textContent = 'Start guessing...'
document.querySelector('.score').textContent = score;



document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
})


// Implementing the highscore

'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!; '


// document.querySelector('.number').textContent = '13'
// document.querySelector('.score').textContent = '10'

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);\

///////////////////////////////////////////////////////
// Secret Number
const secretNumber = Math.trunc(Math.random() *20) +1

// Declaring the score to inc/dec later
let score = 20
document.querySelector('.number').textContent = secretNumber

// Listening to events
document.querySelector('.check').addEventListener('click', function(){
 const guess = Number(document.querySelector('.guess').value);

// Implementing the game logic
 if(!guess){
   document.querySelector('.message').textContent = 'No number!⛔'

 }else if(guess === secretNumber){
   document.querySelector('.message').textContent = '🎉Correct Number!'

 }else if(guess > secretNumber){
   if(score > 1 ){
   document.querySelector('.message').textContent = '📈 Too High!'
   // decresing the score and displaying it. 
   score--
   document.querySelector('.score').textContent = score
   }else{
   document.querySelector('.message').textContent = '💥You Lost the game'
   document.querySelector('.score').textContent = 0
   }

   
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


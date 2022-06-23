'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent ='0';
score1El.textContent ='0';
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
    //1-Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2-Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3- check for rolled 1: is true switch to next player
    if (dice !== 1) {
        //add dice to current score
        currentScore += dice;
        console.log(currentScore);
        current0El.textContent = currentScore; // change later
    }else{
        current0El.textContent = '0';
        currentScore = 0;
        //switch to next player
    }

});
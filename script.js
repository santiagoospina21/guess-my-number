'use strict';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.score').textContent = 10; // Seleccionar el contenido de la clase con nombre "score" y cambiarlo
document.querySelector('.number').textContent = 13; //Seleccionar el contenido de la clase con nombre "numero" y cambiarlo

document.querySelector('.guess').value = 23; //Se usa value para valores de entrada con un input
console.log((document.querySelector('.guess').value = 23));
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const backgroundColor = function (color) {
  document.querySelector('body').style.background = color;
};

const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

//Boton Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  //document.querySelector('.score').textContent = score;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  //document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  //document.querySelector('body').style.background = '#222';
  numberWidth('15rem');
  //document.querySelector('.number').style.width = '15rem';
});

//Boton de Check
document.querySelector('.check').addEventListener('click', function () {
  //Seleccionar el evento de click el cual cumple una funcion
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Cuando no hay input
  if (!guess) {
    displayMessage('⛔ No Number');
    //console.log((document.querySelector('.message').textContent = '⛔ No Number'));

    //Cuando se gana
  } else if (guess === SecretNumber) {
    displayMessage('Correct Number!🎉');
    //document.querySelector('.message').textContent = 'Correct Number!🎉';
    displayNumber(SecretNumber);
    //document.querySelector('.number').textContent = SecretNumber;
    backgroundColor('#60b347');
    //document.querySelector('body').style.background = '#60b347';
    numberWidth('30rem');
    //document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      // Setear el score maximo
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? '↗ Too High' : '↘ Too Low');
      //document.querySelector('.message').textContent = guess > SecretNumber ? '↗ Too High' : '↘ Too Low';
      score--;
      displayScore(score);
      //document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game ❌');
      //document.querySelector('.message').textContent = 'You lost the game ❌';
      displayScore(0);
      //document.querySelector('.score').textContent = 0;
      backgroundColor('#FF0000');
      //document.querySelector('body').style.background = '#FF0000';
      numberWidth('30rem');
      //document.querySelector('.number').style.width = '30rem';
    }
  }
  /*
  //Cuando el numero es mayor
  else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '↗ Too High ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ❌';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
    }
    //Cuando el numero es menor
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '↘ Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ❌';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
    }
  }*/
});

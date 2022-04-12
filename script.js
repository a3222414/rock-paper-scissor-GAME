'use strict';

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const answerImages = document.querySelectorAll('.user-choice-img');
const computerAnswerDisplay = document.querySelectorAll('.computer-choice-img');
const overlayButtons = document.querySelector('.overlay-on-buttons');
//MUSIC
const audio = new Audio('music.mp3');
audio.volume = 0.05;
const winsound = new Audio('winSound.mp3');
winsound.volume = 0.2;
const loseSound = new Audio('loseSound.mp3');
loseSound.volume = 0.5;
const tryAgain = new Audio('tryAgain.mp3');
tryAgain.volume = 0.5;
let userChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    audio.play();
    overlayButtons.classList.toggle('hidden');
    userChoice = e.target.id;
    console.log(userChoice);
    answerImages.forEach((el) => el.classList.add('hidden'));

    const answer = document.querySelector(`.choice-${userChoice}`);
    answer.classList.remove('hidden');

    const removeOverlay = setTimeout(
      () => overlayButtons.classList.toggle('hidden'),
      3500
    );
    let count = 0;

    const randomImg = function () {
      computerAnswerDisplay.forEach((el) => el.classList.add('hidden'));
      const randomNumber = Math.trunc(Math.random() * 3) + 1;
      const computerAnswer = document.querySelector(`.act-${randomNumber}`);
      computerAnswer.classList.remove('hidden');

      if (count === 15) {
        count = 0;
        console.log(randomNumber);

        if (Number(userChoice) === randomNumber) {
          resultDisplay.style.color = '#0b7285';
          resultDisplay.textContent = 'Try Again! 👻';
          tryAgain.play();
        }
        if (Number(userChoice) === 1 && randomNumber === 2) {
          resultDisplay.style.color = '#343a40';
          resultDisplay.textContent = 'LOSER! 😈';
          loseSound.play();
        }
        if (Number(userChoice) === 1 && randomNumber === 3) {
          resultDisplay.style.color = '#f783ac';
          resultDisplay.textContent = 'WINNER! 😳';
          winsound.play();
        }
        if (Number(userChoice) === 2 && randomNumber === 1) {
          resultDisplay.style.color = '#f783ac';
          resultDisplay.textContent = 'WINNER! 😳';
          winsound.play();
        }
        if (Number(userChoice) === 2 && randomNumber === 3) {
          resultDisplay.style.color = '#343a40';
          resultDisplay.textContent = 'LOSER! 😈';
          loseSound.play();
        }
        if (Number(userChoice) === 3 && randomNumber === 2) {
          resultDisplay.style.color = '#f783ac';
          resultDisplay.textContent = 'WINNER! 😳';
          winsound.play();
        }
        if (Number(userChoice) === 3 && randomNumber === 1) {
          resultDisplay.style.color = '#343a40';
          resultDisplay.textContent = 'LOSER! 😈';
          loseSound.play();
        }

        clearInterval(showRandomImg);
      }
      count++;
    };

    const showRandomImg = setInterval(function () {
      randomImg();
    }, 100);
  })
);

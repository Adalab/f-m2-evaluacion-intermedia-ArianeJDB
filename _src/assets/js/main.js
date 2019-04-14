"use strict";
//constantes de elementos:
const counter = document.querySelector(".counter");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const feedback = document.querySelector(".feedback");
let i = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber); 

function final() {
  const number = parseInt(input.value);
  if (number < randomNumber) {
    feedback.innerHTML = "Demasiado bajo.";
    
    i = i + 1;
    counter.innerHTML = i;
  } else if (number > randomNumber) {
    feedback.innerHTML = "Demasiado alto.";
    i = i + 1;
    counter.innerHTML = i;
  } else {
    feedback.innerHTML = "¡HAS GANADO, CAMPEONA!";
    i = i + 1;
    counter.innerHTML = i;
  }
}

btn.addEventListener("click", final);

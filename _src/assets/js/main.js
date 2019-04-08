
'use strict';
  //constantes de elementos:
  const counter = document.querySelector('.counter');
  const input = document.querySelector('.input');
  const btn = document.querySelector('.btn');
  const feedback = document.querySelector('.feedback');

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
  }

  console.log('> ' + getRandomNumber(100));
  

  function final() {
    if (input.value < getRandomNumber(100)) {
    feedback.innerHTML = 'Demasiado bajo.'
  }
  else if (input.value > getRandomNumber(100)) {
    feedback.innerHTML = 'Demasiado alto.'

  } else if (input.value === getRandomNumber(100)) {
    feedback.innerHTML = '¡HAS GANADO, CAMPEONA!'
  }
  }
  
  btn.addEventListener('click', final);


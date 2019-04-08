
'use strict';
  //constantes de elementos:
  const counter = document.querySelector('.counter');
  const input = document.querySelector('.input');
  const btn = document.querySelector('.btn');
  const feedback = document.querySelector('.feedback');



  function final() {
    if (input.value < getRandomNumber) {
    feedback.innerHTML = 'Demasiado bajo.'
}
  else if (input.value > getRandomNumber) {
    feedback.innerHTML = 'Demasiado alto.'

  } else if (input.value === getRandomNumber) {
    feedback.innerHTML = '¡HAS GANADO, CAMPEONA!'
  }
  }

  btn.addEventListener('click', final);
  
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
  }


  console.log('> ' + getRandomNumber(100));
  

  
  //PIntar en azul: pistas feeback
  //si input es > que getRandomNumber: "demasiado alto"
  //si input es < que getRandomNumber: "demasiado bajo"
  //si input es === que getRandomNumber: "¡HAS GANADO, CAMPEONA!" TERMINA(no se como termina) creo que siendo el ultimo return



//condicional if
//funcion (condicional dentro de funcion?????)

//listener de click de boton de prueba




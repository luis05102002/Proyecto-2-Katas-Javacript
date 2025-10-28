// exercise-4.js

// 1.1 Evento click en el botón #btnToClick
const btnToClick = document.querySelector('#btnToClick');
btnToClick.addEventListener('click', (event) => {
  console.log('Evento click:', event);
  console.log('Detalles del evento:', {
    type: event.type,
    target: event.target,
    currentTarget: event.currentTarget,
    clientX: event.clientX,
    clientY: event.clientY
  });
});

// 1.2 Evento focus en input.focus
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
  console.log('Evento focus - Valor actual:', event.target.value);
});

// 1.3 Evento input en input.value (se dispara al escribir)
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
  console.log('Evento input - Valor actual:', event.target.value);
});
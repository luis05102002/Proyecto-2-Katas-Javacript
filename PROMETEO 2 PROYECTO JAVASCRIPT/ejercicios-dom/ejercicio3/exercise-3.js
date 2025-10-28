// exercise-3.js

// 1.1 Crear lista ul > li con países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.2 Eliminar elemento con clase .fn-remove-me
const removeMe = document.querySelector('.fn-remove-me');
if (removeMe) {
  removeMe.remove();
}

// 1.3 Crear lista de coches en el div[data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
printHereDiv.appendChild(ulCars);

// 1.4 Crear divs con h4 + img para cada país
const countriesWithImg = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement('div');
container.className = 'countries-container';

countriesWithImg.forEach((country, index) => {
  const div = document.createElement('div');
  div.className = 'country-card';
  div.dataset.index = index; // Para identificar al eliminar

  const h4 = document.createElement('h4');
  h4.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;
  img.alt = country.title;
  img.width = 300;
  img.height = 200;

  // Botón para eliminar este div
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar este';
  btn.addEventListener('click', () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btn);
  container.appendChild(div);
});
document.body.appendChild(container);

// 1.5 Botón para eliminar el último div
const btnRemoveLast = document.getElementById('btn-remove-last');
btnRemoveLast.addEventListener('click', () => {
  const cards = document.querySelectorAll('.country-card');
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
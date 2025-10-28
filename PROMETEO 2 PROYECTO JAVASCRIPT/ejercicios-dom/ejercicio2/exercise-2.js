// exercise-2.js

// 2.1 Inserta dinámicamente un div vacío
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinámicamente un div que contenga un <p>
const divWithP = document.createElement("div");
const pInside = document.createElement("p");
pInside.textContent = "Soy un párrafo dentro de un div";
divWithP.appendChild(pInside);
document.body.appendChild(divWithP);

// 2.3 Inserta dinámicamente un div con 6 <p> usando un bucle
const divWithSixP = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = `Párrafo ${i}`;
  divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

// 2.4 Inserta dinámicamente una p con el texto 'Soy dinámico!'
const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2.fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Crea una lista <ul> con los elementos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos con la clase .fn-remove-me
const toRemove = document.querySelectorAll(".fn-remove-me");
toRemove.forEach(node => node.remove());

// 2.8 Inserta una p con 'Voy en medio!' entre los dos div
const allDivs = document.querySelectorAll("div");
const middleP = document.createElement("p");
middleP.textContent = "Voy en medio!";
// Insertar entre el segundo y tercer div (índices 1 y 2)
if (allDivs[1] && allDivs[2]) {
  allDivs[1].parentNode.insertBefore(middleP, allDivs[2]);
}

// 2.9 Inserta p con 'Voy dentro!' en todos los div.fn-insert-here
const insertHereDivs = document.querySelectorAll("div.fn-insert-here");
insertHereDivs.forEach(div => {
  const innerP = document.createElement("p");
  innerP.textContent = "Voy dentro!";
  div.appendChild(innerP);
});
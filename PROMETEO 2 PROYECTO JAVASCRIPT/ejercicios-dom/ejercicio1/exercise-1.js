// 1.1 Botón con clase .showme
console.log("1.1 Botón .showme:");
const showMeBtn = document.querySelector(".showme");
console.log(showMeBtn); // <button class="showme">Pillame!</button>

// 1.2 h1 con id #pillado
console.log("\n1.2 h1 #pillado:");
const pillado = document.querySelector("#pillado");
console.log(pillado); // <h1 id="pillado">Aqui estoy 8)</h1>

// 1.3 Todos los <p>
console.log("\n1.3 Todos los <p>:");
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
  console.log(`p[${index}]:`, p);
});

// 1.4 Todos los elementos con clase .pokemon
console.log("\n1.4 Elementos .pokemon:");
const pokemons = document.querySelectorAll(".pokemon");
pokemons.forEach((pokemon, index) => {
  console.log(`pokemon[${index}]:`, pokemon);
});

// 1.5 Todos los elementos con data-function="testMe"
console.log("\n1.5 Elementos [data-function='testMe']:");
const testMeElements = document.querySelectorAll("[data-function='testMe']");
testMeElements.forEach((el, index) => {
  console.log(`testMe[${index}]:`, el);
});

// 1.6 Tercer elemento con data-function="testMe" (índice 2)
console.log("\n1.6 Tercer personaje con data-function='testMe':");
const thirdCharacter = document.querySelectorAll("[data-function='testMe']")[2];
console.log(thirdCharacter); // <span data-function="testMe">Rick</span>
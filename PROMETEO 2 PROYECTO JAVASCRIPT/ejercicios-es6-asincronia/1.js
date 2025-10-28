// exercise-1.js


console.log("=== EJERCICIO 1 - DESTRUCTURING ===\n");

// 1.1 Destructuring del objeto (sin tocar el array)
const game = { 
  title: 'The Last of Us 2', 
  gender: ['action', 'zombie', 'survival'], 
  year: 2020 
};

const { title, gender, year } = game;

console.log("1.1 Destructuring del objeto game:");
console.log("title:", title);
console.log("gender:", gender);
console.log("year:", year);
console.log("---");

// 1.2 Destructuring del array
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;

console.log("1.2 Destructuring del array fruits:");
console.log("fruit1:", fruit1);
console.log("fruit2:", fruit2);
console.log("fruit3:", fruit3);
console.log("---");

// 1.3 Destructuring de función que retorna objeto
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

const { name: animalName, race: animalRace } = animalFunction();

console.log("1.3 Destructuring de función:");
console.log("animalName:", animalName);
console.log("animalRace:", animalRace);
console.log("---");

// 1.4 Destructuring con objeto + array anidado
const car = { 
  name: 'Mazda 6', 
  itv: [2015, 2011, 2020] 
};

const { name, itv } = car;
const [itv1, itv2, itv3] = itv;

console.log("1.4 Destructuring de car:");
console.log("name:", name);
console.log("itv (array completo):", itv);
console.log("itv1:", itv1);
console.log("itv2:", itv2);
console.log("itv3:", itv3);
console.log("---");

console.log("¡Todo el destructuring funciona correctamente!");
// exercise-3.js


console.log("=== EJERCICIO 3 - .map() → SOLO NOMBRES EN ARRAYS ===\n");

// 3.1 Extraer solo los nombres con .map()
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const userNames = users.map(user => user.name);

console.log("3.1 Nombres de usuarios:");
console.log(userNames); // → ['Abel', 'Julia', 'Pedro', 'Amanda']
console.log("---");

// 3.2 Cambiar a 'Anacleto' si empieza por 'A' → solo nombres
const namesWithAnacleto = users.map(user => {
  return user.name.startsWith('A') ? 'Anacleto' : user.name;
});

console.log("3.2 Nombres (A → Anacleto):");
console.log(namesWithAnacleto); // → ['Anacleto', 'Julia', 'Pedro', 'Anacleto']
console.log("---");

// 3.3 Añadir ' (Visitado)' si isVisited → solo nombres
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const cityNamesWithStatus = cities.map(city => {
  return city.isVisited ? `${city.name} (Visitado)` : city.name;
});

console.log("3.3 Nombres de ciudades con estado:");
console.log(cityNamesWithStatus); 
// → ['Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul']
console.log("---");

console.log("¡Todos los resultados son arrays con solo nombres!");
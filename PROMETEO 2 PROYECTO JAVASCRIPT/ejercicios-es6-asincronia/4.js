// exercise-4.js



// Datos de entrada
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

// 4.1 Edades > 18 → solo números (ya es array de números)
const mayoresDe18 = ages.filter(age => age > 18);

console.log("4.1 Edades > 18:");
console.log(mayoresDe18); // [22, 24, 55, 65, 21, 90]
console.log("---");

// 4.2 Edades pares → solo números
const edadesPares = ages.filter(age => age % 2 === 0);

console.log("4.2 Edades pares:");
console.log(edadesPares); // [22, 14, 24, 12, 90]
console.log("---");

// 4.3 Streamers de LoL → solo nombres
const lolNames = streamers
  .filter(s => s.gameMorePlayed === 'League of Legends')
  .map(s => s.name);

console.log("4.3 Nombres de streamers de LoL:");
console.log(lolNames); // ['Ibai', 'Reven']
console.log("---");

// 4.4 Streamers con 'u' en el nombre → solo nombres
const namesWithU = streamers
  .filter(s => s.name.includes('u'))
  .map(s => s.name);

console.log("4.4 Nombres con 'u':");
console.log(namesWithU); // ['Rubius', 'AuronPlay']
console.log("---");

// 4.5 Streamers con 'Legends' → nombres + MAYÚSCULAS si age > 35
const legendsNames = streamers
  .filter(s => s.gameMorePlayed.includes('Legends'))
  .map(s => {
    if (s.age > 35) {
      return `${s.name.toUpperCase()} (juega ${s.gameMorePlayed.toUpperCase()})`;
    }
    return s.name;
  });

console.log("4.5 Nombres con 'Legends' (mayúsculas si >35):");
console.log(legendsNames);
// → ['Ibai', 'REVEN (juega LEAGUE OF LEGENDS)']
console.log("---");

console.log("¡TODOS LOS RESULTADOS SON ARRAYS DE NOMBRES (strings)!");
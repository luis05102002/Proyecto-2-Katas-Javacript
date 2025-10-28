// Ejercicio 23
// Usa un bucle para crear 3 arrays de películas filtrados por categorías.
// Película pequeña -> menos de 100 minutos
// Película mediana -> más de 100 y menos de 200 minutos
// Película grande -> más de 200 minutos
// Imprime solo los nombres de las películas en cada categoría.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// Arrays vacíos para almacenar los NOMBRES (no los objetos)
const smallMovies = [];   // < 100 min
const mediumMovies = [];  // 100 - 199 min
const largeMovies = [];   // >= 200 min

// Un solo bucle que recorre todas las películas
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  const duration = movie.durationInMinutes;

  // Clasificación por duración
  if (duration < 100) {
    smallMovies.push(movie.name);      // Solo el nombre
  } else if (duration < 200) {
    mediumMovies.push(movie.name);     // Solo el nombre
  } else {
    largeMovies.push(movie.name);      // Solo el nombre
  }
}

// === IMPRIMIR SOLO LOS NOMBRES EN UNA LÍNEA ===
console.log("Películas pequeñas (< 100 min):");
console.log(smallMovies.join(", "));

console.log("\nPelículas medianas (100 - 199 min):");
console.log(mediumMovies.join(", "));

console.log("\nPelículas grandes (>= 200 min):");
console.log(largeMovies.join(", "));
// Ejercicio 37
// Usa for...of para:
// 1. Generar un array con los NOMBRES de las películas
// 2. Generar un array con las CATEGORÍAS ÚNICAS (sin repetir)
// Usa .includes() para evitar duplicados


const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// === ARRAY DE NOMBRES ===
const nombresPeliculas = [];

// === ARRAY DE CATEGORÍAS ÚNICAS ===
const categorias = [];

// Bucle for...of que recorre cada película
for (const movie of movies) {
  // 1. Añadir el nombre de la película
  nombresPeliculas.push(movie.title);

  // 2. Añadir categorías únicas
  for (const category of movie.categories) {
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

console.log("=== NOMBRES DE LAS PELÍCULAS ===");
console.log("[ " + nombresPeliculas.join(", ") + " ]");

console.log("\n=== CATEGORÍAS ÚNICAS ===");
console.log("[ " + categorias.join(", ") + " ]");
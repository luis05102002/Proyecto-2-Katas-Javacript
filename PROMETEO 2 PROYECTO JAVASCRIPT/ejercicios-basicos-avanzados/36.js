// Ejercicio 36
// Crea una función que reciba una lista de actores con su año de nacimiento
// y devuelva un nuevo array con { name, age } para cada uno.
// Usa Date.now() para obtener el año actual.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  // Array para almacenar el resultado
  const result = [];

  // Bucle que recorre cada actor
  for (let i = 0; i < actors.length; i++) {
    const actor = actors[i];
    const age = currentYear - actor.born;

    // Añadir objeto con nombre y edad al resultado
    result.push({
      name: actor.name,
      age: age
    });
  }

  return result;
}

// === PRUEBA DE LA FUNCIÓN ===
console.log("=== EDADES DE ACTORES (2025) ===");
const actorsWithAges = calculateActorsAges(actors);

actorsWithAges.forEach(actor => {
  console.log(`${actor.name}: ${actor.age} años`);
});
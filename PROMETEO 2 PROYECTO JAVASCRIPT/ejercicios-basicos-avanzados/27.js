// Ejercicio 27
// Encuentra la serie de dibujos animados más antigua (menor año de debut)
// Guarda solo su NOMBRE en una variable e imprímelo.

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// Variable para guardar el nombre de la serie más antigua
let oldestCartoon = "";

// Variable para guardar el año más bajo encontrado
let earliestYear = Infinity;  // Empezamos con un valor muy alto

// Bucle for que recorre cada serie
for (let i = 0; i < cartoons.length; i++) {
  const cartoon = cartoons[i];

  // Si este año es menor que el más bajo encontrado hasta ahora
  if (cartoon.debut < earliestYear) {
    earliestYear = cartoon.debut;   // Actualiza el año más antiguo
    oldestCartoon = cartoon.name;   // Actualiza el nombre
  }
}

// Imprimir solo el nombre de la serie más antigua
console.log("Serie de dibujos animados más antigua:");
console.log(oldestCartoon);
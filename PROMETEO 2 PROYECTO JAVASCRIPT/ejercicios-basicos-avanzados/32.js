// Ejercicio 32
// Crea una función que reciba un array de X-Men y retorne el miembro más antiguo (menor año)
// Debe retornar el objeto completo del miembro más antiguo

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  // Caso base: si el array está vacío
  if (xMen.length === 0) return null;

  // Empezamos con el primer miembro como el más antiguo
  let oldest = xMen[0];

  // Bucle que compara cada miembro con el más antiguo encontrado
  for (let i = 1; i < xMen.length; i++) {
    const current = xMen[i];

    // Si este miembro apareció antes (año menor)
    if (current.year < oldest.year) {
      oldest = current;  // Actualizar el más antiguo
    }
  }

  return oldest;  // Retorna el objeto completo del miembro más antiguo
}

// === PRUEBA DE LA FUNCIÓN ===
const oldestXMen = findOldestXMen(xMen);

console.log("Miembro más antiguo de los X-Men:");
console.log(oldestXMen);
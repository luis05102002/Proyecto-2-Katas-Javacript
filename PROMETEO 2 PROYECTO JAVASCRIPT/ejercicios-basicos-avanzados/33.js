// Ejercicio 33
// Desarrolla una función que reciba un país por parámetro y devuelva su capital.
// Utiliza un objeto para almacenar los países y sus capitales.
// La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  // Si el país existe en el objeto, retorna su capital
  if (capitals[country]) {
    return capitals[country];
  } 
  // Si no existe, retorna mensaje de error
  else {
    return "País no encontrado";
  }
}

// === PRUEBAS DE LA FUNCIÓN ===
console.log("=== PRUEBAS EJERCICIO 33 ===");
console.log(getCapital("Spain"));     // → Madrid
console.log(getCapital("France"));    // → Paris
console.log(getCapital("Brazil"));    // → País no encontrado
console.log(getCapital("Japan"));     // → País no encontrado
console.log(getCapital("Italy"));     // → Rome
// Ejercicio 42
// Crea una función swap(array, index1, index2)
// Intercambia los elementos en index1 e index2
// Retorna el array modificado

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Validar que los índices sean válidos
  if (
    index1 < 0 || index1 >= array.length ||
    index2 < 0 || index2 >= array.length
  ) {
    console.log("Error: uno o ambos índices están fuera del rango del array.");
    return array; // Retorna el array original si hay error
  }

  // Intercambiar usando una variable temporal
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  // Retornar el array modificado
  return array;
}

// === PRUEBAS DE LA FUNCIÓN ===
console.log("=== PRUEBAS DE swap() ===");

// Copia del array original para no modificarlo en las pruebas
let team = [...fantasticFour];
console.log("Original:", team);

team = swap(team, 0, 3);
console.log("Intercambiar índices 0 y 3:", team);

team = swap(team, 1, 2);
console.log("Intercambiar índices 1 y 2:", team);

team = swap(team, 0, 0);
console.log("Intercambiar mismo índice (0 y 0):", team);

team = swap(team, 5, 10); // Índices inválidos
console.log("Índices inválidos:", team);
// Ejercicio 40
// 1. findArrayIndex: devuelve el índice del texto en el array
// 2. removeItem: usa findArrayIndex + .splice() para eliminar y retornar el nuevo array

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// === FUNCIÓN 1: findArrayIndex ===
function findArrayIndex(array, text) {
  // Bucle for que recorre el array
  for (let i = 0; i < array.length; i++) {
    // Si el elemento actual coincide con el texto
    if (array[i] === text) {
      return i;  // Retorna el índice
    }
  }
  // Si no se encuentra
  return -1;
}

// === FUNCIÓN 2: removeItem ===
function removeItem(array, text) {
  // 1. Obtener el índice usando findArrayIndex
  const index = findArrayIndex(array, text);

  // 2. Si no se encontró (índice -1), retornar el array original
  if (index === -1) {
    console.log(`"${text}" no encontrado en el array.`);
    return array;
  }

  // 3. Eliminar el elemento con .splice()
  array.splice(index, 1);

  // 4. Retornar el nuevo array (modificado)
  return array;
}

// === PRUEBAS DE findArrayIndex ===
console.log("=== PRUEBAS DE findArrayIndex ===");
console.log(findArrayIndex(mainCharacters, "Rey"));        // 4
console.log(findArrayIndex(mainCharacters, "Leia"));       // 1
console.log(findArrayIndex(mainCharacters, "Yoda"));       // -1

// === PRUEBAS DE removeItem ===
console.log("\n=== PRUEBAS DE removeItem ===");

// Copia del array original para no modificarlo en las pruebas
let characters = [...mainCharacters];
console.log("Original:", characters);

characters = removeItem(characters, "Leia");
console.log("Tras eliminar Leia:", characters);

characters = removeItem(characters, "Anakin");
console.log("Tras eliminar Anakin:", characters);

characters = removeItem(characters, "Yoda");  // No existe
console.log("Tras intentar eliminar Yoda:", characters);

characters = removeItem(characters, "Luke");
console.log("Tras eliminar Luke:", characters);
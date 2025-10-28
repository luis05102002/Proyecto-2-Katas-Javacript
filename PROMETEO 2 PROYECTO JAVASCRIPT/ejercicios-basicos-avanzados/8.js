// Ejercicio 8: Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tengan la misma longitud deberá devolver el primero.
function findLongestWord(stringList) {
    let longestWord = stringList[0]; // Tomamos el primer string como referencia inicial
    
    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longestWord.length) {
            longestWord = stringList[i];
        }
    }
    
    return longestWord;
}

// Array para probar la función
const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M."
];

// Prueba de la función
console.log("--- Ejercicio 8: Buscar la palabra más larga ---");
console.log(findLongestWord(avengers)); // Debería mostrar: Spiderman
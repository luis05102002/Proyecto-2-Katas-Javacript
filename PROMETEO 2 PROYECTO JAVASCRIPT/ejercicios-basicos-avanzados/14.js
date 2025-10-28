// Ejercicio 14: Contador de repeticiones
// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
function repeatCounter(list) {
    const counter = {};
    
    // Contar repeticiones de cada palabra
    for (let i = 0; i < list.length; i++) {
        const word = list[i];
        counter[word] = (counter[word] || 0) + 1;
    }
    
    // Mostrar resultados en un formato claro
    console.log("--- Ejercicio 14: Contador de repeticiones ---");
    for (const word in counter) {
        console.log(`${word}: ${counter[word]}`);
    }
    
    return counter;
}

// Array para probar la función
const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

// Prueba de la función
repeatCounter(words);
// Debería mostrar:
// code: 4
// repeat: 1
// eat: 1
// sleep: 3
// enjoy: 2
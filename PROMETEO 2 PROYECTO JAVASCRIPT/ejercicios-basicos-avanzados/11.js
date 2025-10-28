// Ejercicio 11: Calcular promedio mezclado
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume.
function averageWord(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'number') {
            sum += list[i];
        } else if (typeof list[i] === 'string') {
            sum += list[i].length;
        }
    }
    return sum / list.length;
}

// Array para probar la función
const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo"
];

// Prueba de la función
console.log("--- Ejercicio 11: Promedio mezclado ---");
console.log(averageWord(mixedElements)); // Debería mostrar: 5.666666666666667
// Ejercicio 7: Completa esta función para que, al recibir dos números por argumento,
// te devuelva por consola el más alto de los dos.
function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}

// Ejemplos de uso para probar la función
console.log("--- Pruebas de la función greaterNumber ---");
greaterNumber(5, 3); // Debería mostrar: 5
greaterNumber(2, 7); // Debería mostrar: 7
greaterNumber(10, 10); // Debería mostrar: 10
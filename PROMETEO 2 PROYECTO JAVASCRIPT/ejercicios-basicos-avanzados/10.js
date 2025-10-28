// Ejercicio 10: Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
function average(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum / numberList.length;
}

// Array para probar la función
const numbers = [12, 21, 38, 5, 45, 37, 6];

// Prueba de la función
console.log("--- Ejercicio 10: Calcular promedio ---");
console.log(average(numbers)); // Debería mostrar: 23.428571428571427
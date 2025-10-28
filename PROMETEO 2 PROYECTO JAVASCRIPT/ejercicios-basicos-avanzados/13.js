// Ejercicio 13: Buscador de nombres
// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array.
// Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
function nameFinder(nameList, value) {
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === value) {
            return [true, i];
        }
    }
    return false;
}

// Array para probar la función
const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

// Pruebas de la función
console.log("--- Ejercicio 13: Buscador de nombres ---");
console.log(nameFinder(names, 'Tony'));     // Debería mostrar: [true, 2]
console.log(nameFinder(names, 'Natasha'));  // Debería mostrar: [true, 3]
console.log(nameFinder(names, 'Wanda'));    // Debería mostrar: false